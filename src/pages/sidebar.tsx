import logo from "@/assets/logo.png";

import Button from "@/components/ui/button";
import { useRouter } from "@/router/router.hook";
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

      <ul className="flex flex-col gap-10">
        {menus.map((item, i) => (
          <li
            key={i}
            className="flex justify-start items-center gap-3 cursor-pointer"
          >
            <item.icon size={24} />
            <span className="text-lg">{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
