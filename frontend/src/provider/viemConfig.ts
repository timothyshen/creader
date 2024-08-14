import { createConfig, http } from "wagmi";
import {
  createClient,
  createPublicClient,
  defineChain,
  createWalletClient,
  custom,
} from "viem";
import creaderConfig from "./app.config";
import { StoryClient, StoryConfig } from "@story-protocol/core-sdk";

import degenChain from "./degenChain";

const localhost = defineChain({
  id: 1,
  name: "Localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
  },
});

export const config = createConfig({
  chains: [creaderConfig.targetNetwork],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const ConnectWalletClient = () => {
  let transport = http();
  if (typeof window !== "undefined") {
    // @ts-ignore
    transport = custom(window.ethereum!);
  }

  const walletClient = createWalletClient({
    chain: creaderConfig.targetNetwork,
    transport: transport,
  });

  return walletClient;
};

export const client = createPublicClient({
  chain: creaderConfig.targetNetwork,
  transport: http(),
});



// const localhost = defineChain({
//   id: 1,
//   name: "Localhost",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Ether",
//     symbol: "ETH",
//   },
//   rpcUrls: {
//     default: { http: ["http://127.0.0.1:8545"] },
//   },
// });

// export const config = createConfig({
//   chains: [baseSepolia, degenChain],
//   client({ chain }) {
//     return createClient({ chain, transport: http() });
//   },
// });

// export const ConnectWalletClient = () => {
//   let transport = http();
//   if (typeof window !== "undefined") {
//     // @ts-ignore
//     transport = custom(window.ethereum!);
//   }

//   const walletClient = createWalletClient({
//     chain: baseSepolia,
//     transport: transport,
//   });

//   return walletClient;
// };

// export const client = createPublicClient({
//   chain: baseSepolia,
//   transport: http(),
// });
