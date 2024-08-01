import { lazy } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// const ChakraProvider = import("@chakra-ui/react").then((module) => ({
//   default: module.ChakraProvider,
// }));
// const extendTheme = import("@chakra-ui/react").then((module) => ({
//   default: module.extendTheme,
// }));

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: "#F9FAFC",
    },
  },
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
