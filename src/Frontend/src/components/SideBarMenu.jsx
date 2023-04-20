import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

import SideBarData from "../data/SideBarData";
import SubMenu from "./SubMenu";

const SideBarMenu = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      {!sideBar ? (
          <div className="top-0 right-0 fixed p-4">
            <Link
              to="#"
              className="text-stone-50 text-3xl h-10 flex justify-end items-center"
              onClick={showSideBar}
            >
              <FaIcons.FaBars />
            </Link>
          </div>
        ) : (
          <Link
            to="#"
            className="text-stone-50 mt-6 text-3xl h-10 fixed right-5 z-10"
            onClick={showSideBar}
          >
            <IoIcons.IoMdClose />
          </Link>
        )}
        <div
          className={`bg-sky-950 top-0 right-0 fixed w-96 h-full p-5 ${
            sideBar ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-300`}
        >
          <div className="pt-16">
            {SideBarData.map((submenu, index) => (
              <SubMenu item={submenu} key={index} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default SideBarMenu;
