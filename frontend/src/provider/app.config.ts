import * as chains from "wagmi/chains";

export type CreaderConfig = {
  targetNetwork: chains.Chain;
  pollingInterval: number;
  archemyApiKey: string;
  walletConnectProjectId: string;
  walletAutoConnect: boolean;
};

const creaderConfig = {
  targetNetwork: chains.sepolia,
  pollingInterval: 3000,
  archemyApiKey: process.env.ARCHEMY_API_KEY as string,
  walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID as string,
  walletAutoConnect: true,
} satisfies CreaderConfig;

export default creaderConfig;
