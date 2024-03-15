import { Seller } from "../models/Sellers";

const apiBaseURL: string = "http://localhost:9017/";
export function getAllSellers() {
  return fetch(apiBaseURL + "seller");
}
export function postSomeSeller(data: Seller) {
  return fetch(apiBaseURL + "seller", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      alert(
        "Status Code:  " +
          response.status +
          "\n" +
          "Seller must have a name," +
          "\n" +
          "and Seller ID must be unique"
      );
    }
  });
}
