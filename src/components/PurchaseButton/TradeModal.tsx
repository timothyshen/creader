'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { BuyButton } from '@/components/PurchaseButton/BuyButton'
import { SellButton } from '@/components/PurchaseButton/SellButton'
import { useParams } from 'next/navigation'

type TradeModalProps = {
  context: string;
  chapterId: number;
  price: { eth: string | undefined, usd: string | undefined };
  isBuy: boolean;
}

export const TradeModal = ({
  context,
  chapterId,
  price,
  isBuy
}: TradeModalProps) => {
  const [ethPrice, setEthPrice] = useState<string | undefined>("0")
  const [usdPrice, setUsdPrice] = useState<string | undefined>("0")
  const [amount, setAmount] = useState<number>(0)


  const choise = [
    { label: '0.01 Share', value: 0.01 },
    { label: '0.1 Share', value: 0.1 },
    { label: '1 Share', value: 1 },
    { label: '10 Share', value: 10 },
    { label: '100 Share', value: 20 },
    { label: '1000 Share', value: 100 },
  ]

  const onClick = (amount: number) => {
    setAmount(amount)
    setEthPrice((amount * Number(price.eth)).toFixed(5))
    setUsdPrice((amount * Number(price.usd)).toFixed(2))
  }


  return (
    <Dialog>
      <DialogTrigger>
        <Button className='text-lg text-white'>
          {context}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Trade</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>Select how much you want to {context}</p>
        </DialogDescription>
        <div className='flex flex-col space-y-2 border-b-2 pb-4'>
          {choise.filter(item => Number(price.eth) < 0.01 ? item.value >= 1 : item.value <= 1).map((item, index) => (
            <Button key={index} onClick={() => onClick(item.value)} className=' text-white p-2 rounded-md'>
              {item.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 w-full gap-4 p-4">
          <p className="font-bold text-lg text-gray-800">Checkout</p>
          <div className="space-y-2">
            <p className="text-gray-700">Amount: <span className="font-semibold">{amount}</span></p>
            <p className="text-gray-700">Prices in ETH: <span className="font-semibold">{ethPrice}</span></p>
            <p className="text-gray-700">Prices in USD: <span className="font-semibold">{usdPrice}</span></p>
          </div>
        </div>
        {isBuy ? <BuyButton id={chapterId} amount={amount} ethPrice={ethPrice} /> : <SellButton id={chapterId} amount={amount} />}
      </DialogContent>
    </Dialog>
  )
}
