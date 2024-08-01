import { lazy } from "react";

const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));

import ExpenseDrawer from "../../components/ExpenseDrawer";

const Expenses = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Expense List"
        drawer={<ExpenseDrawer label="Add New Expense" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] w-[12.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Ref
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="bg-[#FAFAFA] w-[32.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Description
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Expense Category
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Currency
            </th>
            <th className="bg-[#FAFAFA] w-[12.5%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Total
            </th>
            <th className="bg-[#FAFAFA] w-[15%] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Expenses;
