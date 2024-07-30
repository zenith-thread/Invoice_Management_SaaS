import Sidebarfields from "./Sidebarfields";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] p-5 mt-[20px]">
      <Sidebarfields LinkName="Dashboard" linkAddress="/" />
      <Sidebarfields LinkName="Quotations" linkAddress="/quotations" />
      <Sidebarfields LinkName="Invoices" linkAddress="/invoices" />
      <Sidebarfields
        LinkName="Delivery Challan"
        linkAddress="/delivery_challan"
      />
      <Sidebarfields LinkName="Products" linkAddress="/products" />
      <Sidebarfields
        LinkName="Products categories"
        linkAddress="/products_categories"
      />
      <Sidebarfields LinkName="Companies" linkAddress="/companies" />
      <Sidebarfields LinkName="Expenses" linkAddress="/expenses" />
      <Sidebarfields
        LinkName="Expenses categories"
        linkAddress="/expense_categories"
      />
      <Sidebarfields LinkName="Sales" linkAddress="/" />
      <Sidebarfields LinkName="Employees" linkAddress="/employees" />
      <Sidebarfields LinkName="Taxes" linkAddress="/taxes" />
      <Sidebarfields LinkName="Reports" linkAddress="/" />
      <Sidebarfields LinkName="Settings" linkAddress="/" />
    </div>
  );
};

export default Sidebar;
