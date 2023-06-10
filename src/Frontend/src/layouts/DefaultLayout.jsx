import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main className="mx-auto bg-[#FDFFFC] font-sans">
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
