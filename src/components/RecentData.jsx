const RecentData = ({ recentDataTitle }) => {
  return (
    <div className="flex flex-col col-span-2 min-h-[340px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <p className="text-primaryText font-bold text-[18px] p-8">
        Recent {recentDataTitle}
      </p>
      <table className="mx-4 border-b border-[#F0F0F0]">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Number
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Client
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Total
            </th>
            <th className="bg-[#FAFAFA] pt-3 pb-5 px-4 border-r border-[#F0F0F0] rounded text-left text-sm font-semibold text-gray-600">
              Status
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default RecentData;
