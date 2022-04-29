import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Brush,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";

const LineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={700} className="mt-16">
      <AreaChart data={data}>
        <Area dataKey="amount" stroke="#0C4A6E" fill="#388DF8" />

        <XAxis dataKey="block" axisLine={false} tickLine={false} />

        <YAxis
          dataKey="amount"
          tickLine={false}
          tickCount={8}
          tickFormatter={(amount) => `${amount / 1000}k`}
        />

        <Tooltip content={<CustomTooltip />} />
        <Brush dataKey="block" height={30} stroke="#8884d8" />
        <CartesianGrid vertical={false} color="#0C4A6E" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
