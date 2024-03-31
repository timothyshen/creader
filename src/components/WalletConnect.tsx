'use client'
import { Account } from "@/components/AccountDisplay";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import ViewCoverView from "./ViewCoverView";


const WalletConnectComponent = () => {
    const { isConnected } = useAccount()

    return (
        <div className="flex flex-col">
            {isConnected ?
                (<>
                    <Account />
                    <ViewCoverView />
                </>) :
                (<>
                    <div className="text-2xl font-bold mb-4">Connect to a wallet</div>
                    <WalletOptions />
                </>)}
        </div>
    )
}

export default WalletConnectComponent;