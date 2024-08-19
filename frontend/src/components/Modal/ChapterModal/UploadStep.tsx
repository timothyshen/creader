import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { StepProps } from "@/types/steptypes"
import { Bodhi__factory, IIPAccount__factory } from "../../../../contract-config/typechain";
import {
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { encodeFunctionData, parseEther } from "viem";
import getWebIrys from "@/provider/irys";
import { useState } from "react";
import { BodhiAddress } from '@/constant/contract-sepolia'
import MarkdownEditor from "@/components/MarkdownEditor"
import { ArrowBigLeft } from "lucide-react";
import { sliceAddress } from "@/utils/supportFunction";


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
            // console.log('uploading');
            const receipt = await webIrys.upload(text);
            // console.log('receipt', receipt);
            // console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);

            // Use the receipt.id directly here
            const receiptIdLocal = receipt.id;
            const data = encodeFunctionData({
                abi: Bodhi__factory.abi,
                functionName: 'createChapter',
                args: [receiptIdLocal],
            });

            // console.log('data', data);

            // address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

            writeContract({
                address: nftAcc,
                abi: IIPAccount__factory.abi,
                functionName: 'execute',
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
        if (setOpen) {
            setOpen(false);
            setIsMintedBodhi(true);
        }
    }


    return (
        <>
            <DialogHeader>
                <DialogTitle>
                    <Button className="p-0" variant='link' onClick={() => setStep("select")}>
                        <ArrowBigLeft className="" />
                        Back
                    </Button>
                    <p>Upload your chapter now!</p>
                </DialogTitle>
                <DialogDescription>
                    Upload your book
                </DialogDescription>
            </DialogHeader>
            <div className="w-full">
                <MarkdownEditor setValue={setText} value={text} />
                {/* <Textarea onChange={(e: { target: { value: SetStateAction<string | undefined>; }; }) => setText(e.target.value)} placeholder="Type your message here." /> */}

            </div>
            <DialogFooter>
                <div className="flex justify-between">
                    <Button variant='link' onClick={() => setStep("select")}>
                        Cancel
                    </Button>
                    <Button variant='default' onClick={handleUpload}>
                        {isConfirming ? "loading" : "Upload"}
                    </Button>
                </div>
            </DialogFooter>
            <div className='mt-2'>
                {error && (
                    <div className='p-2 bg-red-100 border border-red-400 text-red-700 rounded-md max-w-md mx-auto overflow-hidden'>
                        <p>{error.message}</p>
                    </div>
                )}
                {isConfirming && <p>Confirming...</p>}
                {isConfirmed && <p>Confirmed!</p>}
                {hash && <div>Transaction Hash: {sliceAddress(hash)}</div>}
            </div>
        </>
    );
}



