import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";

import dotenv from "dotenv";

dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
    },
    ethSepolia: {
      url: `https://sepolia.infura.io/v3/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
      verify: {
        etherscan: {
          apiUrl: "https://api-sepolia.etherscan.io",
          apiKey: ETHERSCAN_API_KEY,
        },
      },
    },
    baseSepolia: {
      url: "https://base-sepolia.blockpi.network/v1/rpc/public",
      accounts: [PRIVATE_KEY],
    },
    degenChain: {
      url: "https://rpc.degen.tips",
      accounts: [PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    deployments: "../frontend/contract-config/deployments",
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //     currency: 'USD',
  //     gasPrice: 100,
  //     enabled: true,
  // },
  typechain: {
    outDir: "../frontend/contract-config/typechain",
    target: "ethers-v5",
    alwaysGenerateOverloads: true,
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    spacing: 2,
    runOnCompile: true,
  },
};

export default config;
