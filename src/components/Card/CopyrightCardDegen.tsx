'use client'
import React, { useState, useEffect, useCallback } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import AddNew from '@/components/Modal/ChapterModal/AddNew'
import { getBalanceOf } from '@/lib/BookShareContract'
import { getBuyPrice } from '@/lib/BodhiContract';
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';
import { TradeModalBuy } from '@/components/PurchaseButton/TradeModalBuy';
import { TradeModalSell } from '@/components/PurchaseButton/TradeModalSell';

interface CopyrightCardProps {
    id: Number,
    address: string,
    owner: boolean,
    title: string,
    content: string,
    coverAcc: `0x${string}`
    setIsMintedBodhi?: (isMintedBodhi: boolean) => void
    aggregatePrice?: any
}

export const CopyrightCardDegen = ({
    id,
    address,
    owner,
    title,
    content,
    coverAcc,
    setIsMintedBodhi,
    aggregatePrice
}: CopyrightCardProps) => {
    const [filePriceETH, setFilePriceETH] = useState<string>();
    const [filePriceUSD, setFilePriceUSD] = useState<string>();
    const [userHoldings, setUserHoldings] = useState<number>(0)

    const newPrice = useNativeCurrencyPrice();

    const fetchPrices = async (supply: bigint, newPrice: number) => {
        const getPriceFeedETH = await getBuyPrice(BigInt(0), 1);
        const priceEth = newPrice;
        const priceUsd = (getPriceFeedETH * priceEth).toFixed(2);
        return { eth: getPriceFeedETH.toString(), usd: priceUsd };
    };



    useEffect(() => {
        async function fetchData() {
            if (address === undefined) return null;
            const holding = await getBalanceOf(address as `0x${string}`, 0);
            setUserHoldings(holding)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const supply = BigInt(10);
        if (supply) {
            fetchPrices(supply, newPrice).then(({ eth, usd }: { eth: string, usd: string }) => {
                setFilePriceETH(eth);
                setFilePriceUSD(usd);
            });
        }
    }, [newPrice]);

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    const sliceArTxId = useCallback((arTxId: string) => (
        `${arTxId.slice(0, 6)}...${arTxId.slice(-4)}`
    ), []);


    return (
        <Card className='mb-2 px-2 w-full'>
            <CardHeader className='flex flex-row justify-between'>

                <div>
                    <CardTitle>#{id.toString()} {title}</CardTitle>
                    <CardDescription>
                        <p>
                            AR ID: <span className="underline text-blue-400 cursor-pointer" onClick={() => {
                                window.location.href = `https://devnet.irys.xyz/${id}`;
                            }}>xxxx</span>
                        </p>

                        Created by {sliceAddress(address)}
                    </CardDescription>
                </div>
                <div className='pt-[10px] text-left'>
                    {aggregatePrice && (
                        <div>
                            <div>{aggregatePrice[coverAcc]?.eth.toFixed(5)} ETH</div>
                            <div>${aggregatePrice[coverAcc]?.usd.toFixed(2)}</div>
                        </div>
                    )}
                </div>

            </CardHeader>
            <CardContent>

                <p>{content}</p>

            </CardContent>
            <CardFooter className='justify-cente flex flex-col'>
                <div className='flex flex-row justify-between border-t-2 py-3 px-4 w-full'>
                    <div>
                        <div className='text-lg'>
                            {/* ${filePriceUSD} */}
                            $1000
                        </div>
                        <div className='text-sm text-gray-400'>
                            0.000002 ETH / Share
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <TradeModalBuy chapterId={BigInt(0)} price={
                            {
                                eth: filePriceETH,
                                usd: newPrice
                            }
                        } />
                        <TradeModalSell chapterId={BigInt(0)} price={
                            {
                                eth: filePriceETH,
                                usd: newPrice
                            }
                        } />
                    </div>
                </div>
                {userHoldings >= 1 ? (
                    <p>ddd</p>
                ) : (
                    <p className='text-red-500'>You need at least 1 share to create a new chapter</p>
                )}
            </CardFooter>
        </Card >
    )
}
