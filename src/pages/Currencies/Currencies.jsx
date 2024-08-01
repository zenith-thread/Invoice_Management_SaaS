import { lazy } from "react";

const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
import CurrencyDrawer from "../../components/CurrencyDrawer";

const Currencies = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Currency List"
        drawer={<CurrencyDrawer label="Add New Currency" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Currency Name
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Currency Code
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Currency Symbol
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Currency Position
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Decimal Separator
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Thousand Separator
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Cent Precision
            </th>
            <th className="bg-[#FAFAFA] w-[12%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Enabled
            </th>
            <th className="bg-[#FAFAFA] w-[4%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Currencies;
