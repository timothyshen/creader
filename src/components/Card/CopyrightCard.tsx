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
    setIsMintedBodhi: (isMintedBodhi: boolean) => void
}

export const CopyrightCard = ({
    id,
    address,
    owner,
    title,
    content,
    coverAcc,
    setIsMintedBodhi
}: CopyrightCardProps) => {

    const sliceAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    }


    return (
        <Card className='mb-2 px-2'>
            <CardHeader>
                <CardTitle>#{id.toString()} {title}</CardTitle>
                <CardDescription>
                    <p>Created by {sliceAddress(address)}</p>
                    <p>TBA by {sliceAddress(coverAcc)}</p>
                </CardDescription>

            </CardHeader>
            <CardContent>
                <div>
                    {content}
                </div>
            </CardContent>
            <CardFooter className='justify-center'>
                {owner && (
                    <AddNew nftAcc={coverAcc} setIsMintedBodhi={setIsMintedBodhi} />
                )}
            </CardFooter>
        </Card>
    )
}
