import React, { useState } from "react";

interface MyProps {
    productActionProp: string
}


export function ProductForm() {
    const [productIdState, setProductIdState] = useState(0);
    const [productNameState, setProductNameState] = useState("");
    const [productPriceState, setProductPriceState] = useState(0);
    const [productSellerIdState, setProductSellerIdState] = useState(0);
    const [productAction, setProductAction] = useState("All");

 

    return (
        <React.Fragment>
            <h1>{productAction} Product</h1>
        <form>
            Product ID: <input type="number" value={productIdState} name="productIdInput"></input>
            <br/>
            Product Name: <input type="string" value={productNameState} name="productNameInput"></input>
            <br/>
            Product Price: <input type="number" value={productPriceState} name="productPriceInput"></input>
            <br/>
            Seller ID: <input type="number" value={productSellerIdState} name="productSellerIdInput"></input>
        </form>
        </React.Fragment>
    )
}
