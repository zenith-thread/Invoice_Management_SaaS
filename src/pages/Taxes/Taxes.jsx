import { lazy } from "react";

// common componenets
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
const TaxDrawer = lazy(() => import("../../components/TaxDrawer"));
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

import { taxesHeaders } from "./taxesHeaders";

const Taxes = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Taxes List"
        drawer={<TaxDrawer label="Add New Tax" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            {taxesHeaders.map(({ classnames, columnName }, idx) =>
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

export default Taxes;
