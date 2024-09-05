import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { GrEmoji } from "react-icons/gr";
import {
  RiAttachment2,
  RiCloseLine,
  RiFileTextLine,
  RiSendPlane2Line,
} from "react-icons/ri";

import Button from "@/components/ui/button";

function ChatInput() {
  const [file, setFile] = useState<File | null>(null);
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
      <div className="bg-[#ced9e8] rounded-3xl">
        {file && (
          <div className="flex items-center justify-between gap-2 p-6">
            <RiFileTextLine size={32} />
            <div className="w-4/6 space-y-2">
              <span className="">{file?.name}</span>
              <div className="w-full bg-white rounded-full overflow-hidden">
                <div
                  className="bg-success h-2 rounded-full"
                  style={{
                    width: `100%`,
                  }}
                />
              </div>
            </div>

            <Button
              variant="ghost"
              onClick={() => {
                setFile(null);
              }}
            >
              <RiCloseLine color="red" size={28} />
            </Button>
          </div>
        )}

        <div className="w-full rounded-full flex justify-between gap-2 px-6">
          <Button
            variant="ghost"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <GrEmoji size={26} />
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*, video/*, audio/*, application/*";
              input.onchange = (e) => {
                const files = (e.target as HTMLInputElement).files;
                if (files && files.length > 0) {
                  setFile(files[0]);
                }
              };
              input.click();
            }}
          >
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
