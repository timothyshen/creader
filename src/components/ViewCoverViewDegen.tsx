"use client"
import { useEffect, useState } from 'react';
import { CopyrightCardDegen } from '@/components/Card/CopyrightCardDegen';
import { getAssetsById } from '@/lib/BookShareContract';
import { useAccount } from 'wagmi';
import { BodhiCardView } from '@/components/BodhiCardView';




const ViewCoverViewDegen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any>([]);
    const [isMintedBodhi, setIsMintedBodhi] = useState<boolean>(false)

    const account = useAccount();


    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                // const book = await getAssetsById(BigInt(0));
                const work = {
                    id: 0,
                    owner: '0xD74554760Adc11bB290E28BA7fc07C33923693ef',
                    description: 'test',
                    title: 'test',
                    nftAccount: '0xD74554760Adc11bB290E28BA7fc07C33923693ef'
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
            ) : (
                // Notice the return statement here and the key prop
                <>
                    <CopyrightCardDegen
                        key={works.id} // Assuming `work.id` is unique
                        id={Number(works.id)}
                        address={works.owner}
                        owner={account.address == works.owner}
                        content={works.description}
                        title={works.title}
                        coverAcc={works.nftAccount}
                        setIsMintedBodhi={setIsMintedBodhi}
                    />

                </>
            )}
        </>
    );
};

export default ViewCoverViewDegen;
