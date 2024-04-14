'use client'
import { useAccount, useDisconnect, useBalance } from 'wagmi'
import { Button } from '@/components/ui/button'
import { sliceAddress } from '@/lib/supportFunction'
import { CreateCopyright } from '@/components/Modal/CreateCopyright'
import { useRouter } from 'next/navigation'
import { NetworkState } from "./NetworkState";

export function AccountDisplayHeader() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data, isError, isLoading } = useBalance({
        address: address,
    })

    const router = useRouter()

    const handleClick = () => {
        router.push(`/user/${address}`)
    }

    return (
        <div className='flex items-center gap-3'>
            <NetworkState />
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <CreateCopyright />
            {address &&
                <div className='w-max py-2 px-4 rounded-md bg-primary text-primary-foreground hover:cursor-pointer hover:bg-primary/90' onClick={handleClick}>
                    {sliceAddress(address)}
                </div>
            }
            <Button onClick={() => disconnect()}>Disconnect</Button>
        </div>
    )
}