import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";
import { providers, ethers } from "ethers";
import abi from "../utils/contractABI.json";

const Home = () => {
  const contractAddress = "0x5430a0B6C11f870571ffA891d59dec8C4608Ea9A";
  const [minted, setMinted] = useState([]);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    init();
  }, []);

  function hexToDec(hexString) {
    return parseInt(hexString, 16) / 1000000;
  }

  const init = async () => {
    const url =
      "https://poly-mainnet.gateway.pokt.network/v1/lb/6264c337aa777e00391997da";

    const provider = new ethers.providers.JsonRpcProvider(url);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const block = await provider.getBlockNumber();

    const filter = {
      address: contractAddress,
      topics: [
        "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885",
      ],
    };

    const getBlockTimeStamp = (blockNumber) => {
      const block = provider.getBlock(blockNumber);
      return block.timestamp;
    };

    const steps = Math.ceil(block / 100000);

    for (let n = 0; n < steps; n++) {
      const queries = await contract.queryFilter(
        filter,
        (steps - 1) * 100000,
        steps * 100000
      );

      setQueries((prev) => [...prev, ...queries]);

      queries.map((query) => {
        setMinted((prev) => [
          ...prev,
          {
            to: query.args.to,
            amount: hexToDec(query.args.amount._hex),
            txId: query.transactionHash,
            blockNumber: query.blockNumber,
          },
        ]);
      });
    }
  };

  return (
    <div className="p-4 h-screen">
      <Navbar />
      <div className="griddie items-center">
        <div className="col-start-4 col-end-">
          <h1 className="text-2xl">SCAN 1!</h1>
        </div>
        <div className="col-start-8 col-end-13">
          <h1 className="text-2xl">SCAN 2!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
