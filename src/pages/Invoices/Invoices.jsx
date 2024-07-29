// general components
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

// react icons
import { FaPlus } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";

const Invoices = () => {
  return (
    <div className="relative overflow-x-auto max-w-[1600px] flex flex-col col-span-2 h-[768px] py-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <div className="sticky left-0 flex justify-between items-center mb-2 p-8 pr-4">
        <div className="flex justfiy-center items-center gap-2">
          <BackButton />
          <p className="text-primaryText font-bold text-[18px]">Invoices</p>
        </div>
        <div className="flex gap-2 pr-8">
          <input
            type="text"
            className="px-3 py-1 border border-primaryBorder hover:border-primaryBtn focus:outline-none focus:border-primaryBtn rounded-r-lg text-sm font-semibold focus:shadow-sm focus:shadow-[#becdfa] transition ease-in-out delay-75"
            placeholder="search"
          />
          <Button icon={<SlReload />} inverted>
            Refresh
          </Button>
          <Button icon={<FaPlus />}>Create new invoice</Button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {/* STICKY COLUMNS */}
            <th className="sticky left-0 z-10 min-w-[90px] max-w-[90px] text-center bg-[#FAFAFA] pt-3 pb-5 text-sm font-bold text-gray-600">
              PO #
            </th>
            <th className="sticky left-[90px] z-10 min-w-[75px] max-w-[75px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Inv #
            </th>
            <th className="sticky z-10 left-[165px] min-w-[100px] max-w-[100px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Date
            </th>
            <th className="sticky z-10 left-[265px] min-w-[150px] max-w-[150px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Invoice
            </th>
            <th className="sticky z-10 left-[415px] min-w-[75px] max-w-[75px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Status
            </th>
            <th className="sticky z-10 left-[490px] min-w-[75px] max-w-[75px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              HS Code
            </th>
            <th className="sticky z-10 left-[565px] min-w-[150px] max-w-[150px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Customer
            </th>
            <th className="sticky z-10 left-[715px] min-w-[200px] max-w-[200px]  text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Description
            </th>
            {/* NON STICKY COLUMNS */}
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Inv Amount
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Service Charges @ 12%
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Total
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              GST %
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              GST Amount
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Total Amount
              <br />
              (GST & Srv Chgs)
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Less WHT
              <br />%
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Less WHT
              <br />
              Amount
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Total Receievable
              <br />
              Amount
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Less Amount
              <br />
              Received
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Net Receievable
              <br />
              Amount
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Due Date
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Investment
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Net Profit
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Profit %
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Vendor
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Payment Status
            </th>
            <th className="min-w-[150px] max-w-[150px] text-center bg-[#FAFAFA] pt-3 pb-5  text-sm font-bold text-gray-600">
              Sadqa
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Invoices;
