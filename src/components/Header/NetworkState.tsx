import React from 'react'
import { config } from '@/provider/config'
import { useGlobalState } from '@/stores/useGlobalState'
import { Chain } from 'viem'
import { ConnectWalletClient } from '@/provider/config'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const NetworkState = () => {
    const { chains } = config
    const walletClient = ConnectWalletClient();

    const { currentChain } = useGlobalState()

    const onSelect = (chain: Chain) => {
        console.log('chain', chain);
        walletClient.switchChain(chain)
    }

    return (
        <Select onValueChange={(value: string | Chain) => onSelect(value as Chain)}>
            <SelectTrigger className="w-max">
                <SelectValue placeholder={currentChain.name} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {chains.map((chain) => (
                        <SelectItem
                            className='w-max'
                            key={chain.id}
                            value={chain.name}
                        >
                            {chain.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
