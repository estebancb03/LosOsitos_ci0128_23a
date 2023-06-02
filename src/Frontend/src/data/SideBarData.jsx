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
    path: "/park-status",
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
    path: "",
    icon: <BsIcons.BsFillFileBarGraphFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subnav: [
      {
        title: "Sales",
        path: "/sales-report",
        icon: <IoIcons.IoIosCalculator />,
      },
      {
        title: "Income",
        path: "/income-report",
        icon: <SiIcons.SiCashapp />,
      },
      {
        title: "Taxes",
        path: "/taxes-report",
        icon: <HiIcons.HiReceiptTax />,
      },
      {
        title: "Bills",
        path: "/bills-report",
        icon: <RiIcons.RiBillFill />,
      },
    ],
  },
];

export default SideBarData;
