import { HiOutlinePlus } from "react-icons/hi";

import nofileUploaded from "@/assets/no-file-uploaded.png";
import Button from "@/components/ui/button";

const HomePage = () => {
  return (
    <section className="flex-col-center gap-4">
      <img src={nofileUploaded} alt="No file uploaded yet" />
      <p className="text-4xl font-medium">No file uploaded yet</p>
      <Button icon={<HiOutlinePlus />} size="lg">
        Upload file
      </Button>
    </section>
  );
};

export default HomePage;
