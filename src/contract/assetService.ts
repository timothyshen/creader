import { Asset } from "@/types/contentTypes";
import getWebIrys from "@/provider/irys";
import { getAssetsById, getAssetsSupply } from "@/utils/BodhiContract";

// assetService.ts
// Assuming getAssetsById is already defined and returns a Promise<Asset>
export const fetchAndDecodeAssets = async (
  assetIds: BigInt[]
): Promise<Asset[]> => {
  try {
    const assetsPromises = assetIds.map((id) => getAssetsById(id as bigint));
    const tupleAssets = await Promise.all(assetsPromises);
    const assetsList = tupleAssets.map(async (tuple) => {
      const asset: Asset = {
        id: tuple[0],
        arTxId: tuple[1],
        creator: tuple[2],
      };
      asset.content = await getARContent(tuple[1]);
      asset.supply = await getAssetsSupply(tuple[0]);
      return asset;
    });

    const assetsWithContent = await Promise.all(assetsList);
    return assetsWithContent;
  } catch (error) {
    console.error("Error fetching or decoding assets:", error);
    throw error; // Rethrow error to handle it in the calling code
  }
};

const getARContent = async (arTxId: string) => {
  const gatewayAddress = "https://devnet.irys.xyz/";
  const url = `${gatewayAddress}${arTxId}`;

  try {
    const response = await fetch(url);
    // console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to retrieve data for ID: ${arTxId}`);
    }

    const data = await response.text();
    // console.log(data);
    return data;
  } catch (e) {
    console.log("Error retrieving data ", e);
  }
};
