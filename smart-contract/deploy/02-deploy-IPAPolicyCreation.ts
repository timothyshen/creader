import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const name = "IPAPolicyCreation";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const PILPOLICY = "0xeAABf2b80B7e069EE449B5629590A1cc0F9bC9C2";
  const LICENSING_MODULE = "0x950d766A1a0afDc33c3e653C861A8765cb42DbdC";

  const deployment = await deploy(name, {
    from: deployer,
    args: [PILPOLICY, LICENSING_MODULE],
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
  });
  console.log(deployment.address);
  // deployments.log(`npx hardhat verify --network ${network.name} ${deployment.address}`)
};

func.tags = ["all", name];
export default func;
