import React, { useState, useEffect } from "react";
import { postProductAPI, getSingleProduct, updateProduct } from "../../services/ProductAPIService";
import { Product } from "../../models/Products";
import { useNavigate } from "react-router-dom";


interface MyProps {
  // productActionProp: string;
}

export function ProductUpdateForm(id:number, formAction?:string) {
  const apiBaseURL: string = "http://localhost:9017/";
  const [productIdState, setProductIdState] = useState(0);
  const [productNameState, setProductNameState] = useState("");
  const [productPriceState, setProductPriceState] = useState(0);
  const [productSellerIdState, setProductSellerIdState] = useState(0);
  const [productAction, setProductAction] = useState("Update");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  console.log("Initialize allProducts length should be 0:  " + allProducts.length);

  let newProductId:number = 0;
  let newProductName:string = "";
  let newProductPrice:number = 0;
  let newProductSellerId:number = 0;

 console.log('product input form called.');
 console.log("id parameter: " + id);

//   if (!(typeof id === 'undefined')) {
//     console.log('id not undefined');
//     newProductId = id;
//     console.log(newProductId);
//     // setProductIdState(id); 
//   }
//   if (!(typeof productname === 'undefined')) {
//     newProductName = productname;
//     console.log("newProductName = " + productname);
//     setProductNameState(productname);
//   }
//   if (!(typeof price === 'undefined')) {
//     setProductPriceState(price);
//   }
//   if (!(typeof seller === 'undefined')) {
//     setProductSellerIdState(seller);
//   }
//   if (!(typeof formAction === 'undefined')) {
//     setProductAction(formAction);
//   }

// Assume this has the product_id sent in call, further assume it has a good product_id, because I'm
// just trying to get this to work.  Seriously, how can this be this difficult to implement - millions of others
// must have implemented this - unless no one else would try this since it's such a bad design ...

    // .then(json => (setAllProducts(json)))
    // setAllProducts(json);

    useEffect(()=>{
        getSingleProduct(id)
        .then(response=>{return response.json()})
        .then(json=>{
            setAllProducts(json);
            setProductIdState(json.id);
            setProductNameState(json.name);
            setProductPriceState(json.price);
            setProductSellerIdState(json.seller);
        })

    }, []);

    

  

console.log("derived ID: " + productIdState);
console.log("Derived Name: " + productNameState);

  const navigate = useNavigate();

  let onChangeText: string = "";

  let checkProductIdEnabled = (newProductId: number) => {
    if (productAction == "Add") {
      setProductIdState(newProductId);
    } else {
      onChangeText = "";
    }
  };

  let callAddProduct = () => {
    let myData: Product = {
      id: productIdState,
      name: productNameState,
      price: productPriceState,
      seller: productSellerIdState,
    };

    postProductAPI(myData);

    navigate("../Products");
    window.location.reload();
  };

  let callUpdateProduct = () => {
    let myData: Product = {
      id: productIdState,
      name: productNameState,
      price: productPriceState,
      seller: productSellerIdState,
    };

    updateProduct(myData);

    navigate("../Products");
    window.location.reload();
  };

  let setSaveButton = () => {
    if (productAction == "Add") {
      return <button onClick={callAddProduct}>Save New Product</button>;
    } else if (productAction == "Update") {
      return <button onClick={callUpdateProduct}>Update Product</button>;
    }
  };

  return (
    <React.Fragment>
      <>
      <h1>{productAction} Product</h1>
      <form>
        Product Name:{" "}
        <input
          type="string"
          value={productNameState}
          onChange={(e) => setProductNameState(e.target.value)}
          name="productNameInput"
        ></input>
        <br />
        Product Price:{" "}
        <input
          type="number"
          value={productPriceState}
          onChange={(e) => setProductPriceState(parseInt(e.target.value))}
          name="productPriceInput"
        ></input>
        <br />
        Seller ID:{" "}
        <input
          type="number"
          value={productSellerIdState}
          onChange={(e) => setProductSellerIdState(parseInt(e.target.value))}
          name="productSellerIdInput"
        ></input>
        <br />
        <input
          type="number"
          hidden={true}
          value={productIdState}
          onChange={(e) => checkProductIdEnabled(parseInt(e.target.value))}
          name="productIdInput"
        ></input>
      </form>
      {setSaveButton()}
      </>
    </React.Fragment>
  );
}