import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import { Address, createPublicClient, http, parseAbi } from "viem";

import { mainnet } from "viem/chains";

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://eth-mainnet.g.alchemy.com/v2/FG7JPVY6RY93H92iEeO9c-3I_fdG9-WZ`
  ),
});

const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]);

export const fetchPriceFromUni = async (): Promise<number> => {
  console.log("fetchPriceFromUni");
  try {
    const DAI = new Token(1, "0x6B175474E89094C44Da98b954EedeAC495271d0F", 18);

    const ETH = new Token(1, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18);

    const pairAddress = Pair.getAddress(ETH, DAI) as Address;

    const wagmiConfig = {
      address: pairAddress,
      abi: ABI,
    };

    const reserves = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "getReserves",
    });

    const token0Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token0",
    });

    const token1Address = await publicClient.readContract({
      ...wagmiConfig,
      functionName: "token1",
    });

    const token0 = [ETH, DAI].find(
      (token) => token.address === token0Address
    ) as Token;
    const token1 = [ETH, DAI].find(
      (token) => token.address === token1Address
    ) as Token;
    const pair = new Pair(
      CurrencyAmount.fromRawAmount(token0, reserves[0].toString()),
      CurrencyAmount.fromRawAmount(token1, reserves[1].toString())
    );
    const route = new Route([pair], ETH, DAI);
    const price = parseFloat(route.midPrice.toSignificant(6));
    console.log("price", price);
    return price;
  } catch (error) {
    console.error(
      `useNativeCurrencyPrice - Error fetching ETH price from Uniswap: `,
      error
    );
    return 0;
  }
};
