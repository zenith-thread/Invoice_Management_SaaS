import { lazy } from "react";

// general components
const CustomButton = lazy(() => import("../../../components/CustomButton"));

// custom Favicons
const Percentage = lazy(() => import("../../../customFavIcons/Percentage"));
const Plus = lazy(() => import("../../../customFavIcons/Plus"));

const FormInputLabels = lazy(() =>
  import("../../../components/FormInputLabels")
);
const TotalAmount = lazy(() => import("./TotalAmount"));

const QuotationTotal = () => {
  return (
    <div className="grid grid-cols-2">
      <CustomButton>
        <Plus classnames="text-2xl font-semibold mb-[5px]" /> Save
      </CustomButton>

      <div className="flex flex-col gap-3">
        <TotalAmount amount="" column heading="Pre Tax Total" />

        <div className="flex flex-col gap-3">
          {/* GST */}
          <FormInputLabels
            classnames="flex flex-col items-start gap-3 w-full"
            label="GST"
            icon={<Percentage />}
          />
          {/* WTH */}
          <FormInputLabels
            classnames="flex flex-col items-start gap-3 w-full"
            label="WTH"
            icon={<Percentage />}
          />
        </div>
        <div className="mt-8 flex flex-col bg-cyan-700 rounded-lg">
          <TotalAmount amount="" column heading="Total Quote Amount" inverted />
        </div>
      </div>
    </div>
  );
};

export default QuotationTotal;
