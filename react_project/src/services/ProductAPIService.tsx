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
