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

type RemixModalProps = {
    assetsId: bigint;
    ipId: `0x${string}`;
}

export const RemixModal = ({
    assetsId,
    ipId,
}: RemixModalProps) => {
    const [selected, setSelected] = useState<string | null>(null)

    const {
        mintLicenseToken,
        isPending,
        isConfirming,
        isConfirmed,
        error
    } = useMintLicenseToken();

    const handleMintLicenseToken = async () => {
        // Function to handle minting the license token
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
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
