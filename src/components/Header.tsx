import Link from 'next/link'
import React from 'react'
import WalletOptions from './WalletOption'

export const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-5 bg-black text-white'>
                <h1 className='text-2xl font-bold'>Creader</h1>
                <nav>
                    <ul className='flex space-x-5'>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">Blog</Link></li>
                    </ul>
                    <WalletOptions />
                </nav>
            </div>
        </header>
    )
}
