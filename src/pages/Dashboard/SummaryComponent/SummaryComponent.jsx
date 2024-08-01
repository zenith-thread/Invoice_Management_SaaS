import { lazy } from "react";

const SummaryComponentItems = lazy(() =>
  import("../SummaryComponentItems/SummaryComponentItems")
);

const SummaryComponent = ({ componentTitle }) => {
  return (
    <>
      <div className="flex flex-col flex-auto">
        <div className="text-primaryText font-bold text-[18px] mb-8">
          {componentTitle}
        </div>
        <SummaryComponentItems fieldValue="Draft" percentage={50} />
        <SummaryComponentItems fieldValue="Pending" percentage={70} />
        <SummaryComponentItems fieldValue="Unpaid" percentage={30} />
        <SummaryComponentItems fieldValue="Overdue" percentage={10} />
        <SummaryComponentItems fieldValue="Partially" percentage={25} />
        <SummaryComponentItems fieldValue="Paid" percentage={60} />
      </div>
    </>
  );
};

export default SummaryComponent;
