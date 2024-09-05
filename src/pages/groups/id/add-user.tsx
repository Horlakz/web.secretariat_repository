import { useState } from "react";

import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { Modal } from "@/components/ui/modal";
import { InviteUserModalProps } from "./id.interface";

function AddUserModal(props: InviteUserModalProps) {
  const [email, setEmail] = useState("");

  return (
    <Modal
      visibility={props.visibility}
      setVisibility={props.setVisibility}
      showCloseButton
    >
      <div className="flex-col-center gap-6 p-14 max-w-[30rem]">
        <h4 className="text-2xl font-semibold">Add a User</h4>

        <p className="text-center">
          Enter the email address of the user you want to add to{" "}
          <span className="font-semibold">{"group name"}</span>
        </p>

        <form className="w-full flex items-end gap-3">
          <Input
            label="Enter user email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>Add</Button>
        </form>
      </div>
    </Modal>
  );
}

export default AddUserModal;
