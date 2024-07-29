// chakraUI components
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const NewCustomerData = ({ newClientPercentage, activeClientPercentage }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white px-8 py-10 border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <p className="text-primaryText font-bold text-[18px] mb-6">Customers</p>
      <div>
        <CircularProgress
          value={newClientPercentage}
          thickness={"6px"}
          size={"150px"}
        >
          <CircularProgressLabel className="flex justify-center items-center">
            <span className="text-primaryText font-semibold text-[30px]">
              {newClientPercentage}
              <span className="text-[20px]"> %</span>
            </span>
          </CircularProgressLabel>
        </CircularProgress>
      </div>
      <p className="text-primaryText text-sm font-semibold mt-5">
        New Clients This Month
      </p>
      <div className="border-b border-gray-200 h-[2px] w-[68%] mt-9 mb-7"></div>

      <p className="text-gray-400 text-sm font-semibold mb-2">Active Clients</p>
      <p className="text-center">
        <span className="text-primaryText font-semibold text-[30px]">
          {activeClientPercentage}
          <span className="text-[20px]"> %</span>
        </span>
      </p>
    </div>
  );
};

export default NewCustomerData;
