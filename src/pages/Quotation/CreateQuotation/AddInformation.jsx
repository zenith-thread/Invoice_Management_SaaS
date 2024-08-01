import { lazy } from "react";

const FormInputLabels = lazy(() =>
  import("../../../components/FormInputLabels")
);

const AddInformation = () => {
  return (
    <div className="grid grid-cols-4 items-center gap-4 mb-2  px-4 pr-4 py-2">
      <FormInputLabels
        classnames="flex col-span-2 flex-col gap-3"
        label="Client"
      />
      <FormInputLabels
        classnames="flex flex-col w-full gap-3"
        label="Date"
        type="date"
      />
      <FormInputLabels
        classnames="flex flex-col w-full gap-3"
        label="Expire Date"
        type="date"
      />
      <FormInputLabels
        classnames="flex flex-col w-full gap-3"
        label="Price Validity"
        type="date"
      />
      <FormInputLabels
        classnames="flex flex-col w-full gap-3"
        label="Payment Terms"
      />
      <FormInputLabels
        classnames="col-span-2 flex flex-col gap-3"
        label="Delivery Terms"
      />
    </div>
  );
};

export default AddInformation;
