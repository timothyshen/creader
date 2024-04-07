export * from './typechain'
import * as _typechain from './typechain'

export const contracts = {
    AccountERC6551: _typechain.AccountERC6551__factory.name,
    CopyrightNFT: _typechain.CopyrightNFT__factory.name,
    CreaderToken: _typechain.CreaderToken__factory.name,
    ERC6551Registry: _typechain.ERC6551Registry__factory.name,
}

export type Contracts = keyof typeof contracts

type optionalContracts = ''

export type requiredContracts = Exclude<Contracts, optionalContracts>

type PartialRecord<K extends Contracts, T> = {
    [P in K]?: T
}

type AddressRecord = PartialRecord<Contracts, string>

export const addresses: Record<number, AddressRecord> = {
    [31337]: {
        [contracts.AccountERC6551]: '',
        [contracts.CreaderToken]: '',
        [contracts.ERC6551Registry]: '',
        [contracts.CopyrightNFT]: '',
    },
}

export const getAddress = (contract: Contracts, networkId: number): string | void => {
    const address = addresses[networkId][contract]
    if (!address) {
        throw new Error(`No address for ${contract} on network ${networkId}`)
    }
    return address
}
