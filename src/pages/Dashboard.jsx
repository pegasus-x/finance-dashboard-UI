import SummarySection from "../components/Dashboard/SummarySection";
import BalanceChart from "../components/Dashboard/BalanceChart";
import CategoryChart from "../components/Dashboard/CategoryChart";
import InsightsSection from "../components/Insights/InsightsSection";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { CalendarDays, Filter, Download } from "lucide-react";

const Dashboard = () => {
    const { transactions, showToast } = useApp();

    const [isGenerating, setIsGenerating] = useState(false);
    const [filter, setFilter] = useState("all");

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    // 🔥 Filter logic
    const filteredTransactions =
        filter === "all"
            ? transactions
            : transactions.filter((tx) => tx.type === filter);

    // 🔥 Export CSV
    const handleGenerateReport = () => {
        if (!filteredTransactions.length) return;

        setIsGenerating(true);

        setTimeout(() => {
            const headers = ["Date", "Type", "Category", "Amount"];

            const rows = filteredTransactions.map((tx) => [
                tx.date,
                tx.type,
                tx.category,
                tx.amount,
            ]);

            const csvContent = [headers, ...rows]
                .map((row) => row.join(","))
                .join("\n");

            const blob = new Blob([csvContent], { type: "text/csv" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "finance-report.csv";
            a.click();

            setIsGenerating(false);
            showToast("Report exported successfully", "success");
        }, 800); // small delay for UX feel
    };

    // 🔥 Filter toggle
    const handleFilterToggle = () => {
        setFilter((prev) =>
            prev === "all" ? "income" : prev === "income" ? "expense" : "all"
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 border-b border-[color:var(--card-border)]/50 pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <CalendarDays className="w-4 h-4 text-[color:var(--text-muted)]" />
                        <p className="text-sm text-[color:var(--text-muted)] font-medium">
                            {today}
                        </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[color:var(--text-main)]">
                        Portfolio Vault
                    </h2>
                    <p className="text-xs text-[color:var(--text-muted)] mt-1">
                        Showing: {filter}
                    </p>
                </div>

                <div className="flex gap-3">
                    {/* 🔥 Filter Button */}
                    <button
                        onClick={handleFilterToggle}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[color:var(--input-bg)] border border-[color:var(--card-border)] text-[color:var(--text-main)] hover:bg-[color:var(--card-border)]/50 transition-all shadow-sm"
                    >
                        <Filter className="w-4 h-4" />
                        {filter === "all"
                            ? "All"
                            : filter === "income"
                                ? "Income"
                                : "Expense"}
                    </button>

                    {/* 🔥 Export Button */}
                    <button
                        onClick={handleGenerateReport}
                        disabled={isGenerating}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-black shadow-lg shadow-white/10 hover:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-95 min-w-[160px]"
                    >
                        {isGenerating ? (
                            <>
                                <div className="relative flex items-center justify-center w-5 h-5 mr-1">
                                    <span className="absolute inset-0 border-[2px] border-black/10 rounded-full"></span>
                                    <span className="absolute inset-0 border-[2px] border-transparent border-t-black border-r-black/30 rounded-full animate-spin"></span>
                                    <span className="absolute inset-1 border-[2px] border-transparent border-b-black/80 border-l-black/30 rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></span>
                                </div>
                                Generating...
                            </>
                        ) : (
                            <>
                                <Download className="w-4 h-4" />
                                Export Finance Report
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Components */}
            <SummarySection />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <BalanceChart />
                </div>
                <div className="lg:col-span-1">
                    <CategoryChart />
                </div>
            </div>

            <InsightsSection />
        </div>
    );
};

export default Dashboard;