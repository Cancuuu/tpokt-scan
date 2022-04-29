
import { ethers } from "ethers";
import abi from "../utils/contractABI.json";
import {
  CONTRACT_ADDRESS,
  CONTRACT_CREATION_BLOCK,
  FILTER_ADDRESS_TOPIC,
} from "../constants/contractData";
const url =
    "https://poly-mainnet.gateway.pokt.network/v1/lb/6264c337aa777e00391997da";

const provider = new ethers.providers.JsonRpcProvider(url);

export const hexToDec = (hexString: string) => {
  return parseInt(hexString, 16) / 1000000;
};


export const getBlockTimeStamp = async (blockNumber: number) => {
  const block = await provider.getBlock(blockNumber);
  return block.timestamp;
};

const init = async () => {
  const url =
    "https://poly-mainnet.gateway.pokt.network/v1/lb/6264c337aa777e00391997da";

  const provider = new ethers.providers.JsonRpcProvider(url);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
  const block = await provider.getBlockNumber();

  const steps = Math.ceil((block - CONTRACT_CREATION_BLOCK) / 100000);

  for (let n = 0; n < steps; n++) {
    await contract
      .queryFilter(
        FILTER_ADDRESS_TOPIC,
        CONTRACT_CREATION_BLOCK + n * 100000,
        CONTRACT_CREATION_BLOCK + (n + 1) * 100000
      )
      .then((res) => {
        // setQueries((prev) => [...prev, ...res]);
      })
      .catch((err) => {
        if (err.code === -32602) {
          console.log(err.code, err);
        }
      });
  }
};
