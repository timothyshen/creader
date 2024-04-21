'use client'
import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import AddNew from '@/components/Modal/ChapterModal/AddNew'
import TippingModal from '@/components/Tipping/TippingModal'
import { getBalanceOf } from '@/lib/BookShareContract'
import { use } from 'chai'
import { bigint } from 'zod'


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

export const CopyrightCard = ({
    id,
    address,
    owner,
    title,
    content,
    coverAcc,
    setIsMintedBodhi,
    aggregatePrice
}: CopyrightCardProps) => {

    const [userHoldings, setUserHoldings] = useState<number>(0)

    useEffect(() => {
        async function fetchData() {
            if (address === undefined) return null;
            const holding = await getBalanceOf(address as `0x${string}`, 0);
            setUserHoldings(holding)
        }
        fetchData()
    }, [])

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }



    return (
        <Card className='mb-2 px-2 w-full'>
            <CardHeader className='flex flex-row justify-between'>

                <div>
                    <CardTitle>#{id.toString()} {title}</CardTitle>
                    <CardDescription>
                        Created by {sliceAddress(address)} <br />
                        TBA by {sliceAddress(coverAcc)}
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
            <CardFooter className='justify-center'>
                {/* <TippingModal coverAcc={coverAcc} /> */}
                {userHoldings >= 1 ? (
                    <AddNew nftAcc={coverAcc} setIsMintedBodhi={setIsMintedBodhi} />
                ) : (
                    <p className='text-red-500'>You need at least 1 share to create a new chapter</p>
                
                )}
            </CardFooter>
        </Card>
    )
}
