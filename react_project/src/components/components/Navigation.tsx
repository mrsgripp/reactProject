import React from "react";
import { Link } from "react-router-dom";

export function NavigationFunction() {
  return (
    <>
      <nav className="navigation">
        <ul className="Navbar">
          <li>
            <Link to="Products">Products</Link>
          </li>
          <li>
            <Link to="Sellers">Sellers</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
