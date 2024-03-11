import React from "react";
import { getAllSellers } from "../../services/SellerAPIService";

export function SellerPage() {
  function getSellers() {
    getAllSellers()
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
        <button onClick={getSellers}>test i can get all sellers</button>
      </div>
    </>
  );
}
