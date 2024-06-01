import CreaderToken from "../../contract-config/deployments/ethSepolia/CreaderToken.json";
import Bodhi from "../../contract-config/deployments/ethSepolia/Bodhi.json";
import CopyrightNFT from "../../contract-config/deployments/ethSepolia/CopyrightNFT.json";
import IPALicenseToken from "../../contract-config/deployments/ethSepolia/IPALicenseToken.json";

export const BodhiAddress = Bodhi.address;
export const BodhiAbi = Bodhi.abi;
export const CopyrightNFTAddress = CopyrightNFT.address;
export const CopyrightNFTAbi = CopyrightNFT.abi;
export const CreaderTokenAddress = CreaderToken.address;
export const CreaderTokenAbi = CreaderToken.abi;
export const IPALicenseTokenAddress = IPALicenseToken.address;
export const IPALicenseTokenAbi = IPALicenseToken.abi;

export const BaseSepoliaChainExplorer = "https://sepolia.etherscan.io/";
export const BaseSepoliaChainId = 11_155_111;
export const CREATER_FEES = 0.05;
