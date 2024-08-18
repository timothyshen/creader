import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SelectLicense from "./SelectLicense";
import { useState } from "react";
import TermsList from "./TermsList";
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { ILicensingModule__factory } from '../../../../contract-config/typechain'

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
                <Button className='text-lg text-white'>
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
                    <Button onClick={handleMintLicenseToken}>Attach License Terms</Button>
                    {isConfirming && <p>Confirming...</p>}
                    {isConfirmed && <p>Confirmed</p>}
                    {error && <p>Error: {error.message}</p>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}