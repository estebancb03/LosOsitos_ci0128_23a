import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authContext from "../context/auth/authContext";

const AdminLayout = () => {
  const navigate = useNavigate();
  const AuthContext = useContext(authContext);
  const { type } = AuthContext;
  return (
    <>
      {type === 0 ? (
        <main className="mx-auto bg-[#FDFFFC] font-sans">
          <Outlet />
        </main>
        ) : navigate("/")}
    </>
  );
};

export default AdminLayout;