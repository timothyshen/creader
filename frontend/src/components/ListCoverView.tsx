'use client'
import { useEffect, useState } from 'react';
import { getAllCopyright } from '@/utils/CopyrightContract';
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
import { PagenationComponent } from '@/components/Pagination';



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
                console.log('work', work[0].id)
                setWorks([...work]);
            } catch (error) {
                console.error("Failed to fetch works:", error);
            }
            setLoading(false); // Correctly set loading to false after the operation
        };
        init();
    }, []);

    // TODO: Add a search bar to filter the list of works

    return (
        <div className="flex justify-center">
            {/* <div className='mb-4'>
                <Search className=" absolute h-4 w-4 m-3 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8"
                />
            </div> */}
            <Tabs defaultValue="listAll">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="listAll">
                        List all
                    </TabsTrigger>
                    <TabsTrigger value="recent">Most Recent</TabsTrigger>
                </TabsList>
                <TabsContent value="listAll">
                    <div className=" flex flex-col w-[450px] mx-auto">
                        {loading ? (
                            <p className='text-xl font-bold mx-auto mt-20'>Loading...</p> // Display loading state
                        ) : works.length === 0 ? (
                            <p className='text-xl font-bold mx-auto mt-20'>Book not found</p> // Show when no works found
                        ) : (
                            works
                                .sort((a, b) => Number(a.id) - Number(b.id))
                                .map((work, index) => (
                                    // Wrap each pair in a div to use the key prop
                                    <div key={work.id}>
                                        <CopyrightCard
                                            id={Number(work.id)}
                                            address={`${work.owner.slice(0, 6)}...${work.owner.slice(-4)}`}
                                            owner={account.address === work.owner}
                                            content={work.description}
                                            title={work.title}
                                            coverAcc={work.nftAccount}
                                        />
                                        <Button className='mb-4 w-full' onClick={() => handleToBookDetail(work.id)}>Read More</Button>
                                    </div>
                                ))
                        )}
                    </div>
                    <PagenationComponent />
                </TabsContent>
                <TabsContent value="recent">
                    <div className="flex flex-col w-[450px] mx-auto">
                        {loading ? (
                            <p className='text-xl font-bold mx-auto mt-20'>Loading...</p> // Display loading state
                        ) : works.length === 0 ? (
                            <p className='text-xl font-bold mx-auto mt-20'>Book not found</p> // Show when no works found
                        ) : (
                            works
                                .sort((a, b) => Number(b.id) - Number(a.id))
                                .map((work, index) => (
                                    // Wrap each pair in a div to use the key prop
                                    <div key={work.id}>
                                        <CopyrightCard
                                            id={Number(work.id)}
                                            address={`${work.owner.slice(0, 6)}...${work.owner.slice(-4)}`}
                                            owner={account.address === work.owner}
                                            content={work.description}
                                            title={work.title}
                                            coverAcc={work.nftAccount}
                                        />
                                        <Button className='mb-4 w-full' onClick={() => handleToBookDetail(work.id)}>Read More</Button>
                                    </div>
                                ))
                        )}
                    </div>
                    <PagenationComponent />
                </TabsContent>
            </Tabs>
        </div>
    )
}
