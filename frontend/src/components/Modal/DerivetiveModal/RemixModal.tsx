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
import { useMintLicenseToken } from '@/hooks/Copyright/useMintLicenseToken';
import { RemixSelect } from '@/components/Modal/DerivetiveModal/RemixSelect'
import ImageDerivetive from './DerivetiveType/ImageDerivetive'
import SoundDerivetive from './DerivetiveType/SoundDerivetive'
import SettingDerivetive from './DerivetiveType/SettingDerivetive'
import { useAccount } from 'wagmi'

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
        mintLicenseToken,
        isPending,
        isConfirming,
        isConfirmed,
        error
    } = useMintLicenseToken();

    const handleMintLicenseToken = () => {
        // Function to handle minting the license token
        if (!address) {
            return
        }
        console.log(address, assetsId, ipId)
        mintLicenseToken(
            assetsId,
            ipId,
            3,
            address,
            BigInt(1)
        )
        setSelected(null)
    }

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
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
