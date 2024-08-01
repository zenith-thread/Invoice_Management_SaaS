import { lazy } from "react";

import { Outlet } from "react-router-dom";

const SettingsSidebar = lazy(() => import("../../components/SettingsSidebar"));

const Settings = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <SettingsSidebar />
    </div>
  );
};

export default Settings;
