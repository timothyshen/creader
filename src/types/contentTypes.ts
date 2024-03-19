export interface Work {
    id: string
    nftAccount: string
}

export interface Asset {
    id: bigint
    arTxId: string
    creator: `0x${string}`
    content?: string
    supply?: BigInt
}
