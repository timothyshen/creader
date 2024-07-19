import React, { useEffect, useState } from 'react'
import { getAssetIdsByAddress } from '@/utils/BodhiContract'
import { Asset } from '@/types/contentTypes'
import { fetchAndDecodeAssets } from '@/contract/assetService'
import { Divider } from '@/components/ui/Divider'
import { BodhiCard } from '@/components/Card/BodhiCard'

type BodhiCardViewProps = {
    nftAccount: `0x${string}`
    isMintedBodhi: boolean
    onPriceUpdate: (owner: `0x${string}` | undefined, eth: number, usd: number) => void
    currentUser: `0x${string}`
}

export const BodhiCardView = ({ nftAccount, isMintedBodhi, onPriceUpdate, currentUser }: BodhiCardViewProps) => {

    const [chapter, setChapter] = useState<Asset[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const assets = await getAssetIdsByAddress(nftAccount);
                const decodedAssets = await fetchAndDecodeAssets(Array.from(assets));
                // console.log('decodedAssets', decodedAssets)
                setChapter([...decodedAssets])
            } catch (error) {
                console.error("Failed to fetch assets:", error);
            }
            setLoading(false);
        }
        init();
    }, [nftAccount, isMintedBodhi]);

    return (
        <>
            <p className=' text-lg font-bold py-2'>Chapter List</p>
            {chapter && chapter.map((chapter: Asset, index: number) => (
                <BodhiCard
                    key={index}
                    order={index}
                    owner={nftAccount}
                    chapterId={chapter.id}
                    id={chapter.arTxId}
                    content={chapter.content ?? ''}
                    supply={chapter.supply as bigint | undefined}
                    onPriceUpdate={onPriceUpdate}
                    currentUser={currentUser}
                />)
            )}
            <Divider />
            {loading && <p>Loading...</p>} {/* Display loading state */}
        </>

    )
}
