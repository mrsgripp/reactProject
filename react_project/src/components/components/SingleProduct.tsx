import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/Products";
import { deleteProduct } from "../../services/ProductAPIService";
import "../../App.css";

interface propsInterface {
  data: Product;
}

export function SingleProduct(props: propsInterface) {
  const [displayOptions, setOptionsDisplay] = useState<boolean>(false);
  //const [updateProduct, setUpdateProduct] = useState("Add");
  const [data, setData] = useState("Add");

  const updateProduct = () => {
    setData("Update");
  };

  function openOptionsHandler() {
    setOptionsDisplay(true);
  }

  function closeOptionsHandler() {
    setOptionsDisplay(false);
  }

  function deleteAProduct() {
    alert("Are You Sure You Want To Delete This Product?");
    alert(`Product has been deleted`);
    deleteProduct(props.data.id);
    window.location.reload();
  }

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <h2>Product ID: {props.data.id}</h2>
            <p>Product Name: {props.data.name}</p>
            <p>Price: {props.data.price}</p>
            <p>Seller ID: {props.data.seller}</p>
          </li>
        </ul>

        <br></br>

        {displayOptions ? (
          <>
            <button
              className="buttons"
              id="optionsButton"
              onClick={closeOptionsHandler}
            >
              Close Options
            </button>
            <Link to="ProductInput" onClick={() => updateProduct()}>
              <button className="buttons">Update Product</button>
            </Link>
            <button className="buttons" onClick={deleteAProduct}>
              Delete Product
            </button>
          </>
        ) : (
          <button
            className="buttons"
            id="optionsButton"
            onClick={openOptionsHandler}
          >
            Show Options
          </button>
        )}
      </div>
    </>
  );
}
