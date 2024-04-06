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
                disabled={isPending}
            >
                Buy
            </Button>
            {error && <p>{error.message}</p>}
            {isPending && <p>Confirming...</p>}
            {isConfirmed && <p>Confirmed!</p>}
        </>
    )
}