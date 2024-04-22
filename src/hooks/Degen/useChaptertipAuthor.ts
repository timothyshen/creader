import { ChapterLog__factory } from "@/contract-config/typechain";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CHAPTERLOG_ADDRESS } from "@/constant/contract";
import { parseEther } from "viem";

const useChaptertipAuthor = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const chapterTipAuthor = (chapterId: number, amount: string) => {
    try {
      return writeContract({
        address: CHAPTERLOG_ADDRESS as `0x${string}`,
        abi: ChapterLog__factory.abi,
        functionName: "tipAuthor",
        value: parseEther(amount),
        args: [BigInt(chapterId)],
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
    chapterTipAuthor,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
