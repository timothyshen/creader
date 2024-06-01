export type StepType = 'select' | 'upload'

export interface StepProps {
    setStep: (step: StepType) => void
    nftAcc?: `0x${string}`
    setOpen?: (open: boolean) => void
    setIsMintedBodhi: (isMintedBodhi: boolean) => void
}

export interface PriceUpdate {
    eth: number
    usd: number
}

export interface BodhiCardProps {
    order: number
    id: string
    owner: `0x${string}` | undefined
    content: string | undefined
    supply: bigint | undefined
    onPriceUpdate: (coverAcc: string, ethPrice: number, usdPrice: number) => void
}

export interface BodhiCardViewState {
    nftAccount: `0x${string}`
    onPriceUpdate: (coverAcc: string, ethPrice: number, usdPrice: number) => void
}

export interface PriceData {
    [key: string]: PriceUpdate
}
