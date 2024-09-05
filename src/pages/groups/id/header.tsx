import { useState } from "react";

import { TbUserPlus } from "react-icons/tb";

import Button from "@/components/ui/button";
import Image from "@/components/ui/image";
import AddUserModal from "./add-user";
import { GroupChatHeaderProps } from "./id.interface";

function GroupChatHeader(props: GroupChatHeaderProps) {
  const [showInviteUserModal, setShowInviteUserModal] = useState(false);

  return (
    <>
      <AddUserModal
        visibility={showInviteUserModal}
        setVisibility={() => setShowInviteUserModal(false)}
        group={props.group}
      />
      <div className="w-full flex justify-between border-b border-brand py-4 px-6">
        <div className="flex items-center justify-start gap-4">
          <Image gravatar="Group Name" size={44} rounded />
          <h4 className="text-xl font-semibold">{props.group.name}</h4>
        </div>

        <Button
          variant="ghost"
          icon={<TbUserPlus />}
          onClick={() => setShowInviteUserModal(true)}
        >
          Add User
        </Button>
      </div>
    </>
  );
}

export default GroupChatHeader;
