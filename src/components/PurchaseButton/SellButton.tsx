import React from 'react'
import { Button } from '@/components/ui/button';
import { useBodhiSell } from '@/hooks/Bodhi/useBodhiSell';

type SellButtonProp = {
    id: bigint,
    amount: number

}

export const SellButton = ({ id, amount }: SellButtonProp) => {

    const {
        bodhiSell,
        isPending,
        isConfirming,
        isConfirmed,
        error } = useBodhiSell();


    //TODO: add model for sell

    const handleSell = () => {
        bodhiSell(id, amount)
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
