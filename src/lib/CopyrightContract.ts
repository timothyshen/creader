import { CopyrightNFT__factory } from "@/contract-config/typechain";
import { client } from "@/provider/config";
import { CopyrightNFTAddress } from "@/constant/contract";

// address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',

export async function getAllCopyright() {
  const copyright_getAll = await client.readContract({
    abi: CopyrightNFT__factory.abi,
    functionName: "getAllCoypright",
    address: CopyrightNFTAddress as `0x${string}`,
  });
  // console.log('getAllCoypright', copyright_getAll)
  return copyright_getAll;
}

export async function getCover(id: number) {
  const cover = await client.readContract({
    abi: CopyrightNFT__factory.abi,
    functionName: "getCover",
    address: CopyrightNFTAddress as `0x${string}`,
    args: [BigInt(id)],
  });
  return cover;
}

export async function getAuthorCover(author: `0x${string}`) {
  const author_cover = await client.readContract({
    abi: CopyrightNFT__factory.abi,
    functionName: "getAuthorCover",
    address: CopyrightNFTAddress as `0x${string}`,
    args: ["0xcC2042a7c7997a04e26389B9689f2AE766342732"],
  });
  console.log("author_cover", author_cover);
  return author_cover;
}
