import { lazy } from "react";

// commong Components
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
import CategoryDrawer from "../../components/CategoryDrawer";
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

import { prodExpensCategories } from "./prodExpensCategories";

const Products_Categories = ({ label }) => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Category List"
        drawer={<CategoryDrawer label={label} />}
      />
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {prodExpensCategories.map(({ classnames, columnName }, idx) =>
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

export default Products_Categories;
