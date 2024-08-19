'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

import {
    type BaseError, useAccount, useChainId,
    useWaitForTransactionReceipt,
    useWriteContract
} from "wagmi";
import { toast } from "sonner"
import { CopyrightNFTAddress } from "@/constant/contract-sepolia";
import { ConnectWalletClient } from '@/provider/viemConfig';
import { BaseSepoliaChainExplorer } from '@/constant/contract-sepolia';
import { getTargetNetwork } from "@/utils/network"
import { sliceAddress } from "@/utils/supportFunction";



// test

import { CopyrightNFT__factory } from '../../../contract-config/typechain'
import { useEffect, useState } from "react";

type CreateCopyrightProps = {
    setIsMinted?: (isMinted: boolean) => void;
};

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    description: z.string().max(280, {
        message: "Description must be less than 280 characters.",
    }),
})

export const CreateCopyright: React.FC<CreateCopyrightProps> = ({ setIsMinted }) => {
    const {
        data: hash,
        error: errorLog,
        isPending,
        writeContract
    } = useWriteContract()
    const [open, setOpen] = useState<boolean>(false)


    const account = useAccount()
    const chainId = useChainId()
    const walletClient = ConnectWalletClient()
    const currentChain = getTargetNetwork()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const data = {
            to: account.address,
            chainId: chainId,
            title: values.title,
            description: values.description,
            status: 'OnGoing',
        }

        // address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
        if (currentChain.id !== chainId) walletClient.switchChain(currentChain);

        try {
            console.log(data)
            if (!data.to) return null
            writeContract({
                address: CopyrightNFTAddress as `0x${string}`,
                abi: CopyrightNFT__factory.abi,
                functionName: 'createCopyright',
                args: [data.to, data.title, data.description, data.status],
            })
            console.log(errorLog)
            console.log('writeContract')
        } catch (error) {
            console.log(errorLog)
        }
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    useEffect(() => {
        if (isConfirmed) {
            toast.success("Transaction confirmed")
            if (setIsMinted) setIsMinted(isConfirmed)
        }
    }, [isConfirmed, setIsMinted, setOpen]);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant='default' className='w-full'>Create +</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        Create a Cover
                    </DialogHeader>
                    <DialogDescription>
                        Mint a new cover for the 6551 contract.
                    </DialogDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title of the book" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the title of your Book
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Short Description of the book" className="resize-none" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the Descripton of your Book. Max 280 Characters
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <Button type="submit" className="w-full">
                                Create
                            </Button>
                        </form>
                    </Form>

                    {isConfirmed && (
                        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md">
                            <p className="text-green-800 font-semibold">Transaction confirmed!</p>
                        </div>
                    )}

                    {hash && (
                        <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded-md">
                            <p className="font-semibold">Transaction Hash:</p>
                            <a
                                className="text-blue-600 underline"
                                href={`${BaseSepoliaChainExplorer}/address/${hash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {sliceAddress(hash)}
                            </a>
                        </div>
                    )}
                </DialogContent>
            </Dialog >
        </>
    )
}
