import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";

import nofileUploaded from "@/assets/no-file-uploaded.png";
import Button from "@/components/ui/button";
import UploadFile from "./upload-file";

function NoFiles() {
  const [uploadFileVisibility, setUploadFileVisibility] = useState(false);

  return (
    <section className="flex-col-center gap-4">
      <UploadFile
        visibility={uploadFileVisibility}
        setVisibility={() => setUploadFileVisibility(false)}
      />
      <img src={nofileUploaded} alt="No file uploaded yet" />
      <p className="text-4xl font-medium">No file uploaded yet</p>
      <Button
        icon={<HiOutlinePlus />}
        size="lg"
        onClick={() => setUploadFileVisibility(true)}
      >
        Upload file
      </Button>
    </section>
  );
}

export default NoFiles;
