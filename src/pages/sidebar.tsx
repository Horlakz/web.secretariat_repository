import logo from "@/assets/logo.png";

import Button from "@/components/ui/button";
import { useRouter } from "@/router/router.hook";
import classNames from "classnames";
import { menus } from "./constants";

const SideBar = () => {
  const router = useRouter();

  return (
    <aside className="bg-[#EBF8FF] h-screen flex flex-col items-center py-8 gap-20">
      <Button
        variant="ghost"
        as="img"
        src={logo}
        className="w-28 h-28"
        onClick={() => router.goTo("/")}
      />

      <ul className="flex flex-col gap-6">
        {menus.map((item, i) => (
          <li key={i}>
            <Button
              variant="ghost"
              icon={<item.icon size={24} />}
              onClick={() => router.goTo(item.path)}
              className={classNames(
                "px-4 py-2.5 hover:bg-[#D6EAF8] hover:text-[#2B6CB0]",
                {
                  "bg-[#d4ebf7] text-[#2B6CB0] hover:bg-[#D6EAF8] hover:text-[#2B6CB0]":
                    router.pathname === item.path,
                }
              )}
            >
              <span className="text-lg">{item.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
