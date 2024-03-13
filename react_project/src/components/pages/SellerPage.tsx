import React from "react";
import { getAllSellers, postSomeSeller } from "../../services/SellerAPIService";
import { SellerList } from "../components/SellerList";
import { SellerInput } from "../components/SellerInput";
import { SingleSeller } from "../components/SingleSeller";
import { Link } from "react-router-dom";
//import Card from

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
  /* function postSeller() {
    postSomeSeller(seller)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }*/
  return (
    <>
      <div>
        <h1>All Sellers</h1>
        <Link to="/Sellers/SellerInput">
          <button>Add Seller</button>
        </Link>
        <SellerList></SellerList>
      </div>
    </>
  );
}
