import { useEffect, useState } from "react";
import mintedTxs from "../public/contractData/mintedTxsData.json";
// import { hexToDec } from "../lib/getData";
// import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { hexToDec, getBlockTimeStamp } from "../lib/getData";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const [minted, setMinted] = useState([]);
  const [queries, setQueries] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [totalTxs, setTotalTxs] = useState([]);

  const destructureTxsArray = () => {
    setMinted([]);
    const mintedCopy = mintedTxs.slice(0, 2);

    mintedCopy.forEach((array) => {
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

  useEffect(() => {
    destructureTxsArray();
  }, []);

  useEffect(() => {
    console.log(minted);
  }, [minted]);

  return (
    <div className="py-4 h-screen flex justify-center items-center bg-gradient-to-r from-orange to-yellow">
      <ResponsiveContainer width="100%" height={700}>
        <BarChart
          data={minted}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="block" />
          <YAxis dataKey="amount" />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" stroke="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Home;
