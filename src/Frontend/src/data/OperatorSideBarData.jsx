import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

const OperatorSideBarData = [
  {
    title: "Reservation",
    path: "/operator/reservation",
    icon: <SiIcons.SiAddthis />,
    datacy: "reservationlist-submenu"
  },
  {
    title: "Testimonials",
    path: "/operator/testimonials",
    icon: <RiIcons.RiFilePaper2Fill />,
    datacy: "testimonials-submenu"
  },
  {
    title: "Park Status",
    path: "/operator/park-status",
    icon: <BsIcons.BsFillPersonCheckFill />,
    datacy: "parkstatus-submenu"
  },
  {
    title: "Reservation List",
    path: "/operator/reservation-list",
    icon: <MdIcons.MdEventAvailable />,
    datacy: "resservationlist-submenu"
  },
  {
    title: "Log out",
    path: "/",
    icon: <RiIcons.RiLogoutBoxFill />,
    datacy: "logout-submenu"
  }
];

export default OperatorSideBarData;