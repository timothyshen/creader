import React from 'react'
import { Button } from '@/components/ui/button';
import { useBodhiBuy } from '@/hooks/Bodhi/useBodhiBuy';

type BuyButtonProps = {
    id: number,
    amount: number,
    ethPrice: string,
}

export const BuyButton = ({ id, amount, ethPrice }: BuyButtonProps) => {

    const {
        bodhiBuy,
        isPending,
        isConfirming,
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
            {error && <p>{error.message}</p>}
        </>
    )
}