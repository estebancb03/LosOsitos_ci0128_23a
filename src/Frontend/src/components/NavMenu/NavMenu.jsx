import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
import img from "../../assets/images/3-asojunquillal-logo.png";

const NavMenu = () => {
  return (
    <div className="sticky top-0 z-10">
      <SideBarMenu />
      <nav className="h-20 p-5 bg-[#004e98] shadow flex items-center justify-between">
        <div className="flex justify-between items-center">
          <Link className="text-2xl text-gray-300 cursor-pointer">
            <img className="h-16 w-16" src={img} />
          </Link>
        </div>
        <ul
          className="text-gray-300 flex items-center w-full pl-20 opacity-100 top-[-400px] 
          transition-all ease-in duration-500 sm:hidden"
        >
          <Link className="mx-4 my-6 text-xl duration-500 hover:text-white">
            Home
          </Link>
          <Link className="mx-4 my-6 text-xl duration-500 hover:text-white">
            Information
          </Link>
          <Link className="mx-4 my-6 text-xl duration-500 hover:text-white">
            Meet Junquillal
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
