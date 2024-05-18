import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'
import chai from 'chai'

const { expect } = chai

describe('ERC6551Account', function () {
    let ERC6551Registry: Contract
    let ERC6551Account: Contract
    let CopyrightNFT: Contract
    let NFTMock2: Contract
    let CreaderToken: Contract

    let owner: any
    let user: any

    before(async function () {
        ;[ERC6551Account, ERC6551Registry, CreaderToken, NFTMock2] = await Promise.all([
            (await ethers.getContractFactory('AccountERC6551')).deploy(),
            (await ethers.getContractFactory('ERC6551Registry')).deploy(),
            (await ethers.getContractFactory('CreaderToken')).deploy(),
            (await ethers.getContractFactory('MockERC721')).deploy(),
        ])
        ;[owner, user] = await ethers.getSigners()
        CopyrightNFT = await (
            await ethers.getContractFactory('CopyrightNFT')
        ).deploy(
            'https://creader.io',
            'testCreaderNFT',
            'TCNFT',
            CreaderToken.address,
            ERC6551Registry.address,
            ERC6551Account.address,
        )
    })

    describe('createAccount', function () {
        it('creates and validate', async function () {
            const mint = await CopyrightNFT.createCopyright(
                owner.address,
                137,
                'Test book title',
                'Test book description',
                'Pending',
            )
            const receipt = await mint.wait()
            const tokenId = receipt.events[0].args[2].toNumber()
            const ownerOf = await CopyrightNFT.ownerOf(tokenId)
            expect(ownerOf).to.equal(owner.address)

            const chainId = 1
            const salt = 0
            const initData = '0x'
            const nftAccount = await ERC6551Registry.account(
                ERC6551Account.address,
                chainId,
                CopyrightNFT.address,
                tokenId,
                salt,
            )
            const tx = await ERC6551Registry.createAccount(
                ERC6551Account.address,
                chainId,
                CopyrightNFT.address,
                tokenId,
                salt,
                initData,
            )
            const receiptERC6551 = await tx.wait()
            const accountOne = receiptERC6551.events?.find((x: { event: string }) => x.event === 'AccountCreated')?.args
                ?.account

            expect(accountOne).to.equal(nftAccount)
        })
    })
})
