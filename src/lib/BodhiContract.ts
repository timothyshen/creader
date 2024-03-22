import { client } from "@/provider/config";
import { Bodhi__factory } from "@/contract-config/typechain";
import { BodhiAddress } from "@/constant/contract";

// address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

export async function getAssetIdsByAddress(address: `0x${string}`) {
  const getAssetsId = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getAssetIdsByAddress",
    address: BodhiAddress as `0x${string}`,
    args: [address],
  });
  console.log("getAssetsId", getAssetsId);
  return getAssetsId;
}

export async function getAssetsById(id: bigint) {
  const getAssets = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "assets",
    address: BodhiAddress as `0x${string}`,
    args: [id],
  });
  // console.log('getAssets', getAssets)
  return getAssets;
}

export async function getPrice(supply: bigint, amount: bigint) {
  const price = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getPrice",
    address: BodhiAddress as `0x${string}`,
    args: [supply, amount],
  });
  // console.log('price', price)
  return price;
}

export async function getBuyPrice(id: number, amount: number) {
  const buyPrice = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getBuyPrice",
    address: BodhiAddress as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  console.log("buyPrice", buyPrice);
  return buyPrice;
}

export async function getSellPrice(id: number, amount: number) {
  const sellPrice = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getSellPrice",
    address: BodhiAddress as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  console.log("sellPrice", sellPrice);
  return sellPrice;
}

export async function getBuyPriceAfterFee(id: number, amount: number) {
  const buyPriceAfterFee = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getBuyPriceAfterFee",
    address: BodhiAddress as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  console.log("buyPriceAfterFee", buyPriceAfterFee);
  return buyPriceAfterFee;
}

export async function getSellPriceAfterFee(id: number, amount: number) {
  const sellPriceAfterFee = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "getSellPriceAfterFee",
    address: BodhiAddress as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  console.log("sellPriceAfterFee", sellPriceAfterFee);
  return sellPriceAfterFee;
}

export async function getAssetsSupply(id: bigint) {
  const totalSupply = await client.readContract({
    abi: Bodhi__factory.abi,
    functionName: "totalSupply",
    address: BodhiAddress as `0x${string}`,
    args: [id],
  });
  console.log("totalSupply", totalSupply);
  return totalSupply;
}
