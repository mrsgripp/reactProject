import React, { useState, useEffect } from "react";
import { useParams, PathParam, useLocation, useSearchParams } from "react-router-dom";
import { Product } from "../../models/Products";
import { getSingleProduct } from "../../services/ProductAPIService";

import { ProductForm } from "../components/ProductInput";
import { ProductUpdateForm } from "../components/productUpdate";
// import { getProductforUpdate } from "../components/ProductList";



// async function getProductInputForm (product_id:number) {

//   const [inputFormCommand, setInputFormCommand] = useState("");
//   const [allProducts, setAllProducts] = useState<Product[]>([]);


//   async function singleProduct(){
 
    
//     // useEffect(()=>{
//         getSingleProduct(product_id)
//         .then(response=>{return response.json()})
//         .then(json=>{
//             setAllProducts(json)
//         }).then(thing=> {
//           setInputFormCommand("ProductForm(" + allProducts[0].id + ", " + allProducts[0]?.name + ", " + allProducts[0]?.price + ", " + allProducts[0]?.seller + ", \"Update\")");
//           return inputFormCommand;
//         })
//         ;
//     // }, []);


// return inputFormCommand;
// }
// }



export function ProductInputPage() {

  // const [searchParams] = useSearchParams();

  // for (const entry of searchParams.entries()) {
  //   const [param, value] = entry;
  //   console.log(param, value);
  // }

  let productIDParam = useSearchParams();
  let productParamValue:string = "";
  let productIdValue:string = "";
  let productIdNumber:number = 0;


  // const [inputFormCommand, setInputFormCommand] = useState("");
  // const [allProducts, setAllProducts] = useState<Product[]>([]);
  let returnProductModel:Product[] = [];
  

  // async function getProductInputForm (product_id:number) {

  //   async function SingleProduct(product_id:number){
   
  //     console.log ("SingleProduct call beginning");



  //     // console.log("getSingleProductModel response: " + getSingleProductModel(product_id));
      
  //     // useEffect(()=>{
  //         getSingleProduct(product_id)
  //         .then(response=>{return response.json();})
  //         .then(json => {returnProductModel[0] = json;
  //         })
  //         // .then(thing=> {
  //         //   setInputFormCommand(allProducts[0].id + ", " + allProducts[0]?.name + ", " + allProducts[0]?.price + ", " + allProducts[0]?.seller + ", \"Update\"");
  //         // })
  //         ;
  //     // }, []);

  // }

//   singleProduct();

// }
 
//  console.log("singleProductModel length: " + returnProductModel.length);

  

  if ((productIDParam[0].get("product_id"))) {
    productIdValue = productIDParam[0].get("product_id") || "";
    productIdNumber = parseInt(productIdValue);

    console.log("Test if product_id read correctly: " + productIdValue);

    // SingleProduct(productIdNumber);

    // console.log("Product ID: " + returnProductModel[0].id);

   

  // } 
  
  
  // if (returnProductModel.length > 0) {
    // return ProductForm(allProducts[0].id ,allProducts[0].name, allProducts[0].price, allProducts[0].seller, "Update" );
    console.log("returnProductModel length greater than 0");
    return ProductUpdateForm(productIdNumber, "Update");
  } else {
  return ProductForm();
  }

}
