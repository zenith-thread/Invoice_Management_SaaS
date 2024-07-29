// general components
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

// react icons
import { FaPlus } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { FaRupeeSign } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
{
  /* <FaDollarSign /> */
}
import { BsCurrencyPound } from "react-icons/bs";
{
  /* <BsCurrencyPound /> */
}
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";

const CreateQuotation = () => {
  return (
    <div className="flex flex-col col-span-2 h-auto p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="flex justify-between items-center mb-6 py-10 px-4 pr-4 border-b border-dotted border-primaryBorder">
        <div className="flex justfiy-center items-center gap-3">
          <BackButton />
          <p className="text-primaryText font-bold text-[18px]">New</p>
          <span className="px-3 py-1 border border-primaryBorder rounded-lg text-xs font-semibold shadow-sm">
            Draft
          </span>
        </div>
        <div className="flex gap-2">
          <Button icon={<ImCancelCircle />} inverted>
            Cancel
          </Button>
          <Button icon={<FaPlus />}>Save</Button>
        </div>
      </div>

      {/* ADD INFORMATION */}
      <div className="grid grid-cols-4 items-center gap-4 mb-2  px-4 pr-4 py-2">
        <div className="flex col-span-2 flex-col gap-3">
          <label
            for="description"
            className="text-sm font-bold text-primaryText"
          >
            Client
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="description"
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label for="unit_size" className="text-sm font-bold text-primaryText">
            Date
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="date"
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label for="unit_size" className="text-sm font-bold text-primaryText">
            Expire Date
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="date"
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <label for="unit_size" className="text-sm font-bold text-primaryText">
            Price Validity
          </label>
          <input
            type="date"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="date"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label for="quantity" className="text-sm font-bold text-primaryText">
            Payment Terms
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="quantity"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <label for="quantity" className="text-sm font-bold text-primaryText">
            Delivery Terms
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="quantity"
          />
        </div>
      </div>
      <div className="mb-6 p-4 border-b border-dotted border-primaryBorder" />

      {/* Item Calculation */}
      <div className="grid grid-cols-5 justify-between items-center p-4 gap-4 rounded shadow-sm ">
        {/* Description */}
        <div className="col-span-2 flex flex-col gap-3">
          <label
            for="description"
            className="text-sm font-bold text-primaryText"
          >
            Description
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="description"
          />
        </div>
        {/* unit size */}
        <div className="flex flex-col gap-3 w-full">
          <label for="unit_size" className="text-sm font-bold text-primaryText">
            Unit Size
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="unit_size"
          />
        </div>
        {/* quantity */}
        <div className="flex flex-col gap-3 w-full">
          <label for="quantity" className="text-sm font-bold text-primaryText">
            Quantity
          </label>
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            name="quantity"
          />
        </div>
        {/* unit price */}
        <div className="flex flex-col items-start gap-3 ">
          <label
            for="unit_price"
            className="text-sm font-bold text-primaryText"
          >
            Unit Price
          </label>
          <div className="flex justify-center items-center">
            <FaRupeeSign className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
            <input
              type="text"
              className="w-[85%] px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
              name="unit_price"
            />
          </div>
        </div>
        {/* Transportation */}
        <div className="flex flex-col items-start gap-3 w-full">
          <label
            for="total_amount"
            className="text-sm font-bold text-primaryText"
          >
            Transportation
          </label>
          <div className="flex justify-center items-center">
            <FaRupeeSign className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
            <input
              type="text"
              className="w-[85%] px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
              name="transportation"
            />
          </div>
        </div>
        {/* Misc Expenses */}
        <div className="flex flex-col items-start gap-3 w-full">
          <label
            for="total_amount"
            className="text-sm font-bold text-primaryText"
          >
            Misc Expenses
          </label>
          <div className="flex justify-center items-center">
            <FaRupeeSign className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
            <input
              type="text"
              className="w-[85%] px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
              name="transportation"
            />
          </div>
        </div>
        {/* Profit */}
        <div className="flex flex-col items-start gap-3 w-full">
          <label
            for="total_amount"
            className="text-sm font-bold text-primaryText"
          >
            Profit
          </label>
          <div className="flex justify-center items-center">
            <AiOutlinePercentage className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
            <input
              type="text"
              className="w-full px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
              name="transportation"
            />
          </div>
        </div>
        {/* Total */}
        <div className="flex items-center gap-3 px-3 py-1 self-end rounded-lg">
          <h2 className="font-bold text-md text-center text-gray-500">Total</h2>
          <div className="flex gap-2 justify-center items-center text-center">
            <FaRupeeSign />
            <p className="font-bold text-primaryText text-lg">
              1000,00,000,00,0000
            </p>
          </div>
        </div>
        <div className="text-right text-gray-600 hover:text-red-700 transition delay-75 ease-in-out">
          <button>
            <FaRegTrashCan />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 mx-4 my-12 cols-span-full text-center border rounded-lg border-primaryBorder hover:text-primaryBtn hover:border-primaryBtn cursor-pointer transition delay-75 ease-in-out">
        <FaPlus />
        <p> add field</p>
      </div>

      {/* ================ */}
      {/*     Totals      */}
      {/* ================ */}

      <div className="grid grid-cols-2">
        <Button icon={<FaPlus />}>Save</Button>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col bg-gray-50 rounded-lg">
            <h2 className="font-bold text-md text-center text-gray-500">
              Pre Tax Total
            </h2>
            <div className="flex gap-2 justify-center items-center text-center">
              <FaRupeeSign />
              <p className="font-bold text-primaryText text-lg">1000,000,000</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* GST */}
            <div className="flex flex-col items-start gap-3 w-full">
              <label
                for="total_amount"
                className="text-sm font-bold text-primaryText"
              >
                GST
              </label>
              <div className="flex justify-center items-center">
                <AiOutlinePercentage className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
                <input
                  type="text"
                  className="w-[85%] px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
                  name="transportation"
                />
              </div>
            </div>
            {/* WTH */}
            <div className="flex flex-col items-start gap-3 w-full">
              <label
                for="total_amount"
                className="text-sm font-bold text-primaryText"
              >
                WTH
              </label>
              <div className="flex justify-center items-center">
                <AiOutlinePercentage className="border border-primaryBorder p-2 bg-[#FAFAFA] w-[30px] h-[30px] rounded-l-lg" />
                <input
                  type="text"
                  className="w-[85%] px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
                  name="transportation"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col bg-cyan-700 rounded-lg">
            <h2 className="font-bold text-md text-center text-gray-100">
              Total Quote Amount
            </h2>
            <div className="flex gap-2 justify-center items-center text-center text-white">
              <FaRupeeSign />
              <p className="font-bold text-lg">1000,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuotation;
