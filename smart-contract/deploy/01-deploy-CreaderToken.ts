import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const name = "CreaderToken";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const deployment = await deploy(name, {
    from: deployer,
    args: ["CreaderToken", "CRT", "1000000000000000000000000000"],
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
  });
  console.log(deployment.address);
  // deployments.log(`npx hardhat verify --network ${network.name} ${deployment.address}`)
};

export default func;
