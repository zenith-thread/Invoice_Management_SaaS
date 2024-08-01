import { lazy } from "react";

import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("../../components/Navbar"));
const Sidebar = lazy(() => import("../../components/Sidebar"));

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
