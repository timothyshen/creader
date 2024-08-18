'use client';
import React, { useEffect, useState } from 'react';
import { Connector, useConnect } from 'wagmi';
import { Button } from './ui/button';
import { ConnectWalletClient } from '@/provider/viemConfig';
import { getTargetNetwork } from '@/utils/network';


const WalletOptions = () => {
    const { connectors, connect } = useConnect();
    const currentChain = getTargetNetwork();
    const walletClient = ConnectWalletClient();

    return (
        <>
            {connectors.map((connector) => (
                <WalletOption
                    className='mb-2'
                    key={connector.id} // Assuming connectors have an 'id' or similar unique identifier
                    connector={connector}
                    onClick={() => {
                        connect({ connector });
                        console.log('currentChain', currentChain);
                        walletClient.switchChain(currentChain);
                    }}
                />
            ))}
        </>
    );
};

const WalletOption = ({ className, connector, onClick }: { className: string; connector: Connector; onClick: () => void }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const checkProvider = async () => {
            try {
                const provider = await connector.getProvider();
                setReady(!!provider);
            } catch (error) {
                console.error("Error fetching provider:", error);
                setReady(false);
            }
        };

        checkProvider();
    }, [connector]); // Dependency array includes connector

    return (
        <Button className={className} variant='default' disabled={!ready} onClick={onClick}>
            {connector.name}
        </Button>
    );
};

export default WalletOptions;
