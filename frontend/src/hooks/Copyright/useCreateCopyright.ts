import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useAccount,
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { toast } from "sonner";
import { ConnectWalletClient } from "@/provider/viemConfig";
import { getTargetNetwork } from "@/utils/network";
import {
  BaseSepoliaChainExplorer,
  CopyrightNFTAddress,
} from "@/constant/contract-sepolia";
import { CopyrightNFT__factory } from "../../../contract-config/typechain";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().max(280, {
    message: "Description must be less than 280 characters.",
  }),
});

export const useCreateCopyright = (
  setIsMinted?: (isMinted: boolean) => void
) => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const account = useAccount();
  const chainId = useChainId();
  const walletClient = ConnectWalletClient();
  const currentChain = getTargetNetwork();

  const form: UseFormReturn<z.infer<typeof formSchema>> = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      to: account.address,
      chainId: chainId,
      title: values.title,
      description: values.description,
      status: "OnGoing",
    };

    if (currentChain.id !== chainId)
      await walletClient.switchChain(currentChain);

    try {
      if (!data.to) return;
      await writeContract({
        address: CopyrightNFTAddress as `0x${string}`,
        abi: CopyrightNFT__factory.abi,
        functionName: "createCopyright",
        args: [
          data.to,
          BigInt(data.chainId),
          data.title,
          data.description,
          data.status,
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction confirmed");
      if (setIsMinted) setIsMinted(isConfirmed);
    }
  }, [isConfirmed, setIsMinted]);

  return {
    form,
    onSubmit,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
  };
};
