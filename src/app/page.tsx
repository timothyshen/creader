// import { ListCoverView } from '@/components/ListCoverView'
import ViewCoverViewDegen from '@/components/ViewCoverViewDegen'


export default function Home() {
    return (
        <main className=" min-h-screen items-center p-20 overflow-auto">
            <div className=' text-center p-5 mb-2'>
                <h1 className='text-2xl font-bold'>The Book of Degen</h1>
                <p className='text-lg font-bold'>
                    The Book of Degen is a collection of all the NFTs that have been minted on the platform.
                    It is a place where you can view all the NFTs that have been minted and
                    explore the different types of NFTs that are available.
                </p>
            </div>
            <ViewCoverViewDegen />
        </main>
    )
}
