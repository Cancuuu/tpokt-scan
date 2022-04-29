import { useEffect, useState, useContext } from "react";
import LineChart from "../components/LineChart";
import ScatterComponent from "../components/ScatterChart";
import Button from "../components/Button";
import { MintedTxsContext } from "../context/mintedDataProvider";

const Home = () => {
  const { minted, setMinted, pagination, setPagination, destructureTxsArray } =
    useContext(MintedTxsContext);

  const [chartSelected, setChartSelected] = useState({
    line: true,
    scatter: false,
  });

  useEffect(() => {
    destructureTxsArray();
  }, []);

  return (
    <div className="py-4 h-screen justify-center items-center bg-gradient-to-r from-[#fbab7e] to-[#f7ce68]">
      <h1 className="text-center text-4xl">tPOKT Minted Scan</h1>
      <div className="mt-8 flex justify-center items-center gap-4">
        <Button
          label="Line Chart"
          onClick={() => {
            setChartSelected({
              line: true,
              scatter: false,
            });
          }}
        />
        <Button
          label="Scatter Chart"
          onClick={() => {
            setChartSelected({
              line: false,
              scatter: true,
            });
          }}
        />
      </div>
      <div className="container mx-auto">
        {chartSelected.line ? (
          <LineChart data={minted} />
        ) : (
          <ScatterComponent data={minted} />
        )}
      </div>
    </div>
  );
};

export default Home;
