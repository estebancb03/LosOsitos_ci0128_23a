import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authContext from "../context/auth/authContext";

const OperatorLayout = () => {
  const navigate = useNavigate();
  const AuthContext = useContext(authContext);
  const { type } = AuthContext;
  console.log(type);
  return (
    <>
    {type === 1 ? (
      <main className="mx-auto bg-[#FDFFFC] font-sans">
        <Outlet />
      </main>
      ) : navigate("/")}
    </>
    );
};

export default OperatorLayout;