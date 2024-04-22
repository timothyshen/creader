import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { BookShare__factory } from "@/contract-config/typechain";
import { BOOKSHARE_ADDRESS } from "@/constant/contract";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBookSell = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bookSell = (id: bigint, amount: number) => {
    const amountBigInt = amount * 10 ** 18;

    try {
      return writeContract({
        address: BOOKSHARE_ADDRESS as `0x${string}`,
        abi: BookShare__factory.abi,
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
    bookSell,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
