import { defineChain } from "viem";
const degenChain = defineChain({
  id: 6666666,
  name: "DegenChain",
  nativeCurrency: {
    decimals: 18,
    name: "DegenCoin",
    symbol: "DEGEN",
  },
  rpcUrls: {
    default: { http: ["https://rpc.degen.tips"] },
  },
  blockExplorers: {
    default: {
      name: "DegenScan",
      url: "https://explorer.degen.tips",
    },
  },
});

export default degenChain;