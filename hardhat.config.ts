import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
import 'hardhat-dependency-compiler';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY || '0x0000000000000000000000000000000000000000000000000000000000000000';
const infuraKey = process.env.INFURA_API_KEY || '';
const etherscanApi = process.env.ETHERSCAN_API_KEY || '';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {0x5a52E96BAcdaBb82fd05763E25335261B270Efcb
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [0x0000000000000000000000000000000000000000000000000000000000000000]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    arbitrumRinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    }
    bnb: {0x5a52E96BAcdaBb82fd05763E25335261B270Efcb
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [privateKey]
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
  },
  etherscan: {
    apiKey: etherscanApi
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    deploy: './deploy',
    sources: './contracts',
    tests: './tests',
  },
  dependencyCompiler: {
    paths: [
    ],
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
    gasPrice: 10,
    token: 'ETH',
  },
  mocha: {
    timeout: 60000
  }
};

export default config;
