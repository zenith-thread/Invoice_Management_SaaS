import { lazy } from "react";

const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));

import EmployeeDrawer from "../../components/EmployeeDrawer";

const Employees = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Employees List"
        drawer={<EmployeeDrawer label="Add New Employee" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] w-[13%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              First Name
            </th>
            <th className="bg-[#FAFAFA] w-[13%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Last Name
            </th>
            <th className="bg-[#FAFAFA] w-[13%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="bg-[#FAFAFA] w-[30%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Description
            </th>
            <th className="bg-[#FAFAFA] w-[13%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Role
            </th>
            <th className="bg-[#FAFAFA] w-[13%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Enabled
            </th>
            <th className="bg-[#FAFAFA] w-[10%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Employees;
