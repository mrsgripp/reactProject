import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter,
  Link,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import { Product } from "../../models/Products";
import { deleteProduct } from "../../services/ProductAPIService";
import "../../App.css";
import { UpdateProduct } from "./UpdateProduct";

interface propsInterface {
  data: Product;
}

export function SingleProduct(props: propsInterface) {
  const [displayOptions, setOptionsDisplay] = useState<boolean>(false);
  //const [updateProduct, setUpdateProduct] = useState("Add");
  const [data, setData] = useState("Add");
  const navigate = useNavigate();

  function navigateFunction() {
    navigate("/Products/Update");
  }

  const thisFunction = () => {
    let myData = {
      id: props.data.id,
      name: props.data.name,
      price: props.data.price,
      seller: props.data.seller,
    };
    return myData;
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

  const updateThisProduct = () => {
    //updateProduct(myData);
    //navigate("../Products");
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <ul>
          <li>
            <h4>Product ID: {props.data.id}</h4>
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
            <p>
              <UpdateProduct data={props.data}></UpdateProduct>
            </p>
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
