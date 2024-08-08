import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import AddNew from '@/components/Modal/ChapterModal/AddNew'
import { Button } from '@/components/ui/button'
import { RemixModal } from '../Modal/DerivetiveModal/RemixModal'

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
            <CardFooter className='justify-center flex flex-col gap-2'>
                {/* <TippingModal coverAcc={coverAcc} /> */}

                {/* <RemixModal assetsId={BigInt(0)} ipId={coverAcc} /> */}

                {owner && setIsMintedBodhi && (
                    <AddNew nftAcc={coverAcc} setIsMintedBodhi={setIsMintedBodhi} />
                )}
            </CardFooter>
        </Card>
    )
}
