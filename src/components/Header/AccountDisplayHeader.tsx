'use client'
import { useAccount, useDisconnect, useBalance } from 'wagmi'
import { Button } from '@/components/ui/button'
import { sliceAddress } from '@/lib/supportFunction'

export function AccountDisplayHeader() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
        address: address,
    })

    return (
        <div className='flex items-center gap-3'>
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <Button>Create +</Button>
            {address &&
                <div className='w-max'>
                    {sliceAddress(address)}
                </div>
            }
            <Button onClick={() => disconnect()}>Disconnect</Button>
        </div>
    )
}