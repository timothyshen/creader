import { ChapterLog__factory } from "@/contract-config/typechain";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CHAPTERLOG_ADDRESS } from "@/constant/contract";

export const useChapterCreate = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const chapterCreate = (title: string, content: string) => {
    try {
      return writeContract({
        address: CHAPTERLOG_ADDRESS as `0x${string}`,
        abi: ChapterLog__factory.abi,
        functionName: "createChapter",
        args: [title, content, BigInt(0)],
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
    chapterCreate,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
