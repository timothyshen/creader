'use client'
import { useAccount, useDisconnect, useBalance } from 'wagmi'
import { Button } from './ui/button'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
        address: address,
    })

    return (
        <div className='mb-4'>
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            {address && <div className='mb-2'>{address}</div>}
            <div className='mb-2'>Balance: {data?.formatted} {data?.symbol}</div>
            <Button onClick={() => disconnect()}>Disconnect</Button>
        </div>
    )
}