import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";

const NavMenu = () => {
  return (
    <div>
      <SideBarMenu />
      <nav className="p-5 bg-sky-950 shadow flex items-center justify-between">
        <div className="flex justify-between items-center">
            <Link className="text-2xl text-gray-300 cursor-pointer">
                Img
            </Link>
        </div>
        <ul className="text-gray-300 flex items-center w-full pl-20 opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <Link className="mx-4 my-6 my-0 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6 my-0 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6 my-0 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
            <Link className="mx-4 my-6 my-0 text-xl hover:text-gray-300 duration-500">
              Option
            </Link>
        </ul>
    </nav>
    </div>
  );
};

export default NavMenu;
