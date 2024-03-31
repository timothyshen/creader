'use client'
import { useEffect, useState } from 'react';
import { getAllCopyright } from '@/lib/CopyrightContract';
import { CopyrightCard } from '@/components/Card/CopyrightCard';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'


export const ListCoverView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any[]>([]);
    const account = useAccount();
    const router = useRouter();


    const handleToBookDetail = (id: string) => {
        console.log('to book detail')
        router.push(`/cover/${id}`)
    }


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
        <div>
            <div className='mb-4'>
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8"
                />
            </div>
            <Tabs defaultValue="listAll">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="listAll">
                        List all
                    </TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
                <TabsContent value="listAll">
                    <div className="max-h-52 flex flex-col w-[450px]">
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
                                <Button className='my-2' onClick={() => handleToBookDetail(work.id)}>Read More</Button>
                            </>
                        ))}

                        {loading && <p>Loading...</p>} {/* Display loading state */}
                    </div>
                </TabsContent>
                <TabsContent value="recent">
                    <div className="max-h-52 flex flex-col w-[450px]">
                        Change your password here.
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
