import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "hardhat-spdx-license-identifier";

dotenv.config();

const PRIVATE_KEY1 = "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.6",
      },
    ],
  },
  defaultNetwork: "eth",
  networks: {
    eth: {
      url: "",
      accounts:
        [PRIVATE_KEY1],
    },
  },
};

export default config;
