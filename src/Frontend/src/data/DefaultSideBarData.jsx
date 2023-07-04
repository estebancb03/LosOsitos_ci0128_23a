import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

const DefaultSideBarData = [
  {
    title: "Reservation",
    path: "/reservation",
    icon: <SiIcons.SiAddthis />,
    datacy: "reservation-submenu"
  },
  {
    title: "LogIn",
    path: "/login",
    icon: <RiIcons.RiLoginBoxFill />,
    datacy: "login-submenu"
  },
];

export default DefaultSideBarData;
