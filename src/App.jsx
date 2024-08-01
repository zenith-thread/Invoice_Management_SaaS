import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";

// Lazy load pages
const Quotation = lazy(() => import("./pages/Quotation/Quotation"));
const CreateQuotation = lazy(() =>
  import("./pages/Quotation/CreateQuotation/CreateQuotation")
);
const Invoices = lazy(() => import("./pages/Invoices/Invoices"));
const Delivery_Challan = lazy(() =>
  import("./pages/Delivery_Challan/Delivery_Challan")
);
const Products = lazy(() => import("./pages/Products/Products"));
const Products_Categories = lazy(() =>
  import("./pages/Products_Categories/Products_Categories")
);
const Companies = lazy(() => import("./pages/Companies/Companies"));
const Expenses = lazy(() => import("./pages/Expenses/Expenses"));
const Employees = lazy(() => import("./pages/Employees/Employees"));
const Taxes = lazy(() => import("./pages/Taxes/Taxes"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const Currencies = lazy(() => import("./pages/Currencies/Currencies"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

// Sub pages
const CompanySettings = lazy(() =>
  import("./pages/Settings/CompanySettings/CompanySettings")
);
const CompanyLogoSettings = lazy(() =>
  import("./pages/Settings/CompanyLogoSettings/CompanyLogoSettings")
);
const CurrencySettings = lazy(() =>
  import("./pages/Settings/CurrencySettings/CurrencySettings")
);
const EditProfile = lazy(() => import("./pages/Profile/EditProfile"));
const Login = lazy(() => import("./pages/Login/Login"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/login" element={<Login />} />
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
          <Route path="employees" element={<Employees />} />
          <Route path="taxes" element={<Taxes />} />
          <Route path="currencies" element={<Currencies />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<CompanySettings />} />
            <Route path="logo" element={<CompanyLogoSettings />} />
            <Route path="currency" element={<CurrencySettings />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route path="edit" element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
