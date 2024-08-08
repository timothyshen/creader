import { ListCoverView } from '@/components/ListCoverView'


export default function Home() {
    return (
        <div>
            <div className="flex flex-col items-center justify-between my-10">
                <h1>Creader</h1>
                <p>This is how to use this website</p>
                <ol>
                    <li>Create an account</li>
                    <li>Create a Cover vis &quot;Create +&quot;</li>
                    <li>Add books to the list</li>
                    <li>Start reading</li>
                </ol>
            </div>
            <main className="flex min-h-screen flex-col items-center justify-between p-20 overflow-auto">



                <div>
                    <ListCoverView />
                </div>

            </main>
        </div>

    )
}
