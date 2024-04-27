import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'
import chai from 'chai'
import { Interface } from 'ethers/lib/utils'
import MockERC20 from '../abi/contracts/mock/MockERC20.sol/MockERC20.json'
import MockERC721Second from '../abi/contracts/mock/MockERC721Second.sol/MockERC721Second.json'
import AccountERC6551ABI from '../abi/contracts/account/AccountERC6551.sol/AccountERC6551.json'

const { expect } = chai

describe('ERC6551Account', function () {
    let ERC6551Registry: Contract
    let ERC6551Account: Contract
    let NFTMock: Contract
    let NFTMock2: Contract
    let TokenMock: Contract

    let owner: any
    let user: any

    before(async function () {
        ;[ERC6551Account, ERC6551Registry, NFTMock, NFTMock2, TokenMock] = await Promise.all([
            (await ethers.getContractFactory('AccountERC6551')).deploy(),
            (await ethers.getContractFactory('ERC6551Registry')).deploy(),
            (await ethers.getContractFactory('MockERC721')).deploy(),
            (await ethers.getContractFactory('MockERC721Second')).deploy(),
            (await ethers.getContractFactory('MockERC20')).deploy(),
        ])
        ;[owner, user] = await ethers.getSigners()
    })

    describe('createAccount', function () {
        it.skip('creates and transferETH', async function () {
            const mint = await NFTMock.mint(owner.address, 1)
            const receipt = await mint.wait()
            const tokenId = receipt.events[0].args[2].toNumber()
            const ownerOf = await NFTMock.ownerOf(tokenId)
            expect(ownerOf).to.equal(owner.address)

            const chainId = 1
            const salt = 0
            const initData = '0x'
            const nftAccount = await ERC6551Registry.account(
                ERC6551Account.address,
                chainId,
                NFTMock.address,
                tokenId,
                salt,
            )
            const tx = await ERC6551Registry.createAccount(
                ERC6551Account.address,
                chainId,
                NFTMock.address,
                tokenId,
                salt,
                initData,
            )
            const receiptERC6551 = await tx.wait()
            const accountOne = receiptERC6551.events?.find((x: { event: string }) => x.event === 'AccountCreated')?.args
                ?.account

            expect(accountOne).to.equal(nftAccount)

            // ExecuteCall

            const tba = new Contract(nftAccount, AccountERC6551ABI, owner)

            const sendTransaction = await owner.sendTransaction({
                to: nftAccount,
                value: ethers.utils.parseEther('1'),
                gasLimit: 1000000,
            })
            await sendTransaction.wait()

            const balance = await ethers.provider.getBalance(nftAccount)
            const BalanceETHBefore = ethers.utils.formatEther(balance)
            expect(BalanceETHBefore).to.equal(ethers.utils.formatEther(ethers.utils.parseEther('1')))

            const transfer = await tba.executeCall(owner.address, ethers.utils.parseEther('1'), '0x')
            await transfer.wait()

            const balance2 = await ethers.provider.getBalance(nftAccount)
            const balanceETHAfter = ethers.utils.formatEther(balance2)
            expect(balanceETHAfter).to.equal(ethers.utils.formatEther('0'))
        })

        it.skip('creates and transfer CreaderToken', async function () {
            const mint = await NFTMock.mint(owner.address, 1)
            const receipt = await mint.wait()
            const tokenId = receipt.events[0].args[2].toNumber()
            const ownerOf = await NFTMock.ownerOf(tokenId)
            expect(ownerOf).to.equal(owner.address)

            const chainId = 1
            const salt = 0
            const initData = '0x'
            const nftAccount = await ERC6551Registry.account(
                ERC6551Account.address,
                chainId,
                NFTMock.address,
                tokenId,
                salt,
            )
            const tx = await ERC6551Registry.createAccount(
                ERC6551Account.address,
                chainId,
                NFTMock.address,
                tokenId,
                salt,
                initData,
            )
            const receiptERC6551 = await tx.wait()
            const accountOne = receiptERC6551.events?.find((x: { event: string }) => x.event === 'AccountCreated')?.args
                ?.account

            expect(accountOne).to.equal(nftAccount)

            // ExecuteCall

            const balance = await ethers.provider.getBalance(owner.address)
            console.log('balance', balance)

            await TokenMock.mint(nftAccount, ethers.utils.parseEther('100'))
            await TokenMock.mint(owner.address, ethers.utils.parseEther('100'))
            const balancecreader = await TokenMock.balanceOf(nftAccount)
            const balanceTether = ethers.utils.formatEther(balancecreader)
            expect(balanceTether).to.equal(ethers.utils.formatEther(ethers.utils.parseEther('100')))

            const data = new Interface(MockERC20).encodeFunctionData('transfer(address,uint256)', [
                owner.address,
                ethers.utils.parseEther('10'),
            ])

            console.log('TokenMock.address', TokenMock.address)

            const tba = new Contract(nftAccount, AccountERC6551ABI, owner)

            const tx2 = await tba.executeCall(TokenMock.address, 0, data)
            console.log('tx2', tx2)
            const receipt2 = await tx2.wait()
            const balance2 = await TokenMock.balanceOf(accountOne)
            const balanceTether2 = ethers.utils.formatEther(balance2)
            console.log('balanceTether2', balanceTether2)
            expect(balanceTether2).to.equal(ethers.utils.formatEther(ethers.utils.parseEther('90')))
        })
    })

    it('create and transfer NFT', async function () {
        console.log('NFTMock', NFTMock.address)
        console.log('NFTMock2', NFTMock2.address)
        const mint = await NFTMock.mint(owner.address, 1)
        const receipt = await mint.wait()
        const tokenId = receipt.events[0].args[2].toNumber()
        const ownerOf = await NFTMock.ownerOf(tokenId)
        expect(ownerOf).to.equal(owner.address)

        const chainId = 1
        const salt = 0
        const initData = '0x'
        const nftAccount = await ERC6551Registry.account(
            ERC6551Account.address,
            chainId,
            NFTMock.address,
            tokenId,
            salt,
        )

        const mint2 = await NFTMock2.mint(nftAccount, 1)
        const tx = await ERC6551Registry.createAccount(
            ERC6551Account.address,
            chainId,
            NFTMock.address,
            tokenId,
            salt,
            initData,
        )
        const receiptERC6551 = await tx.wait()
        const accountOne = receiptERC6551.events?.find((x: { event: string }) => x.event === 'AccountCreated')?.args
            ?.account

        expect(accountOne).to.equal(nftAccount)

        // Transfer ETH

        const tba = new Contract(nftAccount, AccountERC6551ABI, owner)

        const sendTransaction = await owner.sendTransaction({
            to: nftAccount,
            value: ethers.utils.parseEther('1'),
            gasLimit: 1000000,
        })
        await sendTransaction.wait()

        const balance = await ethers.provider.getBalance(nftAccount)
        const BalanceETHAfter = ethers.utils.formatEther(balance)
        expect(BalanceETHAfter).to.equal(ethers.utils.formatEther(ethers.utils.parseEther('1')))

        console.log('tba', tba.address)

        const data = new Interface(MockERC721Second).encodeFunctionData('transferFrom(address,address,uint256)', [
            nftAccount,
            owner.address,
            1,
        ])
        console.log('data', data)
        const tx2 = await tba.executeCall(NFTMock2.address, 0, data, {
            gasLimit: 1000000,
        })

        await tx2.wait()

        console.log('nftAccount', nftAccount)

        const ownerOf2 = await NFTMock2.ownerOf(1)
        expect(ownerOf2).to.equal(owner.address)
    })
})
