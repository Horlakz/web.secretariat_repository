import { HiOutlinePlus } from "react-icons/hi2";

import Button from "@/components/ui/button";
import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import NoFiles from "./no-files";
import UploadFile from "./upload-file";

const HomePage = () => {
  const [visibility, setVisibility] = useState(false);

  const data = [
    {
      name: "File1",
      mime_type: "image/png",
      created_at: "2023-08-23",
    },
    {
      name: "File2",
      mime_type: "application/pdf",
      created_at: "2023-08-22",
    },
    {
      name: "File3",
      mime_type: "text/plain",
      created_at: "2023-08-21",
    },
  ];

  if (data.length == 0) return <NoFiles />;

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
                MIME Type
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left">
                Created At
              </th>
              <th className="border-b border-blue-700 py-3.5 font-medium text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border-b border-blue-700 py-3.5 flex items-center gap-2">
                  {row.name}
                </td>
                <td className="border-b border-blue-700 py-3.5">
                  {row.mime_type}
                </td>
                <td className="border-b border-blue-700 py-3.5">
                  {row.created_at}
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
