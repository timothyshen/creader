import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { Connector, useAccountEffect, useConnect } from "wagmi";
import { Chain, baseSepolia } from "viem/chains";
import { useEffect } from "react";
import { config } from "@/provider/config";

const WAGMI_WALLET_STORAGE_KEY = "wagmi.wallet";
const BODHI_CREADER_WALLET_STORAGE_KEY = "bodhi6551.wallet";

const getInitialConnector = (
  initialNetwork: Chain,
  previousWalletId: string,
  connectors: readonly Connector[]
) => {
  if (previousWalletId) {
    const connector = connectors.find(
      (connector) => connector.id === previousWalletId
    );
    return { connector, chainId: initialNetwork.id };
  } else {
    return { connector: connectors[0], chainId: initialNetwork.id };
  }
};

export const useAutoConnect = (): void => {
  const wagmiWalletValue = useReadLocalStorage<string>(
    WAGMI_WALLET_STORAGE_KEY
  );
  const [walletId, setWalletId] = useLocalStorage<string>(
    BODHI_CREADER_WALLET_STORAGE_KEY,
    wagmiWalletValue ?? "",
    {
      initializeWithValue: false,
    }
  );

  const connectState = useConnect();

  useAccountEffect({
    onConnect(account) {
      if (account) {
        setWalletId(account.connector.id);
      }
    },
    onDisconnect() {
      setWalletId("");
    },
  });

  useEffect(() => {
    const initialConnector = getInitialConnector(
      baseSepolia,
      walletId,
      connectState.connectors
    );

    if (initialConnector?.connector) {
      connectState.connect({
        connector: initialConnector.connector,
        chainId: initialConnector.chainId,
      });
    }
  });
};
