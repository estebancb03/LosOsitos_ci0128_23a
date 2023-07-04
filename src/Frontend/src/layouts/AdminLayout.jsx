import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authContext from "../context/auth/authContext";
import useAuth from "../hooks/useAuth";

const AdminLayout = () => {
  const navigate = useNavigate();
  const AuthContext = useContext(authContext);
  const { type, auth, token, expiredTokenCkeck } = AuthContext;
  const { expiredSesion } = useAuth();

  useEffect(() => {
    const expired = expiredSesion(token);
    if (expired) {
      navigate('/login');
    };
  });

  return (
    <>
      {type === 0 && (
        <main className="mx-auto bg-[#FDFFFC] font-sans">
          <Outlet />
        </main>
        )}
    </>
  );
};

export default AdminLayout;