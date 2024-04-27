import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'
import chai from 'chai'
import { Interface } from 'ethers/lib/utils'
import BodhiAbi from '../abi/contracts/shares/Bodhi.sol/Bodhi.json'
import AccountERC6551ABI from '../abi/contracts/account/AccountERC6551.sol/AccountERC6551.json'
import MockERC20 from '../abi/contracts/mock/MockERC20.sol/MockERC20.json'

const { expect } = chai

describe('ERC6551Account', function () {
    let ERC6551Registry: Contract
    let ERC6551Account: Contract
    let Bodhi: Contract
    let NFTMock: Contract
    let NFTMock2: Contract
    let TokenMock: Contract

    let owner: any
    let user: any

    before(async function () {
        ;[ERC6551Account, ERC6551Registry, NFTMock, NFTMock2, TokenMock, Bodhi] = await Promise.all([
            (await ethers.getContractFactory('AccountERC6551')).deploy(),
            (await ethers.getContractFactory('ERC6551Registry')).deploy(),
            (await ethers.getContractFactory('MockERC721')).deploy(),
            (await ethers.getContractFactory('MockERC721Second')).deploy(),
            (await ethers.getContractFactory('MockERC20')).deploy(),
            (await ethers.getContractFactory('Bodhi')).deploy(),
        ])
        ;[owner, user] = await ethers.getSigners()
    })

    // create -> 6551 -> account -> transfer ETH from parent to child -> create a bodhi share
    it('create and creat a share', async function () {
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

        const tba = new Contract(nftAccount, AccountERC6551ABI, owner)

        const sendTransaction = await owner.sendTransaction({
            to: nftAccount,
            value: ethers.utils.parseEther('2'),
            gasLimit: 1000000,
        })
        await sendTransaction.wait()

        const balance = await ethers.provider.getBalance(nftAccount)
        const BalanceETHAfter = ethers.utils.formatEther(balance)
        expect(BalanceETHAfter).to.equal(ethers.utils.formatEther(ethers.utils.parseEther('2')))

        console.log('tba', tba.address)
        console.log('tba balance', await ethers.provider.getBalance(tba.address))

        const tx3 = await Bodhi.create('gXZyiSfiEUf-sBD8c1uiNNImCFdd9RM1Tb1s7XsnLBc')
        await tx3.wait()

        const userAsset = await Bodhi.getAssetIdsByAddress(owner.address)
        console.log(owner.address)
        console.log('userAsset', userAsset)

        console.log('end of creation')

        const data = new Interface(BodhiAbi).encodeFunctionData('create(string)', [
            'gXZyiSfiEUf-sBD8c1uiNNImCFdd9RM1Tb1s7XsnLBc',
        ])
        console.log('data', data)

        const tx2 = await tba.executeCall(Bodhi.address, 0, data, {
            gasLimit: 4000000,
        })
        const test = await tx2.wait()

        // test.events?.forEach((x: { event: string; args: any }) => {
        //     console.log('event', x)
        // })
        Bodhi.on('Trade', (id, signer, artx, event) => {
            console.log('id', id)
        })

        // await tx2.wait()
        // // const tx2 = await Bodhi.create('gXZyiSfiEUf-sBD8c1uiNNImCFdd9RM1Tb1s7XsnLBc')
        // // await tx2.wait()
        // // console.log('tx2', tx2)

        // const userAsset = await Bodhi.getAssetIdsByAddress(tba.address)
        // console.log('userAsset', userAsset)
    })
})
