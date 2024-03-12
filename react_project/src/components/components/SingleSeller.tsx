import React, { useContext } from "react";
import { Seller } from "../../models/Sellers";
//import { UserContext } from "../App";
interface propsInterface {
  data: Seller;
}
export function SingleSeller(props: propsInterface) {
  //const valueFromContext = useContext(UserContext)
  return (
    <>
      <h4>Seller Name: {props.data.name}</h4>
      <p>Seller ID : {props.data.id}</p>
    </>
  );
}
