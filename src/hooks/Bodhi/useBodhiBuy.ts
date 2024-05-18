import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { Bodhi__factory } from "@/contract-config/typechain";
import { parseEther } from "viem";
import { BodhiAddress } from "@/constant/contract";

interface UseBodhiBuyReturn {
  bodhiBuy: (id: bigint, amount: number, ethPrice: string) => Promise<void>;
  isPending: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: Error | null;
}

/* @returns
 * bodhiBuy: Function to call the buy method on the Bodhi contract
 * isPending: Pending state from the writeContract hook
 * isConfirming: Confirming state from the useWaitForTransactionReceipt hook 
 * isConfirmed: Confirmed state from the useWaitForTransactionReceipt hook
 * error: Error state from the writeContract hook
 */

export const useBodhiBuy = (): UseBodhiBuyReturn => {
  // Initialize the writeContract hook from wagmi
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // Define the function to call the buy method on the Bodhi contract
  const bodhiBuy = async (id: bigint, amount: number, ethPrice: string) => {
    const amountBigInt = BigInt(amount * 10 ** 18); // Convert amount to BigInt

    try {
      // Call the writeContract method with the specified parameters
      await writeContract({
        address: BodhiAddress as `0x${string}`, // Cast BodhiAddress to the appropriate type
        abi: Bodhi__factory.abi, // ABI for the Bodhi contract
        functionName: "buy", // Function name to call
        value: parseEther(ethPrice), // Convert ethPrice to Wei
        args: [id, amountBigInt], // Arguments for the function
      });
    } catch (err) {
      // Log any errors that occur
      console.error("Error calling bodhiBuy:", err);
    }
  };

  // Initialize the useWaitForTransactionReceipt hook to track transaction status
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash, // Transaction hash from the writeContract call
    });

  return {
    bodhiBuy, 
    isPending, // Pending state from writeContract hook
    isConfirming, // Confirming state from useWaitForTransactionReceipt hook
    isConfirmed, // Confirmed state from useWaitForTransactionReceipt hook
    error, // Error state from writeContract hook
  };
};
