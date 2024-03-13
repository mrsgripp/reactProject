import React from "react";
import logo from "./logo.svg";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationFunction } from "./components/components/Navigation";
import { SellerPage } from "./components/pages/SellerPage";
import { ProductPage } from "./components/pages/ProductPage";
import { ProductInputPage } from "./components/pages/ProductInputPage";
import { PageNotFoundPage } from "./components/pages/PageNotFoundPage";
import { LandingPage } from "./components/pages/LandingPage";
import { SellerInputPage } from "./components/pages/SellerInputPage";

//export const UserContext = createContext("none");
//const root = createRoot(document.getElementById("root")!);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationFunction></NavigationFunction>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="Sellers" element={<SellerPage></SellerPage>} />
          <Route path="Products" element={<ProductPage></ProductPage>} />
          <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>} />
          <Route
            path="Sellers/SellerInput"
            element={<SellerInputPage></SellerInputPage>}
          />
          <Route
            path="Products/ProductInput"
            element={<ProductInputPage></ProductInputPage>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
