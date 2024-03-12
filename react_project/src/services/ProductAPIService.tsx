import { Product } from "../models/Products";

const apiBaseURL: string = "http://localhost:9017/";
export function getAllProducts() {
  return fetch(apiBaseURL + "product");
}
export function postProductAPI(data: Product) {
  return fetch(apiBaseURL + "product", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      alert("Status Code:  " + response.status + " - if in the 4 or 5 ranges, then you're on your own to work it out!");
    }
  });
}

// export function updateProduct(data: Product) {
//   return fetch(apiBaseURL + "product/" + {data.id}, {
//     method: "PUT",
//     mode: "cors",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
// }
