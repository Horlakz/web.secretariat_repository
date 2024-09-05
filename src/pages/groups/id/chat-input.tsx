import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { GrEmoji } from "react-icons/gr";
import { RiAttachment2, RiSendPlane2Line } from "react-icons/ri";

import Button from "@/components/ui/button";

function ChatInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleInputFocus = () => {
      setShowEmojiPicker(false);
    };

    inputRef.current?.addEventListener("focus", handleInputFocus);

    return () => {
      inputRef.current?.removeEventListener("focus", handleInputFocus);
    };
  }, []);

  const onEmojiClick = (emojiData: EmojiClickData, e: MouseEvent) => {
    e.preventDefault();
    console.log(emojiData.emoji);
  };

  return (
    <div className="absolute bottom-5 w-full py-2 px-10">
      <div className="bg-brand/10 w-full rounded-full flex justify-between gap-2 px-6">
        <Button
          variant="ghost"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <GrEmoji size={26} />
        </Button>
        <Button variant="ghost">
          <RiAttachment2 size={26} />
        </Button>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type a message"
          className="h-12 w-full rounded-full bg-transparent focus:outline-none text-lg"
        />
        <Button variant="ghost">
          <RiSendPlane2Line size={28} />
        </Button>
      </div>

      {/* Emoji Picker */}
      <AnimatePresence>
        {showEmojiPicker && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: "bottom left" }}
            className="absolute bottom-16 left-10 z-10"
          >
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              className="!bg-[#cddae9]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatInput;
