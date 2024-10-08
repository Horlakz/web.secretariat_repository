import Button from "@/components/ui/button";
import classNames from "classnames";
import { RiFileTextLine } from "react-icons/ri";
import { ChatProps } from "./id.interface";

function Chat(props: ChatProps) {
  return (
    <div className="flex flex-col gap-3.5 p-8">
      {props.chat.map((item) => (
        <div
          key={item.id}
          className={classNames("w-full flex", {
            "justify-end": item.sender.id === props.userId,
          })}
        >
          <div
            className={classNames(
              "relative rounded-md w-64 pt-1 pb-2",
              item.sender.id == props.userId
                ? "bg-brand/70 text-white"
                : "bg-info/10"
            )}
          >
            <span
              className={classNames(
                "text-sm pl-3",
                item.sender.id === props.userId ? "text-gray-200" : "text-brand"
              )}
            >
              {item.sender.name}
              {item.sender.id === props.userId && " (You)"}
            </span>
            {item.file && (
              <Button
                variant="ghost"
                icon={<RiFileTextLine size={44} />}
                className="px-3 py-2 mb-2 w-full rounded-none bg-brand text-white"
              >
                <p className="underline">{item.file.name}</p>
              </Button>
            )}
            <p className="w-full px-16 pl-3">{item.message}</p>
            <span className="absolute bottom-1 right-2 text-xs px-1 py-0.5">
              {item.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
