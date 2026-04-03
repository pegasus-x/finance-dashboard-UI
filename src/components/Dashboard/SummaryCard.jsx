import { TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

const SummaryCard = ({ title, amount, icon: Icon, trend, isPositive, subtitle }) => {
    const [displayAmount, setDisplayAmount] = useState(0);

    // Number counting animation
    useEffect(() => {
        let startTime;
        const duration = 1500; // 1.5 seconds

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // EaseOut cubic bezier formula
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            
            setDisplayAmount(amount * easeOutProgress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplayAmount(amount);
            }
        };

        requestAnimationFrame(animate);
    }, [amount]);

    return (
        <div className="p-6 rounded-3xl glass-panel relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--accent)]/10 transition-all duration-300 flex flex-col h-full border border-[color:var(--card-border)]/60">
            {/* Subtle Gradient Glow inside the card */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[color:var(--accent)]/10 rounded-full blur-[40px] group-hover:bg-[color:var(--accent)]/20 transition-colors duration-500" />
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-sm font-medium text-[color:var(--text-muted)]">{title}</h3>
                {Icon && (
                    <div className="p-2 rounded-xl bg-[color:var(--card-border)]/30 backdrop-blur-md">
                        <Icon className="w-5 h-5 text-[color:var(--text-muted)]" />
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-4 relative z-10">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[color:var(--text-main)] transition-all">
                    ₹{displayAmount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </h2>
                {trend && (
                    <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg mb-1 shadow-sm ${isPositive ? 'bg-[color:var(--success)]/10 text-[color:var(--success)] border border-[color:var(--success)]/20 shadow-[color:var(--success)]/5' : 'bg-[color:var(--danger)]/10 text-[color:var(--danger)] border border-[color:var(--danger)]/20 shadow-[color:var(--danger)]/5'}`}>
                        {isPositive ? <TrendingUp size={14} strokeWidth={3} /> : <TrendingDown size={14} strokeWidth={3} />} 
                        <span className="tracking-wide">{trend}</span>
                    </div>
                )}
            </div>

            {subtitle && (
                <div className="text-xs text-[color:var(--text-muted)] mt-auto pt-4 border-t border-[color:var(--card-border)]/50">
                    {subtitle}
                </div>
            )}

            {!subtitle && isPositive && (
                <div className="h-1.5 w-full bg-[#1F2332] rounded-full mt-auto overflow-hidden">
                    <div className="h-full bg-[color:var(--success)] w-[60%] rounded-full shadow-[0_0_10px_var(--success)]" />
                </div>
            )}
        </div>
    );
};

export default SummaryCard;