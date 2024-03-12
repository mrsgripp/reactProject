import React from "react";
import logo from "./logo.svg";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationFunction } from "./components/components/Navigation";
import { SellerPage } from "./components/pages/SellerPage";
import { ProductPage } from "./components/pages/ProductPage";

//export const UserContext = createContext("none");
//const root = createRoot(document.getElementById("root")!);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationFunction></NavigationFunction>
        <Routes>
          <Route path="Sellers" element={<SellerPage></SellerPage>} />
          <Route path="Products" element={<ProductPage></ProductPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
