import React, { SyntheticEvent, useState } from "react";
import { Seller } from "../../models/Sellers";
import { postSomeSeller } from "../../services/SellerAPIService";
//import { allSellers } from "./SellerList";

export function SellerInput() {
  const [userInput1, setUserInput1] = useState<string>("");
  const [userInput2, setUserInput2] = useState<number>();

  function sellerNameInput(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setUserInput1(textBox.value);
  }

  function sellerIdInput(event: SyntheticEvent) {
    let textBox = event.target as HTMLTextAreaElement;
    setUserInput2(textBox.value);
  }

  function buttonClickHandler() {
    let seller: Seller = {
      name: userInput1,
      id: userInput2,
    };
    postSomeSeller(seller);
    //const newSellerList = allSellers.concat(seller);
    //setAllSellers(newSellerList);
  }

  return (
    <>
      <h1>Add A Seller</h1>
      <div>
        Seller Name
        <input onChange={sellerNameInput} value={userInput1}></input>
      </div>
      <div>
        Seller ID
        <input
          inputMode="numeric"
          onChange={sellerIdInput}
          value={userInput2}
        ></input>
      </div>
      <button onClick={buttonClickHandler}>submit</button>
    </>
  );
}
