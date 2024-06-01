'use client'
import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SellButton } from '@/components/Modal/PurchaseModal/SellButton'
import { getSellPrice, getSellPriceAfterFee, getBalanceOf } from '@/utils/BodhiContract'
import { useAccount } from 'wagmi'

type TradeModalProps = {
  chapterId: bigint;
  price: { eth: string | undefined, usd: number };
}

type pricing = {
  chapterPriceEth: number
  chapterPriceAfterFeeETH: number
  chapterPriceUsd: number
  chapterPriceAfterFeeUsd: number
  amountHolding: number
}

export const TradeModalSell = ({
  chapterId,
  price,
}: TradeModalProps) => {
  const [chapterPrice, setchapterPrice] = useState<pricing>({
    chapterPriceEth: 0,
    chapterPriceAfterFeeETH: 0,
    chapterPriceUsd: 0,
    chapterPriceAfterFeeUsd: 0,
    amountHolding: 0
  })
  const [amount, setAmount] = useState<number>(0)
  const { address } = useAccount()

  const choise = [
    { label: '0.01 Share', value: 0.01 },
    { label: '0.1 Share', value: 0.1 },
    { label: '1 Share', value: 1 },
    { label: '10 Share', value: 10 },
    { label: '20 Share', value: 20 },
    { label: '100 Share', value: 100 },
  ]

  useEffect(() => {
    async function fetchData() {
      if (address === undefined) return null;
      const holding = await getBalanceOf(address, chapterId);
      setchapterPrice({
        ...chapterPrice,
        amountHolding: holding
      })
    }
    fetchData();
  }, [address, chapterId]);

  //TODO: it is not static it is a bonding curve lol
  const getPrice = async (amount: number) => {

    if (address === undefined) return null
    setAmount(amount)
    console.log("chapter", chapterId)
    const buyPrice = await getSellPrice(chapterId, amount)
    const buyPriceUsd = buyPrice * price.usd
    const buyPriceAfterFee = await getSellPriceAfterFee(chapterId, amount)
    const buyPriceAfterFeeUsd = Number((buyPriceAfterFee * price.usd).toFixed(3))
    setchapterPrice({
      ...chapterPrice,
      chapterPriceEth: buyPrice,
      chapterPriceAfterFeeETH: buyPriceAfterFee,
      chapterPriceUsd: buyPriceUsd,
      chapterPriceAfterFeeUsd: buyPriceAfterFeeUsd,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-lg text-white'>
          Sell
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Trade</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>Select how much you want to Sell</p>
        </DialogDescription>
        <div className='flex flex-col space-y-2 border-b-2 pb-4'>
          {choise.filter(item => Number(price.eth) < 0.01 ? item.value >= 1 : item.value <= 1).map((item, index) => (
            <Button key={index} onClick={() => getPrice(item.value)} disabled={item.value > chapterPrice.amountHolding} className=' text-white p-2 rounded-md'>
              {item.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 w-full gap-4 p-4">
          <p className="font-bold text-lg text-gray-800">Checkout</p>
          <div className="space-y-2">
            <p className="text-gray-700">Amount: <span className="font-semibold">{amount}</span></p>
            <p className="text-gray-700">Current Holding: <span className="font-semibold">{chapterPrice.amountHolding}</span></p>
            <p className="text-gray-700">Prices in ETH: <span className="font-semibold">{chapterPrice.chapterPriceAfterFeeETH}</span></p>
            <p className="text-gray-700">Prices in USD: <span className="font-semibold">{chapterPrice.chapterPriceAfterFeeUsd}</span></p>
          </div>
        </div>
        {chapterPrice && (
          <SellButton id={chapterId} amount={amount} />
        )}
      </DialogContent>
    </Dialog>
  )
}
