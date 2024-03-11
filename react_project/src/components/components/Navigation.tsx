import React from "react";
import { Link } from "react-router-dom";

export function NavigationFunction() {
  return (
    <>
      <ul className="Navbar">Check Out These Links</ul>
      <li>
        <Link to="Products">Products</Link>
      </li>
      <li>
        <Link to="Sellers">Sellers</Link>
      </li>
    </>
  );
}
