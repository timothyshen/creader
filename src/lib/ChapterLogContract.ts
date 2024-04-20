import { client } from "@/provider/config";
import { ChapterLog__factory } from "@/contract-config/typechain";
import { CHAPTERLOG_ADDRESS } from "@/constant/contract";

export const getChapter = async (chapterId: number) => {
  const chapter = await client.readContract({
    abi: ChapterLog__factory.abi,
    functionName: "getChapter",
    address: CHAPTERLOG_ADDRESS,
    args: [BigInt(chapterId)],
  });
  return chapter;
};

export const getChapterCount = async () => {
  const chapterCount = await client.readContract({
    abi: ChapterLog__factory.abi,
    functionName: "getChapterCount",
    address: CHAPTERLOG_ADDRESS,
  });
  return chapterCount;
};

export const getChapterLog = async () => {
  const chapterLog = await client.readContract({
    abi: ChapterLog__factory.abi,
    functionName: "chapterLog",
    address: CHAPTERLOG_ADDRESS,
  });
  return chapterLog;
};

export const getTippingLog = async (chapterId: number) => {
  const tippingLog = await client.readContract({
    abi: ChapterLog__factory.abi,
    functionName: "tippingLog",
    address: CHAPTERLOG_ADDRESS,
    args: [BigInt(chapterId)],
  });
  return tippingLog;
};

export const getRemixes = async (chapterId: number) => {
  const remixes = await client.readContract({
    abi: ChapterLog__factory.abi,
    functionName: "getRemixes",
    address: CHAPTERLOG_ADDRESS,
    args: [BigInt(chapterId)],
  });
  return remixes;
};
