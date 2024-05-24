import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { Bodhi__factory } from "../../../contract-config/typechain";
import { BodhiAddress } from "@/constant/contract";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBodhiSell = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bodhiSell = (id: bigint, amount: number) => {
    const amountBigInt = amount * 10 ** 18;

    try {
      return writeContract({
        address: BodhiAddress as `0x${string}`,
        abi: Bodhi__factory.abi,
        functionName: "sell",
        args: [BigInt(id), BigInt(amountBigInt)],
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
    bodhiSell,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
