'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useMintLicenseTokenCopyright } from '@/hooks/Copyright/useMintLicenseToken';
import { RemixSelect } from '@/components/Modal/DerivetiveModal/RemixSelect'
import ImageDerivetive from './DerivetiveType/ImageDerivetive'
import SoundDerivetive from './DerivetiveType/SoundDerivetive'
import SettingDerivetive from './DerivetiveType/SettingDerivetive'
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useWalletClient } from 'wagmi'
import { IIPAccount__factory, IPALicenseToken__factory } from '../../../../contract-config/typechain'
import { custom, encodeFunctionData, parseEther } from 'viem'
import { IPALicenseTokenAddress } from '@/constant/contract-sepolia'
import { StoryClient, StoryConfig } from '@story-protocol/core-sdk'

type RemixModalProps = {
    assetsId: bigint;
    ipId: `0x${string}`;
}

export const RemixModal = ({
    assetsId,
    ipId,
}: RemixModalProps) => {
    const [selected, setSelected] = useState<string | null>(null)
    const { address } = useAccount()
    const {
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()

    // const { mintLicenseTokenCopyright, isPending, isConfirming, isConfirmed, error } = useMintLicenseTokenCopyright();

    const { data: wallet } = useWalletClient();

    function setupStoryClient() {
        if (!wallet) {
            throw new Error("Wallet is not connected");
        }
        const config: StoryConfig = {
            account: wallet.account,
            transport: custom(wallet.transport),
            chainId: "sepolia"
        };
        const client = StoryClient.newClient(config);
        return client;
    }


    const handleMintLicenseToken = async () => {
        try {
            console.log("Starting mint process");

            const client = setupStoryClient();

            const resp = await client.permission.setPermission({
                ipId: ipId,
                to: "0xe89b0eaa8a0949738efa80bb531a165fb3456cbe",
                signer: IPALicenseTokenAddress as `0x${string}`,
                func: "0x2a4130c0",
                permission: 1
            });
            console.log("Permission set:", resp);
        } catch (error) {
            console.error("Error minting license token:", error);
            // Handle the error appropriately, e.g., show an error message to the user
        }

        const data = encodeFunctionData({
            abi: IPALicenseToken__factory.abi,
            functionName: "mintLicenseTokenCopyright",
            args: [ipId],
        });

        console.log("Encoded function data:", data);

        writeContract({
            address: ipId,
            abi: IIPAccount__factory.abi,
            functionName: 'execute',
            args: [
                IPALicenseTokenAddress as `0x${string}`,
                parseEther('0'),
                data,
            ],
        });
        // mintLicenseTokenCopyright(
        //     BigInt(1),
        //     ipId,
        //     3,
        //     address as `0x${string}`,
        //     BigInt(1)
        // )


    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    const showDerivtiveContent = () => {
        if (selected === 'bgm') {
            return <SoundDerivetive />
        }
        if (selected === 'setting') {
            return <SettingDerivetive />
        }
        if (selected === 'character') {
            return <ImageDerivetive />
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full'>Remix</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="remix-type" className="text-right">
                            Remix Type
                        </Label>
                        <RemixSelect selectRemix={setSelected} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            value={selected || ""}
                            onChange={(e) => setSelected(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div>
                        {showDerivtiveContent()}
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleMintLicenseToken}>Remix</Button>
                    {isConfirming && <p>Confirming...</p>}
                    {isConfirmed && <p>Confirmed</p>}
                    {error && <p>Error: {error.message}</p>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}