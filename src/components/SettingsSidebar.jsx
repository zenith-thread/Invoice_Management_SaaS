import Sidebarfields from "./Sidebarfields";

const SettingsSidebar = () => {
  return (
    <>
      <div className="flex flex-col mt-4 mr-[190px] p-4">
        <div className="bg-white text-center mb-2 py-6 text-xl font-bold text-primaryText border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
          Settings
        </div>
        <div className="bg-white flex flex-col w-[300px] p-5 mt-[20px] font-bold text-primaryText border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
          <Sidebarfields LinkName="Company Settings" linkAddress="/settings" />
          <Sidebarfields LinkName="Company Logo" linkAddress="/settings/logo" />
          <Sidebarfields
            LinkName="Curreny Settings"
            linkAddress="/settings/currency"
          />
        </div>
      </div>
    </>
  );
};

export default SettingsSidebar;
