import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./GlobalStyle.jsx";
// import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "../src/DataContext";

const theme = {
  colors: {},
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <DataProvider>
      <ChakraProvider>
        <GlobalStyle />
        <App />
      </ChakraProvider>
    </DataProvider>
  </Router>
);
