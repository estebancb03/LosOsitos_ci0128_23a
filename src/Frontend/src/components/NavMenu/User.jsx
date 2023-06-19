import { useContext } from "react";
import authContext from "../../context/auth/authContext";
import InputButton from "../Buttons/InputButton";
import * as FaIcons from "react-icons/fa";

const User = () => {
  const AuthContext = useContext(authContext);
  const { user, type, auth } = AuthContext;
  return (
    <>
      { auth && (
        <div>
          <div className="h-48 flex justify-center items-center">
            <span>
              { <FaIcons.FaUserCircle size={164} className="text-gray-300"/> }
            </span>      
          </div>
          <div className="my-3 mx-2 grid grid-cols-1">
            <input
              type="text"
              value={user}
              disabled={true}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#054a91] sm:text-sm sm:leading-6"
            />
          </div>
          <div className="my-3 mx-2 grid grid-cols-1">
            <input
              type="text"
              value={type === 0 ? "Admin" : "Operator"}
              disabled={true}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#054a91] sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-9 mb-5 mx-3">
            <div className="h-1 w-full bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) }
    </>
  );
};

export default User;
