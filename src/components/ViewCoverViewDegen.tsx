"use client"
import { useEffect, useState } from 'react';
import { CopyrightCardDegen } from '@/components/Card/CopyrightCardDegen';
import { getAssetsById } from '@/lib/BookShareContract';
import { useAccount } from 'wagmi';
import { BodhiCardView } from '@/components/BodhiCardView';
import { useRouter } from 'next/navigation';



const ViewCoverViewDegen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any>([]);
    const [isMintedBodhi, setIsMintedBodhi] = useState<boolean>(false)

    const account = useAccount();


    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const book = await getAssetsById(BigInt(0));
                const work = {
                    id: 0,
                    owner: '0x',
                    description: 'test',
                    title: 'test',
                    nftAccount: '0x'
                }
                // console.log('work', work)

                setWorks(work);
            } catch (error) {
                console.error("Failed to fetch works:", error);
            }
            setLoading(false); // Correctly set loading to false after the operation
        };
        init();
    }, []);


    return (
        <>
            {loading ? (
                <p className='text-xl text-center font-bold mx-auto mt-20'>Loading...</p> // Display loading state
            ) : works.length === 0 ? (
                <p className='text-xl w-full text-center font-bold mx-auto mt-20'>Book not found</p> // Show when no works found
            ) : (
                // Notice the return statement here and the key prop
                <>
                    <CopyrightCardDegen
                        key={works.id} // Assuming `work.id` is unique
                        id={Number(works.id)}
                        address={(works.owner).slice(0, 6) + '...' + (works.owner).slice(-4)}
                        owner={account.address == works.owner}
                        content={works.description}
                        title={works.title}
                        coverAcc={works.nftAccount}
                        setIsMintedBodhi={setIsMintedBodhi}
                        aggregatePrice={prices}
                    />
                    <BodhiCardView nftAccount={works.nftAccount as `0x${string}`} onPriceUpdate={handlePriceUpdate} isMintedBodhi={isMintedBodhi} />
                </>
            )}

            {loading && <p>Loading...</p>}
        </>
    );
};

export default ViewCoverViewDegen;
