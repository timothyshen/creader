import React from 'react'
import { Button } from '@/components/ui/button';
import { useMintLicenseToken } from '@/hooks/Copyright/useMintLicenseToken';

type RemixButtonProp = {
    id: bigint,
    amount: number,
    ethPrice: string,
}

export const RemixButton = () => {

    const {
        mintLicenseToken,
        isPending,
        isConfirming,
        isConfirmed,
        error } = useMintLicenseToken();


    return (
        <>
            <Button
                className='w-full'
            >
                Remix
            </Button>
        </>
    )
}