import { WebIrys } from "@irys/sdk";
import { ConnectWalletClient } from "@/provider/config";
import { parseEther } from "viem";

const getWebIrys = async () => {
  const url = "https://devnet.irys.xyz";
  const token = "base-eth";
  const rpcUrl = "https://base-sepolia.blockpi.network/v1/rpc/public";
  const walletClient = ConnectWalletClient();

  console.log("client=", walletClient);
  //@ts-expect-error injected
  walletClient.getSigner = () => walletClient;
  //@ts-expect-error injected
  walletClient.getAddress = async () =>
    walletClient.getAddresses().then((a) => a[0]);
  console.log("client=", walletClient);

  const wallet = { name: "viem", provider: walletClient };
  const webIrys = new WebIrys({ url, token, wallet });

  webIrys.tokenConfig.sendTx = async (data): Promise<string> => {
    const hash = await walletClient.sendTransaction({
      to: data.to,
      value: parseEther(data.amount.toString()),
      account: webIrys.address as `0x${string}`,
    });
    return hash;
  };

  webIrys.tokenConfig.createTx = async (
    amount,
    to,
    fee
  ): Promise<{ txId: string | undefined; tx: any }> => {
    // dummy value/method
    return { txId: undefined, tx: { amount, to, fee } };
  };
  await webIrys.ready();

  //@ts-expect-error injected
  walletClient._signTypedData = async (domain, types, message) => {
    console.log("client._signTypedData", domain, types, message);
    message["Transaction hash"] =
      "0x" + Buffer.from(message["Transaction hash"]).toString("hex");
    //@ts-ignore
    return await walletClient.signTypedData({
      domain,
      message,
      types,
      account: webIrys.address as `0x${string}`,
      primaryType: "Bundlr",
    });
  };
  console.log(`Conected to webIrys from ${webIrys.address}`);
  return webIrys;
};

export default getWebIrys;
