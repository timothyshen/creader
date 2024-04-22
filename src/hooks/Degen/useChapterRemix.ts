import { ChapterLog__factory } from "@/contract-config/typechain";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CHAPTERLOG_ADDRESS } from "@/constant/contract";

export const useChapterRemix = () => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const chapterRemix = (chapterId: number, title: string, content: string) => {
    try {
      return writeContract({
        address: CHAPTERLOG_ADDRESS as `0x${string}`,
        abi: ChapterLog__factory.abi,
        functionName: "remixChapter",
        args: [BigInt(chapterId), title, content],
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
    chapterRemix,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
