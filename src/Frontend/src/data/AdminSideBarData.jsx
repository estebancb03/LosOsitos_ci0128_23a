

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

const AdminSideBarData = [
  {
    title: "Reservation",
    path: "/admin/reservation",
    icon: <SiIcons.SiAddthis />,
    function: () => {}
  },
  ,
  {
    title: "Testimonials",
    path: "/admin/testimonials",
    icon: <RiIcons.RiFilePaper2Fill />,
    function: () => {}
  },
  {
    title: "Park Status",
    path: "/admin/park-status",
    icon: <BsIcons.BsFillPersonCheckFill />,
    function: () => {}
  },
  {
    title: "User List",
    path: "/admin/user-list",
    icon: <FaIcons.FaUser />,
    function: () => {}
  },
  {
    title: "Reservation List",
    path: "/admin/reservation-list",
    icon: <MdIcons.MdEventAvailable />,
    function: () => {}
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: <BsIcons.BsFillFileBarGraphFill />,
    function: () => {}
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <MdIcons.MdSettings />,
    function: () => {}
  },
  {
    title: "Log out",
    path: "/",
    icon: <RiIcons.RiLogoutBoxFill />,
    function: () => localStorage.removeItem('auth-token')
  }
];

export default AdminSideBarData;
