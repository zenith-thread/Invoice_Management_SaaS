const DashboardTopCard = ({
  title,
  value,
  borderColor,
  bgColor,
  textColor,
}) => {
  return (
    <div className="flex flex-col bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow ">
      <div className="text-primaryText font-bold text-[18px] text-center py-6 border-b border-[#F0F0F0]">
        {title}
      </div>
      <div className="flex justify-center text-center py-6">
        <p className="text-sidebarText border-r border-[#F0F0F0] w-[8rem]">
          This Month
        </p>
        <div className="flex-1">
          <span
            className="px-2 border rounded-md"
            style={{
              borderColor: borderColor,
              backgroundColor: bgColor,
              color: textColor,
            }}
          >
            {`${value}$`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCard;
