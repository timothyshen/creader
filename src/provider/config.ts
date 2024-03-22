import { createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { createClient, createPublicClient, defineChain } from "viem";
import { injected } from "wagmi/connectors";

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
  chains: [baseSepolia],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});
