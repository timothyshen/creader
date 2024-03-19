import {
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { StepProps } from "@/types/steptypes"
import { AccountERC6551__factory, Bodhi__factory } from "@/contract-config/typechain";
import {
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { encodeFunctionData, parseEther } from "viem";
import getWebIrys from "@/lib/irys";
import { useState } from "react";
import { BodhiAddress } from '@/constant/contract'


export const UploadStep: React.FC<StepProps> = ({ setStep, nftAcc, setOpen, setIsMintedBodhi }) => {

    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    const [text, setText] = useState<string>()

    const handleUpload = async () => {


        if (text === undefined || nftAcc === undefined) return;
        const webIrys = await getWebIrys();
        try {
            console.log('uploading');
            const receipt = await webIrys.upload(text);
            console.log('receipt', receipt);
            console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);

            // Use the receipt.id directly here
            const receiptIdLocal = receipt.id;
            console.log('receiptIdLocal', receiptIdLocal);
            const data = encodeFunctionData({
                abi: Bodhi__factory.abi,
                functionName: 'create',
                args: [receiptIdLocal],
            });

            // console.log('data', data);

            // address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

            writeContract({
                address: nftAcc,
                abi: AccountERC6551__factory.abi,
                functionName: 'executeCall',
                args: [
                    BodhiAddress as `0x${string}`,
                    parseEther('0'),
                    data,
                ],
            });


        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };


    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    if (isConfirmed === true) {
        console.log('confirmed')
        if (setOpen) {
            setOpen(false);
            setIsMintedBodhi(true);
        }
    }


    return (
        <>
            <DialogTitle>
                <Button variant='link' onClick={() => setStep("select")}>
                    Back
                </Button>
            </DialogTitle>
            <DialogDescription>
                <Textarea onChange={(e) => setText(e.target.value)} placeholder="Type your message here." />
            </DialogDescription>
            <DialogFooter>
                <div className="flex justify-between">
                    <Button variant='link' onClick={() => setStep("select")}>
                        Cancel
                    </Button>
                    <Button variant='default' onClick={handleUpload}>
                        {isConfirming ? "loading" : "Upload"}
                    </Button>
                </div>
                {error && <div>Error: {error.message}</div>}
                {hash && <div>Transaction Hash: {hash}</div>}
            </DialogFooter>
        </>
    );
}



