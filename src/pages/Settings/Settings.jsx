import { Outlet } from "react-router-dom";

import SettingsSidebar from "../../components/SettingsSidebar";

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
