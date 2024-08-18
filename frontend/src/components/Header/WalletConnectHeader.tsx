'use client'
import { AccountDisplayHeader } from "@/components/Header/AccountDisplayHeader";
import WalletOptions from "@/components/WalletOption";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { getTargetNetwork } from "@/utils/network";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { SiweMessage } from "siwe"
import { getCsrfToken, signIn, useSession } from "next-auth/react"
import { useState } from "react";



const WalletConnectComponentHeader = () => {
    const { signMessageAsync } = useSignMessage()
    const { connect, connectors } = useConnect()
    const currentChain = getTargetNetwork();
    const session = useSession()


    const [hasSigned, setHasSigned] = useState(false)

    const { address, isConnected } = useAccount()

    const handleSign = async () => {
        try {
            await connect({ connector: connectors[0] })
            const message = new SiweMessage({
                domain: window.location.host,
                uri: window.location.origin,
                version: "1",
                address: address,
                statement: session,
                nonce: await getCsrfToken(),
                chainId: currentChain.id,
            });

            const signedMessage = await signMessageAsync({
                message: message.prepareMessage(),
            });

            setHasSigned(true);

            const response = await signIn("web3", {
                message: JSON.stringify(message),
                signedMessage,
                redirect: true,
                callbackUrl: '/hidden'
            });
            if (response?.error) {
                console.log("Error occured:", response.error);
            }

        } catch (error) {
            console.log("Error Occured", error);
        }
    };

    return (
        <div className="max-h-52 flex flex-col">
            {!isConnected && <Dialog>
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
            </Dialog>}
            {isConnected && !hasSigned && <Button onClick={() => handleSign()}>Sign In</Button>}
            {isConnected && hasSigned && <AccountDisplayHeader />}
        </div>
    )
}

export default WalletConnectComponentHeader;