import { Brain, Activity, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";
import { useApp } from "../context/AppContext";

const Insights = () => {
    const { transactions } = useApp();

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 border-b border-[color:var(--card-border)]/50 pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <Brain className="w-5 h-5 text-purple-500" />
                        <p className="text-sm text-[color:var(--text-muted)] font-medium">Ethereal Intelligence</p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--text-main)]">
                        AI Portfolio Insights
                    </h2>
                </div>
            </div>

            {/* Health Score Overview */}
            <div className="glass-panel p-8 rounded-3xl border border-[color:var(--card-border)]/60 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700" />
                
                <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="88" className="stroke-[color:var(--card-border)]" strokeWidth="12" fill="none" />
                        <circle cx="96" cy="96" r="88" className="stroke-[color:var(--success)]" strokeWidth="12" fill="none" strokeDasharray="552" strokeDashoffset="110" strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-4xl font-black text-[color:var(--text-main)] tracking-tighter">82</span>
                        <span className="text-xs font-bold text-[color:var(--text-muted)] uppercase tracking-widest">Score</span>
                    </div>
                </div>

                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Excellent Liquidity Health</h3>
                    <p className="text-[color:var(--text-muted)] leading-relaxed max-w-2xl">
                        Your spending velocity indicates a highly stable accumulation phase. Based on the past 30 days of transaction data, your savings rate is consistently outperforming regional benchmarks by <span className="text-[color:var(--success)] font-semibold">14.2%</span>.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                        <span className="px-3 py-1.5 rounded-lg bg-[color:var(--success)]/10 text-[color:var(--success)] border border-[color:var(--success)]/20 text-xs font-bold uppercase tracking-wider">Low Risk</span>
                        <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold uppercase tracking-wider">High Yield</span>
                    </div>
                </div>
            </div>

            {/* AI Findings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Finding 1 */}
                <div className="glass-panel p-6 rounded-3xl border border-[color:var(--card-border)]/60 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold">Compounding Opportunity</h4>
                    </div>
                    <p className="text-sm text-[color:var(--text-muted)] leading-relaxed mb-4">
                        You have maintained an idle cash balance of roughly ₹45,000 across current cycles. Moving this into the Ethereal Yield index could generate an estimated ₹3,200 annual return.
                    </p>
                    <button className="text-sm font-semibold text-[color:var(--accent)] hover:text-white transition-colors">Review Strategy &rarr;</button>
                </div>

                {/* Finding 2 */}
                <div className="glass-panel p-6 rounded-3xl border border-[color:var(--card-border)]/60 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-500">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold">Subscription Anomaly</h4>
                    </div>
                    <p className="text-sm text-[color:var(--text-muted)] leading-relaxed mb-4">
                        A recurring transaction of ₹1,499 (Entertainment) has triggered a usage warning. Cloud telemetry suggests this service hasn't been actively utilized in 45 days.
                    </p>
                    <button className="text-sm font-semibold text-yellow-500 hover:text-white transition-colors">Manage Subscriptions &rarr;</button>
                </div>

                {/* Finding 3 */}
                <div className="glass-panel p-6 rounded-3xl border border-[color:var(--card-border)]/60 hover:-translate-y-1 transition-transform md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold">Tax Loss Harvesting</h4>
                    </div>
                    <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                        Algorithm has detected 3 unoptimized portfolio positions. Executing a swap to equivalent paired assets before fiscal close will preserve market exposure while securing a ₹12,400 capital loss deduction against your active tax ledger.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Insights;
