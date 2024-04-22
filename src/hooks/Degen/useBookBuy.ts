import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { BookShare__factory } from "@/contract-config/typechain";
import { BOOKSHARE_ADDRESS } from "@/constant/contract";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export const useBookBuy = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const bookBuy = (id: bigint, amount: number, ethPrice: string) => {
    const amountBigInt = amount * 10 ** 18;
    try {
      return writeContract({
        address: BOOKSHARE_ADDRESS as `0x${string}`,
        abi: BookShare__factory.abi,
        functionName: "buy",
        value: parseEther(ethPrice),
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
    bookBuy,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
