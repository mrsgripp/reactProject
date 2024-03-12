import React from "react";
import { getAllProducts } from "../../services/ProductAPIService";
import { ProductList } from "../components/ProductList"

export function ProductPage() {
  function getProducts() {
    getAllProducts()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
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
     <ProductList></ProductList>


    </>
  );
}
