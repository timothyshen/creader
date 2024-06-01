import { ListCoverView } from '@/components/ListCoverView'


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-20 overflow-auto">
            <ListCoverView />
        </main>
    )
}
