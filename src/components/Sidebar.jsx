import Sidebarfields from "./Sidebarfields";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] p-5 mt-[20px] bg-transparent">
      <Sidebarfields LinkName="Dashboard" linkAddress="/" />
      <Sidebarfields LinkName="Quotations" linkAddress="/quotations" />
      <Sidebarfields
        LinkName="Delivery Challan"
        linkAddress="/delivery_challan"
      />
      <Sidebarfields LinkName="Invoices" linkAddress="/invoices" />
      <Sidebarfields LinkName="Products" linkAddress="/products" />
      <Sidebarfields
        LinkName="Products categories"
        linkAddress="/products_categories"
      />
      <Sidebarfields LinkName="Customers" linkAddress="/companies" />
      <Sidebarfields LinkName="Expenses" linkAddress="/expenses" />
      <Sidebarfields
        LinkName="Expenses categories"
        linkAddress="/expense_categories"
      />
      <Sidebarfields LinkName="Sales" linkAddress="/" />
      <Sidebarfields LinkName="Employees" linkAddress="/employees" />
      <Sidebarfields LinkName="Taxes" linkAddress="/taxes" />
      <Sidebarfields LinkName="Reports" linkAddress="/" />
      <Sidebarfields LinkName="Currencies" linkAddress="/currencies" />
      <Sidebarfields LinkName="Settings" linkAddress="/settings" />
    </div>
  );
};

export default Sidebar;
