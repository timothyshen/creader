import { create } from "zustand";
import * as chains from "viem/chains";

type ChainAttributes = chains.Chain;

type GlobalState = {
  nativeCurrencyPrice: number;
  setNativeCurrencyPrice: (price: number) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  nativeCurrencyPrice: 0,
  setNativeCurrencyPrice: (price) => set({ nativeCurrencyPrice: price }),
}));
