import React, { useEffect, useState, useCallback } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPrice } from '@/lib/BodhiContract';
import { fetchEtherPrice } from '@/contract/getEthPrice';
import { BuyButton } from '@/components/PurchaseButton/BuyButton';
import { SellButton } from '@/components/PurchaseButton/SellButton';
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';
import { useGlobalState } from '@/stores/useGlobalState';
import { fetchPriceFromUni } from '@/lib/fetchPriceFromUni';

interface BodhiCardProps {
    order: number;
    id: string;
    owner: `0x${string}` | undefined;
    content: string | undefined;
    supply: bigint | undefined;
    onPriceUpdate: (owner: `0x${string}` | undefined, eth: number, usd: number) => void;
}

const fetchPrices = async (supply: bigint) => {
    const weiAmount = BigInt(1 * 10 ** 18);
    const getPriceFeedETH = await getPrice(supply, weiAmount);
    const getPriceStr = Number(getPriceFeedETH) / 10 ** 18;

    // const priceEth = await fetchEtherPrice();
    const priceEth = 3300;
    const priceUsd = (getPriceStr * priceEth).toFixed(2);

    return { eth: getPriceStr.toString(), usd: priceUsd };
};

export const BodhiCard = ({ order, owner, id, content, supply, onPriceUpdate }: BodhiCardProps) => {
    const [filePriceETH, setFilePriceETH] = useState<string>();
    const [filePriceUSD, setFilePriceUSD] = useState<string>();
    const newPrice = useNativeCurrencyPrice();
    console.log('newPrice', newPrice);


    const sliceOwner = useCallback((owner: `0x${string}`) => (
        `${owner.slice(0, 6)}...${owner.slice(-4)}`
    ), []);

    const sliceArTxId = useCallback((arTxId: string) => (
        `${arTxId.slice(0, 6)}...${arTxId.slice(-4)}`
    ), []);

    useEffect(() => {
        if (supply) {
            fetchPrices(supply).then(({ eth, usd }) => {
                setFilePriceETH(eth);
                setFilePriceUSD(usd);
                console.log('eth', eth);
                console.log('usd', usd);
            });
        }
    }, [supply]);

    return (
        <Card className='mb-4 p-2'>
            <CardHeader>
                <CardTitle># {order + 1} Created by {owner && sliceOwner(owner)}</CardTitle>
                <CardDescription>AR ID: <span className="underline text-blue-400 cursor-pointer" onClick={() => {
                    window.location.href = `https://devnet.irys.xyz/${id}`;
                }}>{sliceArTxId(id)}</span></CardDescription>
            </CardHeader>
            <CardContent>
                <div className='my-2 overflow-hidden relative max-h-48 w-96'>{content}</div>
                <Button variant="outline" className='w-full'>
                    View more
                </Button>
            </CardContent>
            <CardFooter className='flex justify-between border-t-2 py-3 px-4'>
                <div>
                    <div className='text-lg'>
                        ${filePriceUSD}
                    </div>
                    <div className='text-sm text-gray-400'>
                        {filePriceETH} ETH / Share
                    </div>
                </div>
                <div className='flex gap-x-2'>
                    <BuyButton />
                    <SellButton />
                </div>
            </CardFooter>
        </Card >
    );
};
