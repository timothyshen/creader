import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SelectLicense from "./SelectLicense";
import { useState } from "react";
import TermsList from "./TermsList";
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { ILicensingModule__factory } from '../../../../contract-config/typechain'
import { sliceAddress } from "@/utils/supportFunction";
import { BaseSepoliaChainExplorer } from '@/constant/contract-sepolia';

interface LicenseModelProps {
    ipId: `0x${string}`;
};


export const LicenseModel = ({
    ipId,
}: LicenseModelProps) => {
    const [license, setLicense] = useState<string | null>(null);
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()


    const handleMintLicenseToken = async () => {

        writeContract({
            address: "0xe89b0EaA8a0949738efA80bB531a165FB3456CBe" as `0x${string}`,
            abi: ILicensingModule__factory.abi,
            functionName: "attachLicenseTerms",
            args: [
                ipId,
                "0x260B6CB6284c89dbE660c0004233f7bB99B5edE7" as `0x${string}`,
                BigInt(1)
            ]
        })
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Attach License
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Attach License</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <p>Select a license to view its terms</p>
                </DialogDescription>
                <div>
                    <SelectLicense setLicense={setLicense} />
                    {license && license !== "" && <TermsList order={parseInt(license)} />}
                </div>
                <DialogFooter>
                    <div className="flex flex-col items-end space-y-4">
                        <div>
                            <Button
                                onClick={handleMintLicenseToken}
                                disabled={isPending || isConfirming}
                                className="w-max"
                            >
                                {isPending || isConfirming ? 'Processing...' : 'Attach License Terms'}
                            </Button>
                        </div>
                        <div>
                            {(isConfirming || isConfirmed || hash || error) && (
                                <div className="w-full p-4 bg-gray-100 border border-gray-200 rounded-md space-y-2">
                                    {isConfirming && (
                                        <p className="text-yellow-600 font-semibold">Confirming transaction...</p>
                                    )}
                                    {isConfirmed && (
                                        <p className="text-green-600 font-semibold">License terms attached successfully!</p>
                                    )}
                                    {error && (
                                        <p className="text-red-600 font-semibold">Error: {error.message}</p>
                                    )}
                                    {hash && (
                                        <div>
                                            <p className="font-semibold">Transaction Hash:</p>
                                            <a
                                                className="text-blue-600 hover:text-blue-800 underline break-all"
                                                href={`${BaseSepoliaChainExplorer}/tx/${hash}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {sliceAddress(hash)}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}