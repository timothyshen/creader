import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { StepProps } from "@/types/steptypes"
import { ChapterNFT__factory, IIPAccount__factory } from "../../../../contract-config/typechain";
import {
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { encodeFunctionData, parseEther } from "viem";
import getWebIrys from "@/provider/irys";
import { useState } from "react";
import { ChapterNFTAddress } from '@/constant/contract-sepolia'
import MarkdownEditor from "@/components/MarkdownEditor"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft } from "lucide-react";
import { sliceAddress } from "@/utils/supportFunction";
import { LicenseModel } from "@/components/Modal/LicenseModel/licenseModel";


export const UploadStep: React.FC<StepProps> = ({ setStep, nftAcc, setOpen, setIsMintedBodhi }) => {

    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    const [text, setText] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [ipId, setIpId] = useState<string>()

    const handleUpload = async () => {


        if (text === undefined || nftAcc === undefined || title === undefined) return;
        const webIrys = await getWebIrys();
        try {
            // console.log('uploading');
            const receipt = await webIrys.upload(text);
            // console.log('receipt', receipt);
            // console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);

            // Use the receipt.id directly here
            const receiptIdLocal = receipt.id;
            const data = encodeFunctionData({
                abi: ChapterNFT__factory.abi,
                functionName: 'createChapter',
                args: [title, receiptIdLocal],
            });

            // console.log('data', data);

            // address: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

            writeContract({
                address: nftAcc,
                abi: IIPAccount__factory.abi,
                functionName: 'execute',
                args: [
                    ChapterNFTAddress as `0x${string}`,
                    parseEther('0'),
                    data,
                ],
            });
            setIpId("0x0");

        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };


    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })
    console.log(error)

    if (isConfirmed === true) {
        if (setOpen) {
            setOpen(false);
            setIsMintedBodhi(true);
        }
    }


    return (
        <>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setStep("select")}>
                        <ArrowBigLeft className="h-4 w-4" />
                    </Button>
                    <span>Upload your chapter now!</span>
                </DialogTitle>
                <DialogDescription>
                    Upload your book
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="chapterTitle">Chapter Title</Label>
                    <Input
                        id="chapterTitle"
                        placeholder="Enter chapter title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <MarkdownEditor setValue={setText} value={text} />
            </div>
            <DialogFooter className="flex justify-between items-center">
                <Button variant="ghost" onClick={() => setStep("select")}>
                    Cancel
                </Button>
                <Button onClick={handleUpload} disabled={isPending || isConfirming}>
                    {true ? "Loading..." : "Upload"}
                </Button>
                <LicenseModel ipId={ipId as `0x${string}`} />
            </DialogFooter>
            {error && (
                <p className="text-red-600">{error.message}</p>
            )}
            {/* {(error || isConfirming || isConfirmed || hash) && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    {error && (
                        <p className="text-red-600">{error.message}</p>
                    )}
                    {isConfirming && <p className="text-yellow-600">Confirming...</p>}
                    {isConfirmed && <p className="text-green-600">Confirmed!</p>}
                    {hash && (
                        <p className="text-blue-600">
                            Transaction Hash: {sliceAddress(hash)}
                        </p>
                    )}
                </div>
            )} */}
        </>
    );
}



