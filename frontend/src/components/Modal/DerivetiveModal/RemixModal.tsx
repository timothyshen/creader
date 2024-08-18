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
import { RemixSelect } from '@/components/Modal/DerivetiveModal/RemixSelect'
import ImageDerivetive from './DerivetiveType/ImageDerivetive'
import SoundDerivetive from './DerivetiveType/SoundDerivetive'
import SettingDerivetive from './DerivetiveType/SettingDerivetive'
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { ILicensingModule__factory } from '../../../../contract-config/typechain'
import { RemixModalProps } from './DerivetiveType'

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
                    <Button onClick={handleMintLicenseToken}>Attach License Terms</Button>
                    {isConfirming && <p>Confirming...</p>}
                    {isConfirmed && <p>Confirmed</p>}
                    {error && <p>Error: {error.message}</p>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}