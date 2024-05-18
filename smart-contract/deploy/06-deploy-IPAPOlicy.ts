import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const name = "IPAPolicyCreation";
const pilPolicyManager = "";
const licensingModule = "";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const deployment = await deploy(name, {
    from: deployer,
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
    args: [pilPolicyManager, licensingModule],
  });
  console.log(deployment.address);
};

func.tags = ["all", name];
export default func;
