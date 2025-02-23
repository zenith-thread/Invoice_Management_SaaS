import { lazy } from "react";

// common components
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));

// Invoice components
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

// headers
import { invoiceHeaders } from "./InvoiceHeaders";

const Invoices = () => {
  return (
    <div className="relative overflow-x-auto max-w-[1535px] flex flex-col col-span-2 h-[768px] py-4 ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders heading="Invoices" />
      <table className="border-separate border-spacing-0">
        <thead>
          <tr>
            {invoiceHeaders.map(({ classnames, columnName }, idx) =>
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
        <tbody>{/* Your table rows go here */}</tbody>
      </table>
    </div>
  );
};

export default Invoices;
