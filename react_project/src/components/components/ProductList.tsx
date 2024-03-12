import React, { useEffect, useState } from "react";

import { getAllProducts } from "../../services/ProductAPIService";
import { json } from "stream/consumers";
import { SingleProduct } from "./SingleProduct";
import { Product } from "../../models/Products";

export function ProductList(){
    const [allProducts, setAllProducts] = useState<Product[]>([])
    
    useEffect(()=>{
        getAllProducts()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllProducts(json);
        });
    }, []);
    
    return (<>
    {allProducts.map(message =>{return <SingleProduct key={message.id} data={message}></SingleProduct>})}
    </>)
}