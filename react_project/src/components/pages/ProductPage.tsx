import React from "react";
import { getAllProducts } from "../../services/ProductAPIService";

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
      <div>
        <button onClick={getProducts}>test i can get all products</button>
      </div>
    </>
  );
}
