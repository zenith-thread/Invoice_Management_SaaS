// Common Components
import RecentData from "../../components/RecentData";

// Dashboard Components
import DashboardTopCard from "./DashboardComponents/DashboardTopCard";
import SummaryComponent from "./SummaryComponent/SummaryComponent";
import NewCustomerData from "./NewCustomerData/NewCustomerData";

const Dashboard = () => {
  const newClientPercentage = 70;
  const activeClientPercentage = 70;
  const dashboardTopCards = [
    {
      title: "Quotation",
      value: "100",
      borderColor: "#87E8DE",
      bgColor: "#E6FFFB",
      textColor: "#08979C",
    },
    {
      title: "Invoices",
      value: "100",
      borderColor: "#CEA9F0",
      bgColor: "#F7EEFD",
      textColor: "#521DA9",
    },
    {
      title: "Sale",
      value: "100",
      borderColor: "#B7EB8F",
      bgColor: "#F6FFED",
      textColor: "#389E0D",
    },
    {
      title: "Unpaid",
      value: "1000",
      borderColor: "#F79D99",
      bgColor: "#FEF0EF",
      textColor: "#CF1322",
    },
  ];

  return (
    // Overview
    <div className="grid grid-cols-4 gap-8 mr-[75px] ml-[10px] my-8">
      {dashboardTopCards.map(
        ({ title, value, borderColor, bgColor, textColor }, idx) => (
          <DashboardTopCard
            key={idx}
            title={title}
            value={value}
            borderColor={borderColor}
            bgColor={bgColor}
            textColor={textColor}
          />
        )
      )}
      {/* Summary */}
      <div className="bg-white col-span-3 flex gap-8 flex-start px-8 py-10 border border-white rounded-md transition ease-in-out delay-150 shadow-2xl hover:shadow-xl shadow-hoverShadow hover:shadow-hoverShadow">
        <SummaryComponent componentTitle="Quotation" />
        <SummaryComponent componentTitle="Invoices" />
        <SummaryComponent componentTitle="Sales" />
      </div>

      {/* New customer data */}
      <NewCustomerData
        newClientPercentage={newClientPercentage}
        activeClientPercentage={activeClientPercentage}
      />

      {/* Recent Data */}
      <RecentData recentDataTitle="Quotations" />
      <RecentData recentDataTitle="Invoices" />
    </div>
  );
};

export default Dashboard;
