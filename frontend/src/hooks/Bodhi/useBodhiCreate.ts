import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Bodhi__factory } from "../../../contract-config/typechain";
import { BodhiAddress } from "@/constant/contract-sepolia";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBodhiCreate = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bodhiCreate = (arTxId: string) => {
    try {
      return writeContract({
        address: BodhiAddress as `0x${string}`,
        abi: Bodhi__factory.abi,
        functionName: "create",
        args: [arTxId],
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    bodhiCreate,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
