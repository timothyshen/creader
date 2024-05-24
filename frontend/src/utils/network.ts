import * as chains from "viem/chains";
import creaderConfig from "@/provider/app.config";

export type TChainAttributes = {
  // color | [lightThemeColor, darkThemeColor]
  color: string | [string, string];
  // Used to fetch price by providing mainnet token address
  // for networks having native currency other than ETH
  nativeCurrencyTokenAddress?: string;
};

export const NETWORKS_EXTRA_DATA: Record<string, TChainAttributes> = {
  [chains.hardhat.id]: {
    color: "#b8af0c",
  },
  [chains.mainnet.id]: {
    color: "#ff8b9e",
  },
  [chains.sepolia.id]: {
    color: ["#5f4bb6", "#87ff65"],
  },
  [chains.goerli.id]: {
    color: "#0975F6",
  },
  [chains.gnosis.id]: {
    color: "#48a9a6",
  },
  [chains.polygon.id]: {
    color: "#2bbdf7",
    nativeCurrencyTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  },
  [chains.polygonMumbai.id]: {
    color: "#92D9FA",
    nativeCurrencyTokenAddress: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  },
  [chains.optimismGoerli.id]: {
    color: "#f01a37",
  },
  [chains.optimism.id]: {
    color: "#f01a37",
  },
  [chains.arbitrumGoerli.id]: {
    color: "#28a0f0",
  },
  [chains.arbitrum.id]: {
    color: "#28a0f0",
  },
  [chains.fantom.id]: {
    color: "#1969ff",
  },
  [chains.fantomTestnet.id]: {
    color: "#1969ff",
  },
  [chains.scrollSepolia.id]: {
    color: "#fbebd4",
  },
  [chains.baseSepolia.id]: {
    color: "#007ae8",
  },
};

export function getTargetNetwork(): chains.Chain & Partial<TChainAttributes> {
  const configuredNetwork = creaderConfig.targetNetwork;

  return {
    ...configuredNetwork,
    ...NETWORKS_EXTRA_DATA[configuredNetwork.id],
  };
}
