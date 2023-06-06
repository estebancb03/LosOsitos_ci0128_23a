import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

const SideBarData = [
  {
    title: "Reservation",
    path: "/reservation",
    icon: <SiIcons.SiAddthis />,
  },
  {
    title: "Park Status",
    path: "/admin/park-status",
    icon: <BsIcons.BsFillPersonCheckFill />,
  },
  {
    title: "Testimonials",
    path: "/testimonials",
    icon: <RiIcons.RiFilePaper2Fill />,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <MdIcons.MdInventory />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <MdIcons.MdSettings />,
  },
  {
    title: "Reservation List",
    path: "/admin/reservation-list",
    icon: <MdIcons.MdEventAvailable />,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: <BsIcons.BsFillFileBarGraphFill />,
  },
];

export default SideBarData;
