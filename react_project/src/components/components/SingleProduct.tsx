import React, { useContext } from "react";
import { Product } from "../../models/Products";
// import { UserContext } from "../../App";
interface propsInterface {
    data:Product
}
export function SingleProduct(props:propsInterface){
    // const valueFromContext = useContext(UserContext)
    return (<>
    <h2>Product ID: {props.data.id}</h2>
    <p>Product Name: {props.data.name}</p>
    <p>Price: {props.data.price}</p>
    <p>Seller ID: {props.data.seller}</p>
    {/* <p>Current user is : {valueFromContext}</p> */}
    </>)
}
