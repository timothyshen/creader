import React from 'react'
import { Button } from '@/components/ui/button';
import { useBodhiSell } from '@/hooks/Bodhi/useBodhiSell';

export const SellButton = () => {

    const {
        bodhiSell,
        isPending,
        isConfirming,
        isConfirmed,
        error } = useBodhiSell();


    //TODO: add model for sell

    const handleSell = () => {
        bodhiSell(0, 0.01)
    }

    return (
        <>
            <Button
                className='bg-blue-500 text-white p-2 rounded-md'
                onClick={handleSell}
                disabled={isPending || isConfirming}
            >
                Sell
            </Button>
            {error && <p>{error.message}</p>}
        </>

    )
}
