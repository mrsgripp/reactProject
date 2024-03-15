import React from "react";
import { useState } from "react";
import { updateProduct } from "../../services/ProductAPIService";
import { Product } from "../../models/Products";
import { useNavigate } from "react-router-dom";
import { SingleProduct } from "./SingleProduct";

interface propsInterface {
  data: Product;
}

export function UpdateProduct(props: propsInterface) {
  const myProduct: Product = {
    id: props.data.id,
    name: props.data.name,
    price: props.data.price,
    seller: props.data.seller,
  };

  const [productIdState, setProductIdState] = useState(props.data.id);
  const [productNameState, setProductNameState] = useState(props.data.name);
  const [productPriceState, setProductPriceState] = useState(props.data.price);
  const [productSellerIdState, setProductSellerIdState] = useState(
    props.data.seller
  );

  const navigate = useNavigate();

  const updateThisProduct = () => {
    let myData: Product = {
      id: productIdState,
      name: productNameState,
      price: productPriceState,
      seller: productSellerIdState,
    };

    updateProduct(myData);
    navigate("../Products");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <h1>Update Product</h1>
      <form>
        Product Name:{" "}
        <input
          type="string"
          value={productNameState}
          onChange={(e) => setProductNameState(e.target.value)}
          name="productNameInput"
        ></input>
        <br />
        Product Price:{" "}
        <input
          type="number"
          value={productPriceState}
          onChange={(e) => setProductPriceState(parseInt(e.target.value))}
          name="productPriceInput"
        ></input>
        <br />
        Seller ID:{" "}
        <input
          type="number"
          value={productSellerIdState}
          onChange={(e) => setProductSellerIdState(parseInt(e.target.value))}
          name="productSellerIdInput"
        ></input>
        <br />
      </form>
      <button className="buttons" onClick={updateThisProduct}>
        Update Product
      </button>
    </React.Fragment>
  );
}
