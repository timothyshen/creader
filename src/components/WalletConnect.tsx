'use client'
import { Account } from "@/components/AccountDisplay";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import CreateCoverView from "./CreateCoverView";


const WalletConnectComponent = () => {
    const { isConnected } = useAccount()

    return (
        <div className="max-h-52 flex flex-col">
            {isConnected ?
                (<>

                    <Account />
                    <CreateCoverView />
                </>) :
                (<>
                    <div className="text-2xl font-bold mb-4">Connect to a wallet</div>
                    <WalletOptions />
                </>)}
        </div>
    )
}

export default WalletConnectComponent;