import React, { useEffect, useState } from "react";
import { Seller } from "../../models/Sellers";
import { getAllSellers } from "../../services/SellerAPIService";
import { json } from "stream/consumers";
import { SingleSeller } from "././SingleSeller";

export function SellerList() {
  const [allSellers, setAllSellers] = useState<Seller[]>([]);
  useEffect(() => {
    getAllSellers()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllSellers(json);
      });
  }, []);

  return (
    <>
      {allSellers.map((seller) => {
        return <SingleSeller key={seller.id} data={seller}></SingleSeller>;
      })}
    </>
  );
}
