import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Bodhi__factory } from "../../../contract-config/typechain";
import { BodhiAddress } from "@/constant/contract-sepolia";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBodhiRemove = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bodhiRemove = (id: number) => {
    try {
      return writeContract({
        address: BodhiAddress as `0x${string}`,
        abi: Bodhi__factory.abi,
        functionName: "remove",
        args: [BigInt(id)],
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
    bodhiRemove,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
