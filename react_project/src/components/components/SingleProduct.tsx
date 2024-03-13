import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/Products";
interface propsInterface {
  data: Product;
}

export function UpdateFlag() {
  const setUpdateProduct: boolean = true;
  //return setUpdateProduct;
}

export function SingleProduct(props: propsInterface) {
  const [displayOptions, setOptionsDisplay] = useState<boolean>(false);
  //const [updateProduct, setUpdateProduct] = useState<boolean>(false);

  function openOptionsHandler() {
    setOptionsDisplay(true);
  }

  function closeOptionsHandler() {
    setOptionsDisplay(false);
  }

  return (
    <>
      <h2>Product ID: {props.data.id}</h2>
      <p>Product Name: {props.data.name}</p>
      <p>Price: {props.data.price}</p>
      <p>Seller ID: {props.data.seller}</p>
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
          <Link to="ProductInput" onClick={() => UpdateFlag()}>
            <button className="buttons">Update Product</button>
          </Link>
          <button className="buttons"> Delete Product</button>
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
    </>
  );
}
