import React, { useState, useEffect } from "react";
import { useParams, PathParam, useLocation, useSearchParams } from "react-router-dom";
import { Product } from "../../models/Products";
import { getSingleProduct } from "../../services/ProductAPIService";

import { ProductForm } from "../components/ProductInput";

export function ProductInputPage() {

  // const [searchParams] = useSearchParams();

  // for (const entry of searchParams.entries()) {
  //   const [param, value] = entry;
  //   console.log(param, value);
  // }

  let productIDParam = useSearchParams();
  let productParamValue:string = "";
  let productIdValue:number = 0;


  let singleProducts:Product[] = [];
  let singleJSONProduct:string = "";

  if ((productIDParam[0].get("product_id"))) {
    productParamValue = productIDParam[0].get("product_id") || "";
    productIdValue = parseInt(productParamValue);

    // const [singleProducts, setSingleProducts] = useState<Product[]>([])
    
    // useEffect(()=>{
      
        getSingleProduct(productIdValue)
        .then(response=>{return response.json()})
        .then(json=>{
            singleProducts = JSON.parse(json);
        });
    // }, []);


  // });

    return ProductForm(singleProducts[0]?.id, singleProducts[0]?.name, singleProducts[0]?.price, singleProducts[0]?.seller, "Update");
  }

  
 

  // const [prodcutAction, setProductAction] = useState("");



  // function addProduct() {
    
  // }
  // function postSeller(){
  //     postSomeSeller()
  //     .then(response => {return response.json()})
  //     .then(json => {console.log(json)})
  //     .catch(error => {console.log(error)})
  // }
  return ProductForm();
}
