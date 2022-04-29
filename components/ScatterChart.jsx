import {
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

const ScatterComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={700} className="mt-16">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        <Scatter
          data={data}
          fill="#388DF8"
          stroke="#0C4A6E"
          name="Minted Txs"
        />
        <YAxis
          dataKey="amount"
          tickLine={false}
          tickCount={5}
          tickFormatter={(amount) => `${amount / 1000}k`}
        />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterComponent;
