import { lazy } from "react";

const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));

import CompanyDrawer from "../../components/CompanyDrawer";

const Companies = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Company List"
        drawer={<CompanyDrawer label="Add New Company" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] w-[8%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Ref
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="bg-[#FAFAFA] w-[9%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Country
            </th>
            <th className="bg-[#FAFAFA] w-[9%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              City
            </th>
            <th className="bg-[#FAFAFA] w-[25%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Address
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Phone #
            </th>
            <th className="bg-[#FAFAFA] w-[10%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="bg-[#FAFAFA] w-[10%]  pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Website
            </th>
            <th className="bg-[#FAFAFA] w-[4%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Companies;
