import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { useApp } from "../../context/AppContext";

const COLORS = ["var(--accent)", "var(--success)", "#F59E0B", "#8B5CF6"];

const CategoryChart = () => {
    const { transactions } = useApp();

    const categoryMap = {};
    let totalExpense = 0;

    transactions.forEach((tx) => {
        if (tx.type === "expense") {
            categoryMap[tx.category] =
                (categoryMap[tx.category] || 0) + tx.amount;
            totalExpense += tx.amount;
        }
    });

    const data = Object.keys(categoryMap).map((key) => ({
        name: key,
        value: categoryMap[key],
    })).sort((a, b) => b.value - a.value);

    return (
        <div className="glass-panel p-6 rounded-3xl flex flex-col h-full group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--accent)]/10 transition-all duration-300 border border-[color:var(--card-border)]/60 relative overflow-hidden">
            {/* Subtle Gradient Glow inside the card */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[color:var(--accent)]/10 rounded-full blur-[40px] group-hover:bg-[color:var(--accent)]/20 transition-colors duration-500 pointer-events-none" />
            
            <h3 className="font-semibold text-lg mb-6 relative z-10 text-[color:var(--text-main)]">
                Spending Categories
            </h3>

            <div className="flex-1 relative min-h-[220px] z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={70}
                            outerRadius={95}
                            paddingAngle={5}
                            stroke="none"
                            cornerRadius={4}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const data = payload[0].payload;
                                    return (
                                        <div className="glass-panel p-3 rounded-xl border border-[color:var(--card-border)]/50 shadow-2xl backdrop-blur-xl">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].fill }} />
                                                <p className="text-xs font-bold text-[color:var(--text-muted)] tracking-wider uppercase">{data.name}</p>
                                            </div>
                                            <p className="text-lg font-bold text-[color:var(--text-main)]">
                                                ₹{data.value.toLocaleString('en-IN')}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                
                {/* Center text for total */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-xs font-bold text-[color:var(--text-muted)] tracking-widest uppercase mb-1">Total</p>
                    <p className="text-xl font-bold">₹{totalExpense >= 1000 ? (totalExpense/1000).toFixed(1) + 'k' : totalExpense}</p>
                </div>
            </div>

            {/* Custom Legend */}
            <div className="mt-4 space-y-3">
                {data.map((item, index) => {
                    const percentage = totalExpense > 0 ? ((item.value / totalExpense) * 100).toFixed(0) : 0;
                    return (
                        <div key={index} className="flex justify-between items-center text-sm font-bold">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                            </div>
                            <span>{percentage}%</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryChart;