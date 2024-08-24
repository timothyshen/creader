import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const name = "ChapterNFT";
const REGISTRY = "0xd43fE0d865cb5C26b1351d3eAf2E3064BE3276F6";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  const bodhi = await deployments.get("Bodhi");

  const deployment = await deploy(name, {
    from: deployer,
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
    args: [REGISTRY, bodhi.address],
  });
  console.log(deployment.address);
};

func.tags = ["all", name];
export default func;
