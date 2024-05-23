import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { IPALicenseToken__factory } from "../../../contract-config/typechain";
import { IPALicenseTokenAddress } from "@/constant/contract";

interface UseMintLicenseTokenReturn {
  mintLicenseToken: (
    assetId: bigint,
    ipId: `0x${string}`,
    licenseTermsId: number,
    ltAmount: bigint,
    ltRecipient: `0x${string}`
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
    ltAmount: bigint,
    ltRecipient: `0x${string}`
  ) => {
    try {
      await writeContract({
        address: IPALicenseTokenAddress as `0x${string}`,
        abi: IPALicenseToken__factory.abi,
        functionName: "mintLicenseToken",
        args: [assetId, ipId, licenseTermsId, ltAmount, ltRecipient],
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
