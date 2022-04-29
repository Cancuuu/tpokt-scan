import React, { useState, createContext } from "react";
import mintedTxs from "../public/contractData/mintedTxsData.json";
import { hexToDec } from "../lib/getData";

export const MintedTxsContext = createContext();

const MintedTxsProvider = (props) => {
  const [minted, setMinted] = useState([]);
  const [pagination, setPagination] = useState([]);

  const destructureTxsArray = () => {
    setMinted([]);

    mintedTxs.forEach((array) => {
      const txs = array.map((tx) => {
        return {
          id: tx.blockNumber || "",
          block: tx.blockNumber || "",
          txHash: tx.transactionHash || "",
          amount: hexToDec(tx.args[1].hex) || "",
        };
      });
      setMinted((prev) => [...prev, ...txs]);
    });
  };

  return (
    <MintedTxsContext.Provider
      value={{
        minted,
        setMinted,
        pagination,
        setPagination,
        destructureTxsArray,
      }}
    >
      {props.children}
    </MintedTxsContext.Provider>
  );
};

export default MintedTxsProvider;
