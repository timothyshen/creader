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
import { CREATER_FEES } from '@/constant/contract'
import { getBuyPrice, getBuyPriceAfterFee } from '@/lib/BodhiContract'

type TradeModalProps = {
  context: string;
  chapterId: bigint;
  price: { eth: string | undefined, usd: number };
  isBuy: boolean;
}

type pricing = {
  chapterPriceEth: number
  chapterPriceAfterFeeETH: number
  chapterPriceUsd: number
  chapterPriceAfterFeeUsd: number
  creatorFee: number
}

export const TradeModal = ({
  context,
  chapterId,
  price,
  isBuy
}: TradeModalProps) => {
  const [chapterPrice, setchapterPrice] = useState<pricing>({})
  const [amount, setAmount] = useState<number>(0)


  const choise = [
    { label: '0.01 Share', value: 0.01 },
    { label: '0.1 Share', value: 0.1 },
    { label: '1 Share', value: 1 },
    { label: '10 Share', value: 10 },
    { label: '20 Share', value: 20 },
    { label: '100 Share', value: 100 },
  ]

  //TODO: it is not static it is a bonding curve lol
  const getPrice = async (amount: number) => {

    setAmount(amount)
    console.log("chapter", chapterId)
    const buyPrice = await getBuyPrice(chapterId, amount)
    const buyPriceUsd = buyPrice * price.usd
    const buyPriceAfterFee = await getBuyPriceAfterFee(chapterId, amount)
    console.log('usd', price.usd)
    const buyPriceAfterFeeUsd = Number((buyPriceAfterFee * price.usd).toFixed(3))
    console.log('buyPrice', buyPrice)
    console.log('buyPriceAfterFee', buyPriceAfterFee)
    const creatorFee = Number((chapterPrice.chapterPriceAfterFeeETH - chapterPrice.chapterPriceEth).toFixed(7))
    setchapterPrice({
      chapterPriceEth: buyPrice,
      chapterPriceAfterFeeETH: buyPriceAfterFee,
      chapterPriceUsd: buyPriceUsd,
      chapterPriceAfterFeeUsd: buyPriceAfterFeeUsd,
      creatorFee: creatorFee
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
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
            <Button key={index} onClick={() => getPrice(item.value)} className=' text-white p-2 rounded-md'>
              {item.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 w-full gap-4 p-4">
          <p className="font-bold text-lg text-gray-800">Checkout</p>
          <div className="space-y-2">
            <p className="text-gray-700">Amount: <span className="font-semibold">{amount}</span></p>
            <p className="text-gray-700">Creator Fee: <span className="font-semibold">{chapterPrice.creatorFee}</span></p>
            <p className="text-gray-700">Prices in ETH: <span className="font-semibold">{chapterPrice.chapterPriceAfterFeeETH}</span></p>
            <p className="text-gray-700">Prices in USD: <span className="font-semibold">{chapterPrice.chapterPriceAfterFeeUsd}</span></p>
          </div>
        </div>
        {isBuy && chapterPrice ? (
          <BuyButton
            id={chapterId}
            amount={amount}
            ethPrice={chapterPrice.chapterPriceAfterFeeETH?.toString() || '0'}
          />
        ) : (
          <SellButton id={chapterId} amount={amount} />
        )}      </DialogContent>
    </Dialog>
  )
}
