import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/Products";
import { deleteProduct } from "../../services/ProductAPIService";
import { ProductForm } from "./ProductInput"
interface propsInterface {
  data: Product;
}

export function UpdateFlag(props: propsInterface) {
  const setUpdateProduct: boolean = true;
  console.log("UpdateFlag props.id: " + props.data.id);
  // ProductForm(props.data.id, props.data.name, props.data.price, props.data.seller, "Update");
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

  

  function deleteAProduct() {
    alert("Are You Sure You Want To Delete This Product?");
    alert(`Product has been deleted`);
    deleteProduct(props.data.id);
    window.location.reload();
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
          {/* <Link to={"ProductInput?product_id=" + props.data.id} onClick={() => UpdateFlag(props)}> */}
          <Link to={"ProductInput?product_id=" + props.data.id} >
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
    </>
  );
}
