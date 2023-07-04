import { useContext } from "react";
import authContext from "../../context/auth/authContext";

const User = () => {
  const AuthContext = useContext(authContext);
  const { user, type, auth } = AuthContext;
  return (
    <>
      { auth && (
        <div>
          <div className="my-3 mx-2 grid grid-cols-1">
            <span data-cy="username" className="ml-1 text-2xl sm:text-lg font-semibold text-gray-300">Username: {user}</span>
          </div>
          <div className="my-3 mx-2 grid grid-cols-1">
            <span data-cy="userrole" className="ml-1 text-2xl sm:text-lg font-semibold text-gray-300">Role: {type === 0 ? "administrator" : "operator"}</span>
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
