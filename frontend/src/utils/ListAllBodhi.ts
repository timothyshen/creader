import { client } from "@/provider/viemConfig";
import { parseAbiItem } from "viem";

export async function getCreateLog() {
  const filter = await client.createEventFilter({
    address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    event: parseAbiItem(
      "event Create(uint256 indexed assetId, address indexed sender, string arTxId)"
    ),
  });
  const createLog = await client.getFilterLogs({
    filter,
  });
  console.log("createLog", createLog);
}
