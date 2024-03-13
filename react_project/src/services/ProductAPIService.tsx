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
  }).then((response) => {
    if (!response.ok) {
      alert(
        "Status Code:  " +
          response.status +
          "\n" +
          "Product must have a name," +
          "\n" +
          "must be priced above $0," +
          "\n" +
          "and seller ID must correspond with an existing seller."
      );
    }
  });
}

export function updateProduct(data: Product) {
  return fetch(apiBaseURL + "product/" + data.id, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function getSingleProduct(id: number) {
  return fetch(apiBaseURL + `product/${id}`);
}

export function deleteProduct(id: number) {
  fetch(apiBaseURL + `product/${id}`, {
    method: "DELETE",
    mode: "cors",
  });
}
