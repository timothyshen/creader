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
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';
import { TradeModal } from '../PurchaseButton/TradeModal';

interface BodhiCardProps {
    order: number;
    id: string;
    owner: `0x${string}` | undefined;
    content: string | undefined;
    supply: bigint | undefined;
    onPriceUpdate: (owner: `0x${string}` | undefined, eth: number, usd: number) => void;
}



export const BodhiCard = ({ order, owner, id, content, supply, onPriceUpdate }: BodhiCardProps) => {
    const [filePriceETH, setFilePriceETH] = useState<string>();
    const [filePriceUSD, setFilePriceUSD] = useState<string>();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);


    const newPrice = useNativeCurrencyPrice();



    const sliceOwner = useCallback((owner: `0x${string}`) => (
        `${owner.slice(0, 6)}...${owner.slice(-4)}`
    ), []);

    const sliceArTxId = useCallback((arTxId: string) => (
        `${arTxId.slice(0, 6)}...${arTxId.slice(-4)}`
    ), []);

    const toggleContent = () => setIsExpanded(!isExpanded);

    const fetchPrices = async (supply: bigint, newPrice: number) => {
        const weiAmount = BigInt(1 * 10 ** 18);
        const getPriceFeedETH = await getPrice(supply, weiAmount);
        const getPriceStr = Number(getPriceFeedETH) / 10 ** 18;

        // const priceEth = await fetchEtherPrice();
        const priceEth = newPrice;
        const priceUsd = (getPriceStr * priceEth).toFixed(2);
        onPriceUpdate(owner, Number(getPriceStr), Number(priceUsd));
        return { eth: getPriceStr.toString(), usd: priceUsd };
    };


    useEffect(() => {
        if (supply) {
            fetchPrices(supply, newPrice).then(({ eth, usd }) => {
                setFilePriceETH(eth);
                setFilePriceUSD(usd);
            });
        }
    }, [supply, newPrice]);

    return (
        <Card className='mb-4 p-2'>
            <CardHeader>
                <CardTitle># {order + 1} Created by {owner && sliceOwner(owner)}</CardTitle>
                <CardDescription>AR ID: <span className="underline text-blue-400 cursor-pointer" onClick={() => {
                    window.location.href = `https://devnet.irys.xyz/${id}`;
                }}>{sliceArTxId(id)}</span></CardDescription>
            </CardHeader>
            <CardContent>
                <div className={`my-2 overflow-hidden relative ${isExpanded ? 'max-h-full' : 'max-h-48'} w-96`}>
                    {content}
                </div>
                <Button
                    onClick={toggleContent}
                    variant="outline"
                    className='w-full'
                >
                    {/* Button text based on isExpanded state */}
                    {isExpanded ? 'View less' : 'View more'}
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
                    <TradeModal chapterId={order} context="Buy" price={
                        {
                            eth: filePriceETH,
                            usd: filePriceUSD
                        }
                    } isBuy />
                    <TradeModal chapterId={order} context="Sell" price={
                        {
                            eth: filePriceETH,
                            usd: filePriceUSD
                        }
                    } isBuy={false} />
                </div>
            </CardFooter>
        </Card >
    );
};
