import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";

const NavMenu = () => {
  return (
    <div>
      <SideBarMenu />
      <nav className="h-20 p-5 bg-[#21295c] shadow flex items-center justify-between">
        <div className="flex justify-between items-center">
            <Link className="text-2xl text-gray-300 cursor-pointer">
                Img
            </Link>
        </div>
        <ul className="text-gray-300 flex items-center w-full pl-20 opacity-100 top-[-400px] 
        transition-all ease-in duration-500 sm:hidden">
            <Link className="mx-4 my-6 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6  text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
