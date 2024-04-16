import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const name = 'CopyrightNFT'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const creaderToken = await deployments.get('CreaderToken')
    const erc6551Registry = await deployments.get('ERC6551Registry')
    const account = await deployments.get('AccountERC6551')

    const args: any[] = [
        'https://creader.io/',
        'Token bounded copyright',
        'TBC',
        creaderToken.address,
        erc6551Registry.address,
        account.address,
    ]
    const deployment = await deploy(name, {
        from: deployer,
        args,
        log: true,
        waitConfirmations: chainId == 31337 ? 1 : 6,
    })
    console.log(deployment.address)
    // deployments.log(`npx hardhat verify --network ${network.name} ${deployment.address} ${args.map(arg => `"${arg}"`)}`)
}

func.tags = ['all', name]
export default func
