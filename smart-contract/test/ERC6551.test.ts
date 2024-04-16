import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'
import chai from 'chai'

const { expect } = chai

describe('ERC6551Account', function () {
    let ERC6551Registry: Contract
    let ERC6551Account: Contract
    let CopyrightNFT: Contract

    let owner: any

    beforeEach(async function () {
        ;[ERC6551Account, ERC6551Registry, CopyrightNFT] = await Promise.all([
            (await ethers.getContractFactory('AccountERC6551')).deploy(),
            (await ethers.getContractFactory('ERC6551Registry')).deploy(),
            (await ethers.getContractFactory('MockERC721')).deploy(),
        ])

        owner = await ethers.getSigners().then(x => x[0])
        console.log('owner.address', owner.address)
    })

    it('creates and checks an account', async function () {
        const chainId = 1
        const salt = 123456
        const initData = '0x'

        // console.log('ERC6551Account.address', ERC6551Account.address)

        const mint = await CopyrightNFT.mint(owner.address, 1)
        const receipt = await mint.wait()
        const tokenId = receipt.events[0].args[2].toNumber()
        // console.log('tokenId', tokenId)

        const tx = await ERC6551Registry.createAccount(
            ERC6551Account.address,
            chainId,
            CopyrightNFT.address,
            tokenId,
            salt,
            initData,
        )

        const receiptERC6551 = await tx.wait()

        const accountOne = receiptERC6551.events?.find(x => x.event === 'AccountCreated')?.args?.account
        // console.log('accountOne', accountOne)

        const accountPredict = await ERC6551Registry.account(
            ERC6551Account.address,
            chainId,
            CopyrightNFT.address,
            tokenId,
            salt,
        )

        // console.log('accountPredict', accountPredict)

        expect(accountOne).to.equal(accountPredict)
    })
})
