import { useContext } from "react";
import { Outlet } from "react-router-dom";
import authContext from "../context/auth/authContext";

const OperatorLayout = () => {
  const AuthContext = useContext(authContext);
  const { type } = AuthContext;
  console.log(type);
  return (
    <>
    {type === 1 && (
      <main className="mx-auto bg-[#FDFFFC] font-sans">
        <Outlet />
      </main>
      )}
    </>
    );
};

export default OperatorLayout;