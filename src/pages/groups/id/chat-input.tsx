import { GrEmoji } from "react-icons/gr";
import { RiAttachment2, RiSendPlane2Line } from "react-icons/ri";

import Button from "@/components/ui/button";

function ChatInput() {
  return (
    <div className="absolute bottom-5 w-full py-2 px-10">
      <div className="bg-brand/10 w-full rounded-full flex justify-between gap-2 px-6">
        <Button variant="ghost" className="">
          <GrEmoji size={26} />
        </Button>
        <Button variant="ghost" className="">
          <RiAttachment2 size={26} />
        </Button>
        <input
          type="text"
          placeholder="Type a message"
          className="h-12 w-full rounded-full bg-transparent focus:outline-none text-lg"
        />
        <Button variant="ghost" className="">
          <RiSendPlane2Line size={28} />
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;
