import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../../context/auth/authContext";
import useAuth from "../../hooks/useAuth";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

import DefaultSideBarData from "../../data/DefaultSideBarData";
import OperatorSideBarData from "../../data/OperatorSideBarData";
import AdminSideBarData from "../../data/AdminSideBarData";
import SubMenu from "./SubMenu";
import User from "./User";

const SideBarMenu = () => {
  const AuthContext = useContext(authContext);
  const { type } = AuthContext;
  const { deauthUser } = useAuth();
  const [sideBar, setSideBar] = useState(false);
  const [data, setData] = useState([]);
  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    if (type === 0) {
      setData(AdminSideBarData);
    } else if (type === 1) {
      setData(OperatorSideBarData);
    } else {
      setData(DefaultSideBarData);
    }
  });

  return (
    <div>
      {!sideBar ? (
        <div className="top-0 right-0 absolute p-5">
          <Link
            data-cy="hamburger-menu-button"
            to="#"
            className="text-stone-50 text-3xl h-10 flex justify-end items-center transition-colors duration-200 hover:text-white hover:bg-orange-400 rounded-full p-2"
            onClick={showSideBar}
          >
            <FaIcons.FaBars />
          </Link>
        </div>
      ) : (
        <Link
          data-cy="hamburger-menu-button"
          to="#"
          className="text-stone-50 mt-6 text-3xl h-10 fixed right-5 z-10 transition-colors duration-200 hover:text-white hover:bg-orange-400  rounded-full p-1.5"
          onClick={showSideBar}
        >
          <IoIcons.IoMdClose />
        </Link>
      )}
      <div
        className={`bg-[#3a6ea5] top-0 right-0 fixed w-96 sm:w-60 h-full p-5 ${
          sideBar ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="pt-16">
          <User />
          {
            // A SubMenu component is created for each item in the data array
            data.map((submenu, index) => (
              <div
                key={index}
                onClick={() => {
                  if (submenu.title === "Log out") {
                    deauthUser();
                  }
                }}
              >
                <SubMenu item={submenu} key={index} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
