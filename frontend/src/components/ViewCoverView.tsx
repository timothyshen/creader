import { useEffect, useState } from 'react';
import { getCover } from '@/utils/CopyrightContract';
import { CopyrightCard } from './Card/CopyrightCard';
import { useAccount } from 'wagmi';
import { BodhiCardView } from '@/components/BodhiCardView';
import { PriceData } from '@/types/steptypes';
import { useRouter } from 'next/navigation';



const ViewCoverView = ({ id }: { id: string | undefined }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any>();
    const [isMintedBodhi, setIsMintedBodhi] = useState<boolean>(false)
    const [prices, setPrices] = useState<PriceData>();

    const account = useAccount();

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
                    eth: (Number(existing.eth) + Number(ethPrice)),
                    usd: (Number(existing.usd) + Number(usdPrice)),
                },
            };
        });
    };

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                // console.log('id', id)
                const work = await getCover(Number(id));
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
            <p className='my-2 py-2 text-lg font-bold'>Book: </p >
            {works && (
                // Notice the return statement here and the key prop
                <>
                    <CopyrightCard
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
                    <BodhiCardView nftAccount={works.nftAccount as `0x${string}`} onPriceUpdate={handlePriceUpdate} isMintedBodhi={isMintedBodhi} currentUser={account.address} />
                </>
            )}

            {loading && <p>Loading...</p>}
        </>
    );
};

export default ViewCoverView;
