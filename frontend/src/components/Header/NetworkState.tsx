import React from 'react'
import { ConnectWalletClient } from '@/provider/viemConfig'
import { getTargetNetwork } from '@/utils/network'

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
    const walletClient = ConnectWalletClient();
    const currentChain = getTargetNetwork();
    const conectedId = walletClient.getChainId();
    console.log('currentChain', conectedId);


    return (
        <Select>
            <SelectTrigger className="w-max">
                <SelectValue placeholder={currentChain?.name || 'Loading...'} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem
                        className='w-max'
                        key={currentChain.id}
                        value={currentChain.name}
                    >
                        {currentChain.name}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
