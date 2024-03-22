import { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";

import { fetchPriceFromUni } from "@/lib/fetchPriceFromUni";

export const useNativeCurrencyPrice = () => {
  const [nativeCurrencyPrice, setNativeCurrencyPrice] = useState(0);
  console.log("nativeCurrencyPrice", nativeCurrencyPrice);
  useEffect(() => {
    async () => {
      const price = await fetchPriceFromUni();
      setNativeCurrencyPrice(price);
      console.log("price", price);
    };
  }, []);

  useInterval(() => {
    async () => {
      const price = await fetchPriceFromUni();
      setNativeCurrencyPrice(price);
      console.log("price", price);
    };
  }, 30000);

  return nativeCurrencyPrice;
};
