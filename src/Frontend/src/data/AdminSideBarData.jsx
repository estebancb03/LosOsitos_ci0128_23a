

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
    datacy: "reservation-submenu",
    function: () => {}
  },
  ,
  {
    title: "Testimonial List",
    path: "/admin/testimonial-list",
    icon: <RiIcons.RiFilePaper2Fill />,
    datacy: "testimonials-submenu",
    function: () => {}
  },
  {
    title: "Park Status",
    path: "/admin/park-status",
    icon: <BsIcons.BsFillPersonCheckFill />,
    datacy: "parkstatus-submenu",
    function: () => {}
  },
  {
    title: "User List",
    path: "/admin/user-list",
    icon: <FaIcons.FaUser />,
    datacy: "userlist-submenu",
    function: () => {}
  },
  {
    title: "Reservation List",
    path: "/admin/reservation-list",
    icon: <MdIcons.MdEventAvailable />,
    datacy: "reservationlist-submenu",
    function: () => {}
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: <BsIcons.BsFillFileBarGraphFill />,
    datacy: "reports-submenu",
    function: () => {}
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <MdIcons.MdSettings />,
    datacy: "settings-submenu",
    function: () => {}
  },
  {
    title: "Log out",
    path: "/",
    icon: <RiIcons.RiLogoutBoxFill />,
    datacy: "logout-submenu",
    function: () => localStorage.removeItem('auth-token')
  }
];

export default AdminSideBarData;
