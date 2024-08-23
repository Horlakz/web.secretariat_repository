import nofileUploaded from "@/assets/no-file-uploaded.png";
import Button from "@/components/ui/button";
import { HiOutlinePlus } from "react-icons/hi2";

function NoFiles() {
  return (
    <section className="flex-col-center gap-4">
      <img src={nofileUploaded} alt="No file uploaded yet" />
      <p className="text-4xl font-medium">No file uploaded yet</p>
      <Button icon={<HiOutlinePlus />} size="lg">
        Upload file
      </Button>
    </section>
  );
}

export default NoFiles;
