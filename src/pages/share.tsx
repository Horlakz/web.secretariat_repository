import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { useShareFile } from "./hook";
import { ShareProps } from "./interface";

function Share(props: ShareProps) {
  const [email, setEmail] = useState("");

  const shareFile = useShareFile();

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    const data = { to_email: email, file_id: props.file.id };

    shareFile.mutate(data, {
      onSuccess: () => {
        setEmail("");
        props.setVisibility();
      },
    });
  }

  return (
    <Modal
      visibility={props.visibility}
      setVisibility={props.setVisibility}
      showCloseButton
    >
      <div className="flex-col-center gap-6 p-14 min-w-[30rem]">
        <h4 className="text-2xl font-semibold">Share File</h4>

        <form className="w-full flex items-end gap-3">
          <Input
            label="Enter user email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button isLoading={shareFile.isLoading} onClick={handleSubmit}>
            Share
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default Share;
