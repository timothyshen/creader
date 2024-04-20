import { client } from "@/provider/config";
import { BookShare__factory } from "@/contract-config/typechain";
import { BOOKSHARE_ADDRESS } from "@/constant/contract";

export async function getBalanceOf(address: `0x${string}`, assetId: bigint) {
  const getBalanceOf = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "balanceOf",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [address, BigInt(assetId)],
  });
  //   console.log("getAssetsId", getAssetsId);
  const getNum = Number(getBalanceOf) / 10 ** 18;
  return getNum;
}

export async function getAssetsById(id: bigint) {
  const getAssets = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "assets",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [id],
  });
  // console.log('getAssets', getAssets)
  return getAssets;
}

export async function getPrice(supply: bigint, amount: bigint) {
  const price = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "getPrice",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [supply, amount],
  });
  // console.log('price', price)
  return price;
}

export async function getAmount(id: BigInt) {
  const amount = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "totalSupply",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [BigInt(Number(id))],
  });
  // console.log('amount', amount)
  return amount;
}

export async function getBuyPrice(id: bigint, amount: number) {
  amount = amount * 10 ** 18;
  const buyPrice = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "getBuyPrice",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  const newPrice = Number(buyPrice) / 10 ** 18;
  // console.log("buyPrice", newPrice);
  return newPrice;
}

export async function getSellPrice(id: bigint, amount: number) {
  amount = amount * 10 ** 18;
  const sellPrice = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "getSellPrice",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  const newPrice = Number(sellPrice) / 10 ** 18;
  // console.log("sellPrice", sellPrice);
  return newPrice;
}

export async function getBuyPriceAfterFee(id: bigint, amount: number) {
  amount = amount * 10 ** 18;
  const buyPriceAfterFee = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "getBuyPriceAfterFee",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  const newPrice = Number(buyPriceAfterFee) / 10 ** 18;
  // console.log("buyPriceAfterFee", buyPriceAfterFee);
  return newPrice;
}

export async function getSellPriceAfterFee(id: bigint, amount: number) {
  amount = amount * 10 ** 18;
  const sellPriceAfterFee = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "getSellPriceAfterFee",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [BigInt(id), BigInt(amount)],
  });
  const newPrice = Number(sellPriceAfterFee) / 10 ** 18;
  // console.log("sellPriceAfterFee", sellPriceAfterFee);
  return newPrice;
}

export async function getAssetsSupply(id: bigint) {
  const totalSupply = await client.readContract({
    abi: BookShare__factory.abi,
    functionName: "totalSupply",
    address: BOOKSHARE_ADDRESS as `0x${string}`,
    args: [id],
  });
  //   console.log("totalSupply", totalSupply);
  return totalSupply;
}
