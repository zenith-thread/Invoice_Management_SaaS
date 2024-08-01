import { lazy } from "react";

// custom Favicons
const Rupee = lazy(() => import("../../../customFavIcons/Rupee"));
const Percentage = lazy(() => import("../../../customFavIcons/Percentage"));

// Quotaion components
const FormInputLabels = lazy(() =>
  import("../../../components/FormInputLabels")
);
const TotalAmount = lazy(() => import("./TotalAmount"));

const ItemCalculator = () => {
  return (
    <form className="grid grid-cols-5 justify-between items-center p-4 gap-4 rounded shadow-sm ">
      {/* Description */}
      <FormInputLabels
        classnames="col-span-2 flex flex-col gap-3"
        label="Description"
      />

      {/* unit size */}
      <FormInputLabels
        classnames="flex flex-col gap-3 w-full"
        label="Unit Size"
      />

      {/* quantity */}
      <FormInputLabels
        classnames="flex flex-col gap-3 w-full"
        label="Quantity"
      />

      {/* unit price */}
      <FormInputLabels
        classnames="flex flex-col items-start gap-3 "
        label="Unit Price"
        icon={<Rupee />}
      />

      {/* Transportation */}
      <FormInputLabels
        classnames="flex flex-col items-start gap-3 w-full"
        label="Trasnportation"
        icon={<Rupee />}
      />
      {/* Misc Expenses */}
      <FormInputLabels
        classnames="flex flex-col items-start gap-3 w-full"
        label="Misc Expenses"
        icon={<Rupee />}
      />

      {/* Profit */}
      <FormInputLabels
        classnames="flex flex-col items-start gap-3 w-full"
        label="Profit"
        icon={<Percentage />}
      />

      {/* Total */}
      <FormInputLabels
        classnames="flex flex-col items-start gap-3 w-full"
        label="Trasnportation"
        icon={<Rupee />}
      />
      <TotalAmount amount="" heading="Total" />
      <div className="text-right text-gray-600 hover:text-red-700 transition delay-75 ease-in-out">
        <button>delete</button>
      </div>
    </form>
  );
};

export default ItemCalculator;
