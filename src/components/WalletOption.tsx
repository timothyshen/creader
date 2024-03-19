'use client'
import React, { useState, useEffect } from 'react';
import { Connector, useConnect } from 'wagmi';
import { Button } from './ui/button';

const WalletOptions = () => {
    const { connectors, connect } = useConnect();

    return (
        <>
            {connectors.map((connector) => (
                <WalletOption
                    className='mb-2'
                    key={connector.uid}
                    connector={connector}
                    onClick={() => connect({ connector })}
                />
            ))}
        </>
    )
}

const WalletOption = ({ className, connector, onClick }: { className: string, connector: Connector; onClick: () => void }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Async function to check if the provider is ready
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
}

export default WalletOptions