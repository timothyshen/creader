import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import AddNew from '../Modal/ChapterModal/AddNew'

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
    console.log('aggregatePrice', aggregatePrice)
    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    return (
        <Card className='mb-2 px-2'>
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
                            <div>{aggregatePrice[coverAcc]?.usd.toFixed(2)} USD</div>
                        </div>
                    )}
                </div>

            </CardHeader>
            {/* <CardContent>

                {content}

            </CardContent> */}
            <CardFooter className='justify-center'>
                {owner && setIsMintedBodhi && (
                    <AddNew nftAcc={coverAcc} setIsMintedBodhi={setIsMintedBodhi} />
                )}
            </CardFooter>
        </Card>
    )
}
