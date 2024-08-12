'use client'
import React, { useEffect, useState } from 'react';
import { getAllCopyright } from '@/utils/CopyrightContract';
import { CopyrightCard } from './Card/CopyrightCard';
import { CreateCopyright } from './Modal/CreateCopyright';
import { useAccount } from 'wagmi';
import { BodhiCardView } from '@/components/BodhiCardView';
import { PriceData, } from '@/types/steptypes';

interface AuthorCoverViewProps {
    addr: `0x${string}`;
};


interface Work {
    id: bigint;
    owner: `0x${string}`;
    description: string;
    title: string;
    nftAccount: `0x${string}`;
    timestamp: bigint;
}

const AuthorCoverView: React.FC<AuthorCoverViewProps> = ({ addr }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<Work[]>([]);
    const [isMintedCopyright, setIsMintedCopyright] = useState<boolean>(false)
    const [isMintedBodhi, setIsMintedBodhi] = useState<boolean>(false)
    const [prices, setPrices] = useState<PriceData>();

    const { address } = useAccount();

    const handlePriceUpdate = (coverAcc: any, ethPrice: any, usdPrice: any) => {
        setPrices(prevPrices => {
            if (!prevPrices) {
                return {
                    [coverAcc]: {
                        eth: ethPrice,
                        usd: usdPrice,
                    },
                };
            }
            const existing = prevPrices[coverAcc] || { eth: 0, usd: 0 };
            return {
                ...prevPrices,
                [coverAcc]: {
                    eth: existing.eth + ethPrice,
                    usd: existing.usd + usdPrice,
                },
            };
        });
    };

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const work = await getAllCopyright();
                // console.log('work', work[0].id)
                setWorks([...work]);
            } catch (error) {
                console.error("Failed to fetch works:", error);
            } finally {
                setLoading(false); // Correctly set loading to false after the operation

            }
        };
        init();
    }, [isMintedCopyright]);


    // TODO: fix onPriceUpdate
    return (
        <div className='flex flex-col w-[450px] space-y-5'>

            <p className='my-2 py-2 text-lg font-bold'>Book: </p>

            {works.length !== 0 && <CreateCopyright setIsMinted={setIsMintedCopyright} />}

            {loading ? (
                <p className='text-xl font-bold mx-auto mt-20'>Loading...</p> // Display loading state
            ) : works.length === 0 ? (
                <>
                    <p className='text-xl font-bold mx-auto mt-20 mb-20'>
                        You dont have any book yet
                    </p>
                    <CreateCopyright setIsMinted={setIsMintedCopyright} />
                </>
            ) : (works.filter(item => item.owner == address).map((work: any, index: number) => (
                // Notice the return statement here and the key prop
                <React.Fragment key={work.id}>

                    <CopyrightCard
                        key={work.id} // Assuming `work.id` is unique
                        id={Number(work.id)}
                        address={(work.owner).slice(0, 6) + '...' + (work.owner).slice(-4)}
                        owner={address == work.owner}
                        content={work.description}
                        title={work.title}
                        coverAcc={work.nftAccount}
                        setIsMintedBodhi={setIsMintedBodhi}
                        aggregatePrice={prices}
                    />
                    {address && (
                        <BodhiCardView
                            nftAccount={work.nftAccount as `0x${string}`}
                            onPriceUpdate={handlePriceUpdate}
                            isMintedBodhi={isMintedBodhi}
                            currentUser={address as `0x${string}`} // Ensure `address` is defined
                        />
                    )}
                </React.Fragment>
            )))}
        </div>
    );
};

export default AuthorCoverView;
