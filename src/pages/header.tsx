import { useEffect, useRef, useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";

import logo from "@/assets/logo.png";

import Button from "@/components/ui/button";
import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "@/router/router.hook";
import { Storage } from "@/utilities/storage";
import { AnimatePresence, motion } from "framer-motion";
import { menus } from "./constants";

function Header() {
  const storage = new Storage();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  function handleOutsideClick(event: MouseEvent) {
    // If the click is outside the dropdown, close it
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="py-4 sm:px-8 px-3 w-full flex sm:justify-end justify-between items-center border-b border-primary">
      <div className="sm:hidden flex items-center gap-2">
        <Button
          variant="ghost"
          as="img"
          src={logo}
          onClick={() => router.goTo("/")}
          className="w-14 h-14 mx-auto"
        />
        <h1 className="text-xl font-medium">Secretariat Repository</h1>
      </div>

      <div className="sm:flex hidden items-center gap-2">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe&background=random&rounded=true"
          alt="user"
          className="rounded-full w-12 h-12"
        />
        <Button
          variant="ghost"
          colorScheme="danger"
          className="text-lg"
          onClick={() => {
            storage.deleteItem(ACCESS_TOKEN_KEY);
            router.goTo("/login");
          }}
        >
          Sign Out
        </Button>
      </div>

      <div ref={ref} className="sm:hidden block relative">
        <Button variant="ghost" onClick={() => setShowMenu(!showMenu)}>
          <VscThreeBars size={30} />
        </Button>

        {showMenu && (
          <AnimatePresence>
            <motion.div
              className="absolute z-10 top-8 right-0 w-40 bg-white border shadow-md rounded-md p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col items-start gap-6 p-1">
                {menus.map((menu) => (
                  <li>
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => router.goTo(menu.path)}
                      icon={<menu.icon />}
                    >
                      {menu.label}
                    </Button>
                  </li>
                ))}
                <li>
                  <Button
                    variant="ghost"
                    colorScheme="danger"
                    className="text-lg w-full"
                    icon={<MdOutlineLogout />}
                    onClick={() => {
                      storage.deleteItem(ACCESS_TOKEN_KEY);
                      router.goTo("/login");
                    }}
                  >
                    Sign Out
                  </Button>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </header>
  );
}

export default Header;
