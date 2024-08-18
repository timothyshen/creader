'use client'
import { Account } from "@/components/AccountDisplay";
import AuthorCoverView from '@/components/AuthorCoverView';



type WalletConnectComponentProps = {
    addr: `0x${string}`;
};


const WalletConnectAuthorComponent = ({ addr }: WalletConnectComponentProps) => {

    return (
        <div className="flex flex-col w-[450px]">
            <Account />
            <AuthorCoverView addr={addr} />
        </div>
    )
}

export default WalletConnectAuthorComponent;