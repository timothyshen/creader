import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { IPALicenseToken__factory } from "../../../contract-config/typechain";
import { IPALicenseTokenAddress } from "@/constant/contract-sepolia";

interface UseMintLicenseTokenReturn {
  mintLicenseToken: (
    assetId: bigint,
    ipId: `0x${string}`,
    licenseTermsId: number,
    ltRecipient: `0x${string}`,
    ltAmount: bigint
  ) => Promise<void>;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: Error | null;
}

export const useMintLicenseToken = (): UseMintLicenseTokenReturn => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const mintLicenseToken = async (
    assetId: bigint,
    ipId: `0x${string}`,
    licenseTermsId: number,
    ltRecipient: `0x${string}`,
    remixType: bigint
  ) => {
    try {
      await writeContract({
        address: IPALicenseTokenAddress as `0x${string}`,
        abi: IPALicenseToken__factory.abi,
        functionName: "mintLicenseToken",
        args: [assetId, ipId, licenseTermsId, ltRecipient, remixType],
      });
    } catch (err) {
      console.error("Error calling mintLicenseToken:", err);
    }
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    mintLicenseToken,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
