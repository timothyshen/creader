'use client'
import { Account } from "@/components/AccountDisplay";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import ViewCoverView from "./ViewCoverView";
import AuthorCoverView from '@/components/AuthorCoverView';


type WalletConnectComponentProps = {
    addr: `0x${string}`;
};


const WalletConnectAuthorComponent = ({ addr }: WalletConnectComponentProps) => {
    const { isConnected } = useAccount()

    return (
        <div className="flex flex-col w-[450px]">
            {isConnected ?
                (<>
                    <Account />
                    <AuthorCoverView addr={addr} />
                </>) :
                (<>
                    <div className="text-2xl font-bold mb-4 mx-auto">Connect to a wallet</div>
                    <WalletOptions />
                </>)}
        </div>
    )
}

export default WalletConnectAuthorComponent;