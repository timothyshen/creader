/* eslint-disable @next/next/no-img-element */
'use client'
import { Account } from "@/components/AccountDisplay";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import ViewCoverView from "./ViewCoverView";
import { ConnectWalletClient } from "@/provider/viemConfig";
import { getTargetNetwork } from "@/utils/network";
import { Card } from "./ui/card";


type WalletConnectComponentProps = {
    id?: string;
};


const WalletConnectComponent = ({ id }: WalletConnectComponentProps) => {
    const { isConnected } = useAccount()
    const currentChain = getTargetNetwork();

    if (isConnected) {
        console.log('currentChain', currentChain);
        const walletClient = ConnectWalletClient();
        walletClient.switchChain(currentChain);
    }

    return (
        <div className="flex flex-col ">
            {isConnected ?
                (<>
                    <Account />
                    <ViewCoverView id={id} />
                    <div className="space-y-2 order-5">
                        <h2 className="text-xl font-bold">NFT Characters</h2>
                        <Card className="p-4 space-y-4">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">Character 1</h3>
                                    <p>0x5130...342A</p>
                                    <img
                                        src="/placeholder.svg"
                                        alt="Character 1"
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                    />
                                    <p>Price: 0.05 ETH</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">Character 2</h3>
                                    <p>0xD745...93ef</p>
                                    <img
                                        src="/placeholder.svg"
                                        alt="Character 2"
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                    />
                                    <p>Price: 0.08 ETH</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">Character 3</h3>
                                    <p>0x1234...5678</p>
                                    <img
                                        src="/placeholder.svg"
                                        alt="Character 3"
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                        style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                    />
                                    <p>Price: 0.03 ETH</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </>) :
                (<>
                    <div className="text-2xl font-bold mb-4 mx-auto">Connect to a wallet</div>
                    <WalletOptions />
                </>)}
        </div>
    )
}

export default WalletConnectComponent;