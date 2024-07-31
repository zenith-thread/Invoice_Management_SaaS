import CustomButton from "../../../components/CustomButton";

import { FiUpload } from "react-icons/fi";

const CompanyLogoSettings = () => {
  return (
    <div className="flex flex-col bg-white ml-[110px] w-[89%] mt-[17px] border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <h2 className="px-[40px] py-[60px] text-primaryText font-semibold text-xl">
        General Settings
      </h2>
      <div className="border-b w-[93%] border-primaryBorder self-center" />
      <h2 className="px-[40px] pt-[60px] text-primaryText font-semibold text-xl">
        Company Logo
      </h2>
      <h2 className="px-[40px] pt-[10px] text-gray-400 font-semibold text-sm">
        Update Company
      </h2>

      <div className="flex items-center py-[15px] px-[110px] pt-[20px] pb-[50px] text-sm font-semibold">
        <label className="w-[300px]">Logo:</label>
        <CustomButton icon={<FiUpload />} inverted>
          Click To Upload
        </CustomButton>
      </div>

      <div className="border-b w-[93%] mb-[30px] mt-[10px] border-primaryBorder self-center" />
      <div className="px-[40px] pb-[70px]">
        <CustomButton>Save</CustomButton>
      </div>
    </div>
  );
};

export default CompanyLogoSettings;
