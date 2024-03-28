import { createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import {
  createClient,
  createPublicClient,
  defineChain,
  createWalletClient,
  custom,
} from "viem";

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
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const walletClient = createWalletClient({
  chain: baseSepolia,
  transport: custom((window as any).ethereum),
});

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});
