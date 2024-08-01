import { lazy } from "react";

const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));

const Quotation = () => {
  return (
    <div className="flex flex-col col-span-2 h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders heading="Quotation" linkAddress="/quotations/create" />
      <table className="mx-4 border-b border-[#F0F0F0]">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Ref
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Company
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              PR
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Product
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Destination
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Unit
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Quantity
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Quote Date
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Feedback
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Remarks
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Quotation;
