'use client'
import { useState } from 'react'
import { useAccount, useBalance, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { sliceAddress } from '@/utils/supportFunction'
import { CreateCopyright } from '@/components/Modal/CreateCopyright'
import { useRouter } from 'next/navigation'
import { NetworkState } from '@/components/Header/NetworkState'

export function AccountDisplayHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
        address: address,
    })

    const router = useRouter()

    const handleClick = () => {
        router.push(`/user/${address}`)
    }
    const handleDashboardClick = () => {
        router.push('/author')
    }

    return (
        <div className='flex items-center gap-3'>
            {/* <NetworkState /> */}
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <CreateCopyright />
            {address && (
                <div className="relative">
                    <button
                        className="w-max py-2 px-4 rounded-md bg-primary text-primary-foreground hover:cursor-pointer hover:bg-primary/90"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {sliceAddress(address)}
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a
                                    href="#"
                                    className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={handleClick}
                                >
                                    View Profile
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={handleDashboardClick}
                                >
                                    View Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                    onClick={() => disconnect()}
                                >
                                    Disconnect
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}