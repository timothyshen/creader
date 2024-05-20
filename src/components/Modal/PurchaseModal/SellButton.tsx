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
            <div className='mt-2'>
                {error && (
                    <div className='p-2 bg-red-100 border border-red-400 text-red-700 rounded-md max-w-md mx-auto overflow-hidden'>
                        <p>{error.message}</p>
                    </div>
                )}
                {isConfirming && <p>Confirming...</p>}
                {isConfirmed && <p>Confirmed!</p>}
            </div>
        </>

    )
}
