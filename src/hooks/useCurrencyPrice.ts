import { useState, useEffect } from "react";
import { useInterval } from "usehooks-ts";

import { fetchPriceFromUni } from "@/lib/fetchPriceFromUni";

export const useNativeCurrencyPrice = () => {
  const [nativeCurrencyPrice, setNativeCurrencyPrice] = useState(0);
  console.log("nativeCurrencyPrice", nativeCurrencyPrice);

  // Correctly invoking the async function inside useEffect
  useEffect(() => {
    const fetchAndSetPrice = async () => {
      const price = await fetchPriceFromUni();
      console.log("priceindicator", price);
      setNativeCurrencyPrice(price);
      console.log("price", price);
    };
    fetchAndSetPrice();
  }, []);

  // Correctly invoking the async function inside useInterval
  useInterval(() => {
    const fetchAndSetPrice = async () => {
      const price = await fetchPriceFromUni();
      setNativeCurrencyPrice(price);
      console.log("price", price);
    };
    fetchAndSetPrice();
  }, 30000);

  return nativeCurrencyPrice;
};
