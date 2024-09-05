import classNames from "classnames";

import Image from "@/components/ui/image";
import { GroupChatSidebarProps } from "./id.interface";

function GroupChatSidebar(props: GroupChatSidebarProps) {
  return (
    <aside className="bg-brand/5 py-2 px-3 w-2/6 h-full border border-brand/10 rounded-l-3xl">
      <div className="flex-col-center divide-y divide-brand h-full">
        <h4 className="text-xl font-medium py-4 text-brand">Group Members</h4>
        <ul className="py-4 px-8 space-y-3 bg-brand/10 shadow-inner shadow-gray-300 rounded-lg h-full overflow-scroll">
          {props.members.map((item, i) => (
            <li key={i}>
              <div className="flex items-center gap-2">
                <Image gravatar={item.name} size={44} rounded />
                <span
                  className={classNames("text-lg text-ellipsis font-medium", {
                    "text-primary font-semibold": item.isUser,
                  })}
                >
                  {item.isUser && "(You)"}&nbsp;{item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default GroupChatSidebar;
