import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { BookShare__factory } from "@/contract-config/typechain";
import { BOOKSHARE_ADDRESS } from "@/constant/contract";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBodhiCreate = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bodhiCreate = (title: string, arTxId: string) => {
    try {
      return writeContract({
        address: BOOKSHARE_ADDRESS as `0x${string}`,
        abi: BookShare__factory.abi,
        functionName: "create",
        args: [title, arTxId],
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
