import { HiOutlinePlus } from "react-icons/hi2";

import Button from "@/components/ui/button";
import { bytesToMegaBytes } from "@/utilities/common";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { IFileResponsePayload } from "./interface";
import NoFiles from "./no-files";
import UploadFile from "./upload-file";

const HomePage = () => {
  const [visibility, setVisibility] = useState(false);

  const query = useQuery<AxiosResponse<IFileResponsePayload>>({
    queryKey: ["file"],
  });

  if (query.isSuccess && query.data?.data.data.result.length == 0)
    return <NoFiles />;

  return (
    <div className="p-6">
      <UploadFile
        visibility={visibility}
        setVisibility={() => setVisibility(false)}
      />
      <div className="w-full flex justify-start">
        <Button
          icon={<HiOutlinePlus />}
          size="lg"
          onClick={() => setVisibility(true)}
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
                  <td className="border-b border-blue-700 py-3.5">
                    <Button variant="ghost">
                      <SlOptions />
                    </Button>
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
