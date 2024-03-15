import React, { useState } from "react";

import { ProductForm } from "../components/ProductInput";

export function ProductInputPage() {
  const [prodcutAction, setProductAction] = useState("");

  function addProduct() {}
  // function postSeller(){
  //     postSomeSeller()
  //     .then(response => {return response.json()})
  //     .then(json => {console.log(json)})
  //     .catch(error => {console.log(error)})
  // }
  return (
    <>
      <ProductForm></ProductForm>
    </>
  );
}
