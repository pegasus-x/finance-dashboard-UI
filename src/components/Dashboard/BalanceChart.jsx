import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useApp } from "../../context/AppContext";

const BalanceChart = () => {
  const { transactions } = useApp();

  let balance = 0;
  // Sorting might be needed if dates are random, assuming they are ordered.
  const chartData = transactions.map((tx) => {
    balance += tx.type === "income" ? tx.amount : -tx.amount;
    return {
      date: new Date(tx.date).toLocaleDateString('en-US', { month: 'short' }),
      balance,
    };
  });

  return (
    <div className="glass-panel p-6 rounded-2xl h-full group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--accent)]/10 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[color:var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="font-bold text-lg">Balance Over Time</h3>
        <div className="flex gap-4 text-xs font-bold text-[color:var(--text-muted)]">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[color:var(--accent)]"></div> Capital</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[color:var(--success)]"></div> Yield</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--card-border)" opacity={0.5} />

          <XAxis
            dataKey="date"
            stroke="var(--text-muted)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis
            stroke="var(--text-muted)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `₹${value >= 1000 ? (value / 1000) + 'k' : value}`}
          />

          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="glass-panel p-4 rounded-xl border border-[color:var(--card-border)]/50 shadow-2xl backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-widest text-[color:var(--text-muted)] font-bold mb-1">{label}</p>
                    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--text-main)] to-[color:var(--text-muted)]">
                      ₹{payload[0].value.toLocaleString('en-IN')}
                    </p>
                  </div>
                );
              }
              return null;
            }}
            cursor={{ stroke: "var(--accent)", strokeWidth: 1, strokeDasharray: "4 4", opacity: 0.4 }}
          />

          <Area
            type="monotone"
            dataKey="balance"
            stroke="var(--accent)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBalance)"
            activeDot={{ r: 6, fill: "var(--accent)", stroke: "var(--bg-main)", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;