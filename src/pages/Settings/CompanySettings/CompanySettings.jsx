import { lazy } from "react";

const CompanySettingsForm = lazy(() => import("./CompanySettingsForm"));
const CustomButton = lazy(() => import("../../../components/CustomButton"));
const BackButton = lazy(() => import("../../../components/BackButton"));

const CompanySettings = () => {
  return (
    <div className="flex flex-col bg-white ml-[110px] w-[89%] mt-[17px] border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex gap-2 px-[40px] py-[60px] text-primaryText font-semibold text-xl">
        <div className="mt-[-1px]">
          <BackButton />
        </div>
        <h2>Company Settings</h2>
      </div>
      <div className="border-b w-[93%] border-primaryBorder self-center" />
      <h2 className="px-[40px] pt-[60px] text-primaryText font-semibold text-xl">
        Company Settings
      </h2>
      <h2 className="px-[40px] pt-[10px] text-gray-400 font-semibold text-sm">
        Update Your Company's Information
      </h2>
      <CompanySettingsForm />
      <div className="border-b w-[93%] mb-[30px] mt-[10px] border-primaryBorder self-center" />
      <div className="px-[40px] pb-[70px]">
        <CustomButton>Save</CustomButton>
      </div>
    </div>
  );
};

export default CompanySettings;
