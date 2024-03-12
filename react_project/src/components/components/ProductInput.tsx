import React, { useState } from "react";
import { postProductAPI } from "../../services/ProductAPIService";
import { Product } from "../../models/Products";

interface MyProps {
    productActionProp: string
}




export function ProductForm() {
    const [productIdState, setProductIdState] = useState(0);
    const [productNameState, setProductNameState] = useState("");
    const [productPriceState, setProductPriceState] = useState(0);
    const [productSellerIdState, setProductSellerIdState] = useState(0);
    const [productAction, setProductAction] = useState("Add");

    let onChangeText : string = ""; 

    let checkProductIdEnabled = (newProductId:number) => { 

    if (productAction == "Add") {
        setProductIdState(newProductId);
        } else {
            onChangeText = "";
        }
    }

    let callAddProduct = () => {
        let myData:Product = {
            id : productIdState,
            name : productNameState,
            price : productPriceState,
            seller : productSellerIdState
        };

        postProductAPI(myData);

    }

    let setSaveButton = () => {
        if (productAction == "Add") {
            return <button onClick={callAddProduct} >Save New Product</button> 
        } else if (productAction == "Update") {
            return <button >Update Product</button>
        }
    }

    return (
        <React.Fragment>
            <h1>{productAction} Product</h1>
        <form>
            Product ID: <input type="number" value={productIdState} onChange={(e) => checkProductIdEnabled(parseInt(e.target.value))} name="productIdInput"></input>
            <br/>
            Product Name: <input type="string" value={productNameState} onChange={(e) => setProductNameState(e.target.value)} name="productNameInput"></input>
            <br/>
            Product Price: <input type="number" value={productPriceState} onChange={(e) => setProductPriceState(parseInt(e.target.value))} name="productPriceInput"></input>
            <br/>
            Seller ID: <input type="number" value={productSellerIdState} onChange={(e) => setProductSellerIdState(parseInt(e.target.value))} name="productSellerIdInput"></input>
        </form>
        {setSaveButton()}
        </React.Fragment>
    )
}
