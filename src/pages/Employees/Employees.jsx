import { lazy } from "react";

// common components
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
import EmployeeDrawer from "../../components/EmployeeDrawer";
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

import { employeesHeaders } from "./employeesHeaders";

const Employees = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Employees List"
        drawer={<EmployeeDrawer label="Add New Employee" />}
      />
      <table className="mx-4 border-b border-[#F0F0F0] mb-[75px] ">
        <thead>
          <tr>
            {employeesHeaders.map(({ classnames, columnName }, idx) =>
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

export default Employees;
