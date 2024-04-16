import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const name = 'Bodhi'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, network } = hre
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const args: any[] = []

    const deployment = await deploy(name, {
        from: deployer,
        args,
        log: true,
        waitConfirmations: chainId == 31337 ? 1 : 6,
    })
    console.log(deployment.address)
}

func.tags = ['all', name]
export default func
