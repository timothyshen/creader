import React from 'react'
import AuthorCoverView from '@/components/AuthorCoverView';


export default function Page({ params }: { params: { addr: `0x${string}` } }) {

    const { addr } = params

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <AuthorCoverView addr={addr} />
        </main>
    )
}
