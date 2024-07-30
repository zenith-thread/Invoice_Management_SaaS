import { Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Quotation from "./pages/Quotation/Quotation";
import CreateQuotation from "./pages/Quotation/CreateQuotation";
import Invoices from "./pages/Invoices/Invoices";
import Delivery_Challan from "./pages/Delivery_Challan/Delivery_Challan";
import Products from "./pages/Products/Products";
import Products_Categories from "./pages/Products_Categories/Products_Categories";
import Companies from "./pages/Companies/Companies";
import Expenses from "./pages/Expenses/Expenses";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="quotations" element={<Quotation />} />
        <Route path="quotations/create" element={<CreateQuotation />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="delivery_challan" element={<Delivery_Challan />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products_categories"
          element={<Products_Categories label="Product" />}
        />
        <Route path="companies" element={<Companies />} />
        <Route path="expenses" element={<Expenses />} />
        <Route
          path="expense_categories"
          element={<Products_Categories label="Expense" />}
        />
      </Route>
    </Routes>
  );
};

export default App;
