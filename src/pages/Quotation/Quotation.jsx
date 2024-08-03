import { lazy } from "react";

// common components
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

import { quotationHeaders } from "./QuotationHeaders";

const Quotation = () => {
  return (
    <div className="relative overflow-x-auto max-w-[1535px] flex flex-col col-span-2 h-[768px] py-4 ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders heading="Quotation" linkAddress="/quotations/create" />
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {quotationHeaders.map(({ classnames, columnName }, idx) =>
              classnames ? (
                <TableHeaders
                  key={idx}
                  classnames={classnames}
                  columnName={columnName}
                />
              ) : (
                <TableHeaders key={idx} columnName={columnName} />
              )
            )}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Quotation;
