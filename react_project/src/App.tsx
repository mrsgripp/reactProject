import React from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./darkMode.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationFunction } from "./components/components/Navigation";
import { SellerPage } from "./components/pages/SellerPage";
import { ProductPage } from "./components/pages/ProductPage";
import { ProductInputPage } from "./components/pages/ProductInputPage";
import { PageNotFoundPage } from "./components/pages/PageNotFoundPage";
import { LandingPage } from "./components/pages/LandingPage";
import { SellerInputPage } from "./components/pages/SellerInputPage";
import { UpdateProduct } from "./components/components/UpdateProduct";
//import { UpdateProductPage } from "./components/pages/UpdateProductPage";
import { Product } from "./models/Products";

//export const UserContext = createContext("none");
//const root = createRoot(document.getElementById("root")!);

interface propsInterface {
  data: Product;
}

function App(props: any) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
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
      <button className="buttons" id="themeButton" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
