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
import { getBuyPrice } from '@/utils/BodhiContract';
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';
import { TradeModalBuy } from '@/components/Modal/PurchaseModal/TradeModalBuy';
import { TradeModalSell } from '@/components/Modal/PurchaseModal/TradeModalSell';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { RemixModal } from '@/components/Modal/DerivetiveModal/RemixModal';

interface BodhiCardProps {
    order: number;
    id: string;
    chapterId: bigint
    owner: `0x${string}` | undefined;
    content: string;
    supply: bigint | undefined;
    onPriceUpdate: (owner: `0x${string}` | undefined, eth: number, usd: number) => void;
}



export const BodhiCard = ({ order, owner, id, chapterId, content, supply, onPriceUpdate }: BodhiCardProps) => {
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
        const getPriceFeedETH = await getBuyPrice(chapterId, 1);
        const priceEth = newPrice;
        const priceUsd = (getPriceFeedETH * priceEth).toFixed(2);
        onPriceUpdate(owner, Number(getPriceFeedETH), Number(priceUsd));
        return { eth: getPriceFeedETH.toString(), usd: priceUsd };
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
                    <MarkdownRenderer content={content} />
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
            <CardFooter className='flex flex-col border-t-2 py-3 px-4'>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <div className='text-lg'>
                            ${filePriceUSD}
                        </div>
                        <div className='text-sm text-gray-400'>
                            {filePriceETH} ETH / Share
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <TradeModalBuy
                            chapterId={chapterId}
                            price={{
                                eth: filePriceETH,
                                usd: newPrice
                            }}
                        />
                        <TradeModalSell
                            chapterId={chapterId}
                            price={{
                                eth: filePriceETH,
                                usd: newPrice
                            }}
                        />
                    </div>
                </div>
                <div className=' mt-2 w-full'>
                    <RemixModal assetsId={chapterId} ipId={owner} />
                </div>
            </CardFooter>
        </Card >
    );
};
