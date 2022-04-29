interface Tooltip {
  active: boolean;
  payload: any;
  label: string;
}

export const CustomTooltip = ({ active, payload, label }: Tooltip) => {
  if (active) {
    return (
      <div className="bg-slate-200 rounded-xl p-4 shadow-xl text-center">
        <p>Block Number: {label}</p>
        <p>Minted Amount: U$D {payload[0].payload.amount}</p>
        <p>Tx Hash: {payload[0].payload.txHash}</p>
      </div>
    );
  }
};
