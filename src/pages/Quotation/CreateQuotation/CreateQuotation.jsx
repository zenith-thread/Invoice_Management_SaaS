import { lazy } from "react";

const CreateQuotationHeader = lazy(() => import("./CreateQuotationHeader"));
const AddInformation = lazy(() => import("./AddInformation"));
const ItemCalculator = lazy(() => import("./ItemCalculator"));
const QuotationTotal = lazy(() => import("./QuotationTotal"));

// custom icons
const Plus = lazy(() => import("../../../customFavIcons/Plus"));

const CreateQuotation = () => {
  return (
    <div className="flex flex-col col-span-2 h-auto p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      {/* HEADER */}
      <CreateQuotationHeader />
      {/* ADD INFORMATION */}
      <AddInformation />
      <div className="mb-6 p-4 border-b border-dotted border-primaryBorder" />

      {/* Item Calculation */}
      <ItemCalculator />

      {/* Add Field */}
      <button className="flex justify-center items-center gap-2 mx-4 my-12 cols-span-full text-center border rounded-lg border-primaryBorder hover:text-primaryBtn hover:border-primaryBtn cursor-pointer transition delay-75 ease-in-out">
        <Plus classnames="text-2xl font-semibold mb-[5px]" />
        add field
      </button>

      {/* ================ */}
      {/*     Totals      */}
      {/* ================ */}
      <QuotationTotal />
    </div>
  );
};

export default CreateQuotation;
