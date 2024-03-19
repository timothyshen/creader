'use client'
import {
    DialogDescription,
    DialogFooter,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import {
    useAccount, useChainId, type BaseError,
    useWaitForTransactionReceipt,
    useWriteContract
} from "wagmi";
import { toast } from "sonner"
import { CopyrightNFTAddress } from "@/constant/contract";

// test

import { CopyrightNFT__factory } from '@/contract-config/typechain'
import { useEffect, useState } from "react";

type CreateCopyrightProps = {
    setIsMinted: (isMinted: boolean) => void;

};

export const CreateCopyright: React.FC<CreateCopyrightProps> = ({ setIsMinted }) => {
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()
    const [open, setOpen] = useState<boolean>(false)


    const account = useAccount()
    const chainId = useChainId()

    const handleSubmit = async () => {
        const data = {
            to: account.address,
            chainId: chainId,
            title: 'title',
            description: 'description',
            status: 'status',
        }

        // address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',

        try {
            if (!data.to) return null
            writeContract({
                address: CopyrightNFTAddress as `0x${string}`,
                abi: CopyrightNFT__factory.abi,
                functionName: 'createCopyright',
                args: [data.to, BigInt(data.chainId), data.title, data.description, data.status],
            })

        } catch (error) {
            console.log(error)
        }
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    useEffect(() => {
        if (isConfirmed) {
            toast.success("Transaction confirmed")
            setIsMinted(true)
        }

    }, [isConfirmed, setIsMinted, setOpen]);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                    <Button variant='default' className='mb-5 w-full'>Mint 6551</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        Create a Cover
                    </DialogHeader>
                    <DialogDescription>
                        Mint a new cover for the 6551 contract.
                    </DialogDescription>
                    <Button onClick={handleSubmit}>
                        Create
                    </Button>
                    <div>
                        {isConfirmed && <div>Transaction confirmed.</div>}
                        {hash &&
                            <div>Transaction Hash:
                                <a className=" underline font-bold" href={`https://sepolia.etherscan.io/${hash}`}>
                                    Here
                                </a>
                            </div>}
                    </div>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
