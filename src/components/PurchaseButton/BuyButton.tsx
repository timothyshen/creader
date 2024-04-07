import React from 'react'
import { Button } from '@/components/ui/button';
import { useBodhiBuy } from '@/hooks/Bodhi/useBodhiBuy';

type BuyButtonProps = {
    id: bigint,
    amount: number,
    ethPrice: string,
}

export const BuyButton = ({ id, amount, ethPrice }: BuyButtonProps) => {

    const {
        bodhiBuy,
        isPending,
        isConfirming,
        isConfirmed,
        error } = useBodhiBuy();

    const handleBuy = () => {
        bodhiBuy(id, amount, ethPrice);
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