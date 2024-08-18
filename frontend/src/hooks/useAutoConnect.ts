import { useLocalStorage } from "usehooks-ts";
import { Connector, useAccount, useConnect } from "wagmi";
import { useCallback, useEffect } from "react";
import creaderConfig from "@/provider/app.config";
import { getTargetNetwork } from "@/utils/network";

const BODHI_CREADER_WALLET_STORAGE_KEY = "bodhi6551.wallet";

const getInitialConnector = (
  previousWalletId: string | null,
  connectors: readonly Connector[]
): { connector: Connector; chainId: number } | null => {
  if (!previousWalletId) return null;
  const connector = connectors.find((c) => c.id === previousWalletId);
  return connector
    ? {
        connector,
        chainId: creaderConfig.walletAutoConnect
          ? creaderConfig.targetNetwork.id
          : getTargetNetwork().id,
      }
    : null;
};

export const useAutoConnect = (): void => {
  const [walletId, setWalletId] = useLocalStorage<string | null>(
    BODHI_CREADER_WALLET_STORAGE_KEY,
    null
  );

  const { connect, connectors } = useConnect();
  const { isConnected, connector } = useAccount();

  const handleConnect = useCallback(() => {
    if (!isConnected && walletId) {
      const initialConnector = getInitialConnector(walletId, connectors);
      if (initialConnector) {
        connect({
          connector: initialConnector.connector,
          chainId: initialConnector.chainId,
        });
      }
    }
  }, [isConnected, walletId, connectors, connect]);

  useEffect(() => {
    if (isConnected && connector) {
      setWalletId(connector.id);
    } else if (!isConnected) {
      handleConnect();
    }
  }, [isConnected, connector, setWalletId, handleConnect]);

  // Attempt to connect on mount and when walletId changes
  useEffect(() => {
    handleConnect();
  }, [handleConnect]);
};
