import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
import img from "../../assets/images/3-asojunquillal-logo.png";

const NavMenu = () => {
  return (
    <div className="sticky top-0 z-10">
      <SideBarMenu />
      <nav className="h-20 p-5 shadow flex items-center justify-between" style={{backgroundImage: "linear-gradient(to right, #219ebc, #4ecdc4)"}}>
        <div className="flex justify-between items-center">
          <Link className="text-2xl text-gray-300 cursor-pointer">
            <img className="h-16 w-16" src={img} />
          </Link>
        </div>
        <ul className="text-gray-300 flex items-center w-full pl-20 opacity-100 top-[-400px] sm:hidden">
          <Link to="/" className="mx-4 my-6 text-xl hover:text-white hover:font-semibold transition-colors duration-200">
            Home
          </Link>
          <Link to="/information" className="mx-4 my-6 text-xl hover:text-white hover:font-semibold transition-colors duration-200">
            Information
          </Link>
          <Link to="/meet" className="mx-4 my-6 text-xl hover:text-white hover:font-semibold transition-colors duration-200">
            Meet Junquillal
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;