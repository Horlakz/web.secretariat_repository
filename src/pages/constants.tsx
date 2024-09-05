import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";

export const menus = [
  { icon: PiSquaresFourLight, label: "Dashboard", path: "/" },
  { icon: HiOutlineUsers, label: "Groups", path: "/groups" },
  { icon: IoSettingsOutline, label: "Settings", path: "/settings" },
];
