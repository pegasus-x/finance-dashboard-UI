import { Landmark, TrendingUp, CreditCard } from "lucide-react";
import SummaryCard from "./SummaryCard";
import { useApp } from "../../context/AppContext";
import { calculateSummary } from "../../utils/helpers";

const SummarySection = () => {
    const { transactions } = useApp();
    const { income, expense, balance } = calculateSummary(transactions);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationFillMode: 'both' }}>
                <SummaryCard
                    title="Total Balance"
                    amount={balance}
                    icon={Landmark}
                    trend="+2.4%"
                    isPositive={true}
                />
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                <SummaryCard
                    title="Monthly Income"
                    amount={income}
                    icon={TrendingUp}
                    trend="+0.8%"
                    isPositive={true}
                    subtitle="Calculated from 12 revenue streams"
                />
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
                <SummaryCard
                    title="Monthly Expenses"
                    amount={expense}
                    icon={CreditCard}
                    trend="-1.2%"
                    isPositive={false}
                    subtitle="Optimized: 15% lower than average"
                />
            </div>
        </div>
    );
};

export default SummarySection;