import { useParams } from "@/router/router.hook";
import { useEffect, useRef } from "react";
import Chat from "./chat";
import ChatInput from "./chat-input";
import GroupChatHeader from "./header";
import GroupChatSidebar from "./sidebar";

const GroupPage = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const { params } = useParams();

  useEffect(() => {
    // scroll to the bottom of the chat
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  const id = params.id as string;
  const userId = "f834e322-7986-4171-a9da-566d7e4ae4ec";

  const group = {
    id,
    name: "Group Name",
    members: [
      { name: "Diekoloreoluwa David", isUser: true },
      { name: "John Doe" },
      { name: "Jane Smith" },
      { name: "Michael Johnson" },
      { name: "Emily Davis" },
      { name: "Daniel Wilson" },
      { name: "Olivia Martinez" },
      { name: "David Anderson" },
      { name: "Sophia Taylor" },
      { name: "Matthew Thomas" },
      { name: "Emma Hernandez" },
    ],
  };

  const chat = [
    {
      id: "1",
      message: "Hello, how are you doing?",
      sender: {
        id: userId,
        name: "Diekoloreoluwa David",
      },
      time: "12:00 PM",
    },
    {
      id: "2",
      message: "I'm fine, thank you.",
      sender: { id: "7e398844-4d06-4907-9ae8-2bbf1e33268c", name: "John Doe" },
      time: "12:01 PM",
    },
    {
      id: "3",
      message: "How can I help you?",
      sender: {
        id: userId,
        name: "Diekoloreoluwa David",
      },
      time: "12:02 PM",
    },
    {
      id: "4",
      message: "I need your help with the project.",
      sender: { id: "7e398844-4d06-4907-9ae8-2bbf1e33268c", name: "John Doe" },
      time: "12:03 PM",
    },
    {
      id: "5",
      message: "I can't do it alone.",
      sender: { id: "7e398844-4d06-4907-9ae8-2bbf1e33268c", name: "John Doe" },
      time: "12:04 PM",
    },
    {
      id: "6",
      message: "I can help you with that.",
      sender: {
        id: "c051e77f-8568-4102-8382-ddc9aeb96a33",
        name: "Akinbule Daniel",
      },
      time: "12:05 PM",
    },
    {
      id: "7",
      message: "I'm good at Designing.",
      sender: {
        id: "c051e77f-8568-4102-8382-ddc9aeb96a33",
        name: "Akinbule Daniel",
      },
      time: "12:06 PM",
    },
    {
      id: "8",
      message: "Thank you.",
      sender: { id: "7e398844-4d06-4907-9ae8-2bbf1e33268c", name: "John Doe" },
      time: "12:07 PM",
    },
    {
      id: "9",
      message: "I think we can start now.",
      sender: {
        id: userId,
        name: "Diekoloreoluwa David",
      },
      time: "12:08 PM",
    },
  ];

  return (
    <div className="p-5">
      <section className="flex bg-brand/10 border shadow-md shadow-gray-400 h-[86vh] rounded-xl">
        <div className="relative w-4/6">
          <GroupChatHeader group={group} />

          <div ref={chatRef} className="h-[calc(100%-10rem)] overflow-scroll">
            <Chat chat={chat} userId={userId} />
          </div>

          <ChatInput />
        </div>

        <GroupChatSidebar members={group.members} />
      </section>
    </div>
  );
};

export default GroupPage;
