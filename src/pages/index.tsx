import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { HiOutlinePlus } from "react-icons/hi2";
import { RiDeleteBin6Line, RiShareForward2Fill } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

import Button from "@/components/ui/button";
import { bytesToMegaBytes } from "@/utilities/common";
import { IFileResponsePayload } from "./interface";
import NoFiles from "./no-files";
import Share from "./share";
import UploadFile from "./upload-file";

const HomePage = () => {
  const [uploadFileVisibility, setUploadFileVisibility] = useState(false);
  const [shareVisibility, setShareVisibility] = useState(false);
  const [show, setShow] = useState<null | number>(null);
  const [fileId, setFileId] = useState<string>("");
  const ref = useRef<HTMLTableCellElement>(null);

  function handleOutsideClick(event: MouseEvent) {
    // If the click is outside the dropdown, close it
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShow(null);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const query = useQuery<AxiosResponse<IFileResponsePayload>>({
    queryKey: ["file"],
  });

  if (query.isSuccess && query.data?.data.data.result.length == 0)
    return <NoFiles />;

  return (
    <div className="p-6">
      <UploadFile
        visibility={uploadFileVisibility}
        setVisibility={() => setUploadFileVisibility(false)}
      />
      <Share
        fileId={fileId}
        visibility={shareVisibility}
        setVisibility={() => setShareVisibility(false)}
      />
      <div className="w-full flex justify-start">
        <Button
          icon={<HiOutlinePlus />}
          size="lg"
          onClick={() => setUploadFileVisibility(true)}
        >
          Upload file
        </Button>
      </div>

      <div className="py-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left">
                Name
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left">
                File Type
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left">
                Size
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left">
                Created At
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left"></th>
            </tr>
          </thead>
          <tbody>
            {query.isLoading && (
              <tr>
                <td colSpan={5} className="text-center py-3.5">
                  Loading...
                </td>
              </tr>
            )}

            {query.isSuccess &&
              query.data.data.data.result.map((row, index) => (
                <tr key={index}>
                  <td className="border-b border-blue-700 py-3.5 flex items-center gap-2">
                    {row.name}
                  </td>
                  <td className="border-b border-blue-700 py-3.5">
                    {row.mime_type}
                  </td>
                  <td className="border-b border-blue-700 py-3.5">
                    {bytesToMegaBytes(row.size)}MB
                  </td>
                  <td className="border-b border-blue-700 py-3.5">
                    {new Date(row.created_at).toLocaleDateString()}
                  </td>
                  <td
                    ref={ref}
                    className="relative border-b border-blue-700 py-3.5"
                  >
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setShow(index);
                        setFileId(row.id);
                      }}
                    >
                      <SlOptions />
                    </Button>

                    <AnimatePresence>
                      {show === index && (
                        <motion.div
                          className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2 z-10"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ul className="flex flex-col gap-2 px-4">
                            <li>
                              <Button
                                variant="ghost"
                                icon={<RiShareForward2Fill />}
                                onClick={() => setShareVisibility(true)}
                              >
                                Share
                              </Button>
                            </li>
                            <li>
                              <Button
                                variant="ghost"
                                icon={<RiDeleteBin6Line />}
                                colorScheme="danger"
                              >
                                Delete
                              </Button>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
