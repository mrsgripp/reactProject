import React, { useEffect, useState } from "react";

import { getAllProducts, getSingleProduct } from "../../services/ProductAPIService";
import { json } from "stream/consumers";
import { SingleProduct } from "./SingleProduct";
import { Product } from "../../models/Products";

export function ProductList(){
    const [allProducts, setAllProducts] = useState<Product[]>([])

    console.log("Pre useEffect run");
    
    useEffect(()=>{
        getAllProducts()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllProducts(json);
        });
    }, []);
    
    console.log("Number of Product Records in Product List fetch: " + allProducts.length);
    return (<>
    {allProducts.map(message =>{return <SingleProduct key={message.id} data={message}></SingleProduct>})}
    </>)
}

export function getProductforUpdate(product_id:number){
    let updateProduct:Product[] = [];
    
    
        getSingleProduct(product_id)
        .then(response=>{return response.json()})
        .then(json=>{
            updateProduct[0] = (json.id, json.name,json.price,json.seller)
        });
  
    
    return {updateProduct};
}