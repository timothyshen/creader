import Link from 'next/link'
import React from 'react'
import WalletConnectComponentHeader from '@/components/Header/WalletConnectHeader'

export const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white'>
                <div className='flex items-center gap-4'>
                    <h1 className='text-3xl font-bold tracking-tighter'>Creader</h1>
                    <ul className='flex items-baseline space-x-4 h-max align-text-bottom'>
                        <li>
                            <Link href="/" className='hover:text-gray-200 transition duration-150 ease-in-out'>Home</Link>
                        </li>
                        <li>
                            <Link href="/cover" className='hover:text-gray-200 transition duration-150 ease-in-out'>Blog</Link>
                        </li>
                    </ul>
                </div>
                <WalletConnectComponentHeader />
            </nav>
        </header>
    )
}
