import { Sparkles, PiggyBank, Rocket, ChevronRight } from "lucide-react";

const InsightsSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            
            {/* Actionable Insights */}
            <div className="lg:col-span-2 p-6 rounded-2xl glass-panel flex flex-col group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--accent)]/10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-[color:var(--accent)]" />
                    <h3 className="font-bold text-lg">Actionable Insights</h3>
                </div>

                <div className="space-y-4">
                    {/* Insight 1 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-[color:var(--accent)]/10 border border-[color:var(--card-border)]/50 hover:bg-[color:var(--accent)]/20 transition-colors cursor-pointer group gap-4">
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] p-2.5 rounded-lg bg-[color:var(--card-border)] flex items-center justify-center">
                                <PiggyBank className="w-5 h-5 text-[color:var(--accent)]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[color:var(--text-main)] mb-1">Tax Efficiency Optimization</h4>
                                <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                                    Reallocating ₹12k to your Ethereal Vault A could save you ₹1,200 in annual tax liabilities.<br/>
                                    Strategy: Automated Shifting.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="hidden sm:block w-5 h-5 text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors min-w-[20px]" />
                    </div>

                    {/* Insight 2 */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-[color:var(--success)]/10 border border-[color:var(--card-border)]/50 hover:bg-[color:var(--success)]/20 transition-colors cursor-pointer group gap-4">
                        <div className="flex items-start gap-4">
                            <div className="min-w-[40px] p-2.5 rounded-lg bg-[color:var(--card-border)] flex items-center justify-center">
                                <Rocket className="w-5 h-5 text-[color:var(--success)]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[color:var(--text-main)] mb-1">Market Opportunity Detected</h4>
                                <p className="text-sm text-[color:var(--text-muted)] leading-relaxed">
                                    High-yield treasury tokens are performing 12% above your current idle cash baseline.<br/>
                                    Potential gain: ₹450/month.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="hidden sm:block w-5 h-5 text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors min-w-[20px]" />
                    </div>
                </div>
            </div>

            {/* Promo / Educational Card */}
            <div className="lg:col-span-1 glass-panel rounded-3xl border border-[color:var(--card-border)]/60 overflow-hidden flex flex-col relative group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[color:var(--accent)]/10 transition-all duration-300">
                {/* Simulated Image Area */}
                <div className="h-40 w-full relative bg-[color:var(--input-bg)] flex items-center justify-center overflow-hidden">
                     {/* decorative circles to simulate illustration */}
                     <div className="absolute w-24 h-24 rounded-full border-4 border-[color:var(--card-border)]/50 top-4 right-8"></div>
                     <div className="absolute w-16 h-16 rounded-full border-4 border-[color:var(--card-border)]/50 bottom-2 left-10"></div>
                     <div className="absolute w-32 h-32 rounded-full border-4 border-[color:var(--accent)]/20 top-10 left-20"></div>
                     {/* Label */}
                     <span className="absolute bottom-4 left-6 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-md">Premium</span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-[color:var(--text-main)]">Vault Mastery Guide</h3>
                        <p className="text-sm text-[color:var(--text-muted)] leading-relaxed mb-6 font-medium">
                            Unlock advanced liquidity controls with our new educational series.
                        </p>
                    </div>
                    
                    <a href="#" className="text-[color:var(--accent)] font-bold text-sm flex items-center gap-1 hover:text-[color:var(--accent-hover)] transition-colors w-fit">
                        Access Now <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default InsightsSection;