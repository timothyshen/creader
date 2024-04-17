import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const args: any[] = [];

  const deploymentBookShare = await deploy("BookShare", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
  });
  console.log(deploymentBookShare.address);

  const deploymentChapterLog = await deploy("ChapterLog", {
    from: deployer,
    args: [deploymentBookShare.address],
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
  });
  console.log(deploymentChapterLog.address);
};

func.tags = ["all", "BookShare", "ChapterLog"];
export default func;
