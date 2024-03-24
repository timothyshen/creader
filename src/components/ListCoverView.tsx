'use client'
import { useEffect, useState } from 'react';
import { getAllCopyright } from '@/lib/CopyrightContract';
import { CopyrightCard } from '@/components/Card/CopyrightCard';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';

export const ListCoverView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any[]>([]);
    const account = useAccount();


    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const work = await getAllCopyright();
                // console.log('work', work[0].id)
                setWorks([...work]);
            } catch (error) {
                console.error("Failed to fetch works:", error);
            }
            setLoading(false); // Correctly set loading to false after the operation
        };
        init();
    }, []);

    return (
        <div className="max-h-52 flex flex-col w-[450px]">
            <p className='my-2 p-2 text-lg font-bold w-full'> List all chapter</p>
            {works && works.map((work: any, index: number) => (
                // Notice the return statement here and the key prop
                <>
                    <CopyrightCard
                        key={work.id} // Assuming `work.id` is unique
                        id={Number(work.id)}
                        address={(work.owner).slice(0, 6) + '...' + (work.owner).slice(-4)}
                        owner={account.address == work.owner}
                        content={work.description}
                        title={work.title}
                        coverAcc={work.nftAccount}
                    />
                    <Button>Read More</Button>
                </>
            ))}

            {loading && <p>Loading...</p>} {/* Display loading state */}
        </div>
    )
}
