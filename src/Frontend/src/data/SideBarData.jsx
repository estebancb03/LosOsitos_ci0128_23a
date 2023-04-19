import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";

const SideBarData = [
  {
    title: "Reservation",
    path: "/reservation",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    title: "Inventory",
    path: "/inventory",
  },
  {
    title: "Settings",
    path: "/settings",
  },
  {
    title: "Availability",
    path: "/availability",
  },
  {
    title: "Reports",
    path: "",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    uno: true,
    subnav: [
      {
        title: "Sales",
        path: "/sales-report",
      },
      {
        title: "Income",
        path: "/income-report",
      },
      {
        title: "Taxes",
        path: "/taxes-report",
      },
      {
        title: "Bills",
        path: "/bills-report",
      },
    ],
  },
];

export default SideBarData;
