import React from 'react'
import { Button } from '@/components/ui/button';
import { useBodhiBuy } from '@/hooks/Bodhi/useBodhiBuy';

export const BuyButton = () => {

    const {
        bodhiBuy,
        isPending,
        isConfirming,
        isConfirmed,
        error } = useBodhiBuy();

    
    //TODO: add model for buy
    const handleBuy = () => {
        bodhiBuy(0, 1)
    }

    return (
        <>
            <Button
                className='bg-blue-500 text-white p-2 rounded-md'
                onClick={handleBuy}
                disabled={isPending || isConfirming}
            >
                Buy
            </Button>
            {error && <p>{error.message}</p>}
        </>


    )
}
