import React, { useState } from "react";
import { getAllProducts } from "../../services/ProductAPIService";
import { ProductList } from "../components/ProductList";
import { ProductForm } from "../components/ProductInput";
import { Link } from "react-router-dom";


export function ProductPage() {

  const [prodcutAction, setProductAction] = useState("");

  function getProducts() {
    getAllProducts()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  function addProduct() {

  }
  // function postSeller(){
  //     postSomeSeller()
  //     .then(response => {return response.json()})
  //     .then(json => {console.log(json)})
  //     .catch(error => {console.log(error)})
  // }
  return (
    <>
      <h1>All Products</h1>
      <Link to="ProductInput">Add Product</Link>
     <ProductList></ProductList>
     <br/>
     <button onClick={() => { setProductAction("Add") }}>Add Product</button>
     <ProductForm></ProductForm>


    </>
  );
}
