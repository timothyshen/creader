import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { IPALicenseToken__factory } from "../../../contract-config/typechain";
import { IPALicenseTokenAddress } from "@/constant/contract-sepolia";

interface UseMintLicenseTokenReturn {
  mintLicenseTokenCopyright: (
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

export const useMintLicenseTokenCopyright = (): UseMintLicenseTokenReturn => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const mintLicenseTokenCopyright = async (
    assetId: bigint,
    ipId: `0x${string}`,
    licenseTermsId: number,
    ltRecipient: `0x${string}`,
    remixType: bigint
  ) => {
    try {
      console.log(assetId, ipId, licenseTermsId, ltRecipient, remixType);
      console.log(IPALicenseTokenAddress);
      const result = writeContract({
        address: IPALicenseTokenAddress as `0x${string}`,
        abi: IPALicenseToken__factory.abi,
        functionName: "mintLicenseTokenCopyright",
        args: [ipId],
      });
      console.log("Transaction result:", result);
    } catch (err) {
      console.error("Error calling mintLicenseToken:", err);
    }
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return {
    mintLicenseTokenCopyright,
    isPending,
    isConfirming,
    isConfirmed,
    error,
  };
};
