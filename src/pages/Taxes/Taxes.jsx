import { lazy } from "react";

// general components
const CustomButton = lazy(() => import("../../components/CustomButton"));
const BackButton = lazy(() => import("../../components/BackButton"));
const TaxDrawer = lazy(() => import("../../components/TaxDrawer"));

// react icons
import { FaPlus } from "../../Utils/reactIconsExports";
import { SlReload } from "../../Utils/reactIconsExports";

const Taxes = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex justify-between items-center mb-2 py-8 px-4 pr-4">
        <div className="flex justfiy-center items-center gap-2">
          <BackButton />
          <p className="text-primaryText font-bold text-[18px]">Taxes List</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            placeholder="search"
          />
          <CustomButton icon={<SlReload />} inverted>
            Refresh
          </CustomButton>
          <TaxDrawer Icon={<FaPlus />} label="Add New Tax" />
        </div>
      </div>
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] w-[22.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="bg-[#FAFAFA] w-[22.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Value
            </th>
            <th className="bg-[#FAFAFA] w-[22.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Default
            </th>
            <th className="bg-[#FAFAFA] w-[22.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Enabled
            </th>
            <th className="bg-[#FAFAFA] w-[10%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Taxes;
