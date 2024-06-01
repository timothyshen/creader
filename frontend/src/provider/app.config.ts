import * as chains from "wagmi/chains";

export type CreaderConfig = {
  targetNetwork: chains.Chain;
  pollingInterval: number;
  archemyApiKey: string;
  walletConnectProjectId: string;
  walletAutoConnect: boolean;
};

const creaderConfig = {
  targetNetwork: chains.baseSepolia,
  pollingInterval: 3000,
  archemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string,
  walletConnectProjectId: process.env
    .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  walletAutoConnect: true,
} satisfies CreaderConfig;

export default creaderConfig;
