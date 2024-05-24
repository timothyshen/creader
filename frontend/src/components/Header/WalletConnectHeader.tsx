'use client'
import { AccountDisplayHeader } from "@/components/Header/AccountDisplayHeader";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import {
    DialogTitle,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { useAutoConnect } from "@/hooks/useAutoConnect"


const WalletConnectComponentHeader = () => {
    useAutoConnect()
    const { isConnected } = useAccount()

    return (
        <div className="max-h-52 flex flex-col">
            {isConnected ?
                (<>
                    <AccountDisplayHeader />
                </>) :
                (<>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="link" className='text-xl text-black'>
                                Connect
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                            </DialogHeader>
                            <WalletOptions />
                        </DialogContent>
                    </Dialog>
                </>)}
        </div>
    )
}

export default WalletConnectComponentHeader;