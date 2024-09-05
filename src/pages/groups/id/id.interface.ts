import { ModalProps } from "@/components/ui/modal/modal.interface";

interface Group {
  id: string;
  name: string;
  members: GroupMmeber[];
}

interface GroupMmeber {
  name: string;
  isUser?: boolean;
}

export interface InviteUserModalProps
  extends Required<Omit<ModalProps, "showCloseButton" | "children">> {
  group: Group;
}

export interface GroupChatHeaderProps {
  group: Group;
}

export interface GroupChatSidebarProps {
  members: GroupMmeber[];
}

export interface ChatProps {
  chat: ChatItem[];
  userId: string;
}

interface ChatItem {
  id: string;
  message: string;
  sender: {
    id: string;
    name: string;
  };
  time: string;
}
