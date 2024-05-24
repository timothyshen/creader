import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { Connector, useAccountEffect, useConnect } from "wagmi";
import { useEffect } from "react";
import creaderConfig from "@/provider/app.config";
import { getTargetNetwork } from "@/utils/network";

const WAGMI_WALLET_STORAGE_KEY = "wagmi.wallet";
const BODHI_CREADER_WALLET_STORAGE_KEY = "bodhi6551.wallet";

const getInitialConnector = (
  previousWalletId: string,
  connectors: readonly Connector[]
) => {
  if (previousWalletId) {
    const connector = connectors.find((c) => c.id === previousWalletId);
    if (connector) {
      return {
        connector,
        chainId: creaderConfig.walletAutoConnect
          ? creaderConfig.targetNetwork.id
          : getTargetNetwork().id,
      };
    }
  }
  return null;
};

export const useAutoConnect = (): void => {
  const wagmiWalletValue = useReadLocalStorage<string>(
    WAGMI_WALLET_STORAGE_KEY
  );
  const [walletId, setWalletId] = useLocalStorage<string>(
    BODHI_CREADER_WALLET_STORAGE_KEY,
    wagmiWalletValue ?? ""
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
