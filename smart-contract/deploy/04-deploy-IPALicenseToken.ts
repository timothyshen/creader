import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const name = "IPALicenseToken";
const pilPolicyManager = "0xd43fE0d865cb5C26b1351d3eAf2E3064BE3276F6";
const licensingModule = "0xe89b0EaA8a0949738efA80bB531a165FB3456CBe";
const pilTemplate = "0x260B6CB6284c89dbE660c0004233f7bB99B5edE7";
const accessController = "0xF9936a224b3Deb6f9A4645ccAfa66f7ECe83CF0A";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const deployment = await deploy(name, {
    from: deployer,
    log: true,
    waitConfirmations: chainId == 31337 ? 1 : 6,
    args: [pilPolicyManager, licensingModule, pilTemplate, accessController],
  });
  console.log(deployment.address);
};

func.tags = ["all", name];
export default func;
