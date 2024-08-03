import { lazy } from "react";

// common components
const ProductDrawer = lazy(() => import("../../components/ProductDrawer"));
const PagesHeaders = lazy(() => import("../../components/PagesHeaders"));
const TableHeaders = lazy(() => import("../../components/TableHeaders"));

import { productsHeaders } from "./productsHeaders";

const Products = () => {
  return (
    <div className="flex flex-col col-span-2 max-h-[768px] p-4 mr-[75px] ml-[10px] mt-[20px] bg-white border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
      <PagesHeaders
        heading="Products List"
        drawer={<ProductDrawer label="Add New Product" />}
      />
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {productsHeaders.map(({ classnames, columnName }, idx) =>
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

export default Products;
