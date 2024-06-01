import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import WalletConnectComponentHeader from '@/components/Header/WalletConnectHeader'


export const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center p-6 bg-[#F5F5DC] text-black'>
                <div className='flex items-center gap-4'>
                    <Image alt="Creader logo" className="cursor-pointer" width={100} height={50} src="/creader_logo.svg" />
                    <ul className='flex items-baseline space-x-4 h-max align-text-bottom font-bold'>
                        <li>
                            <Link href="/" className='hover:text-gray-200 transition duration-150 ease-in-out'>Home</Link>
                        </li>
                        <li>
                            <Link href="https://github.com/timothyshen/bodhi-6551/issues" className='hover:text-gray-200 transition duration-150 ease-in-out'>Github</Link>
                        </li>
                    </ul>
                </div>
                <WalletConnectComponentHeader />
            </nav>
        </header>
    )
}
