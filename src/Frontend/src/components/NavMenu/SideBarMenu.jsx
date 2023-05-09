import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

import SideBarData from "../../data/SideBarData";
import SubMenu from "./SubMenu";

const SideBarMenu = () => {
  // State of the sidebar
  const [sideBar, setSideBar] = useState(false);
  // Function that changes the sidebar state
  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      {!sideBar ? (
        <div className="top-0 right-0 absolute p-5">
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
        className={`bg-[#21295c] top-0 right-0 fixed w-96 sm:w-60 h-full p-5 ${
          sideBar ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="pt-16">
          {
            // A SubMenu component is created for ach item in the data array
            SideBarData.map((submenu, index) => (
              <SubMenu item={submenu} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
