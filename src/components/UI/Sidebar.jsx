import { LayoutDashboard, Receipt, TrendingUp, X, Hexagon } from "lucide-react";

const Sidebar = ({ isOpen, setIsSidebarOpen, currentPage, setPage }) => {
    return (
        <>
            {/* Mobile Overlay Backdrop */}
            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <aside
                className={`glass-sidebar bg-[color:var(--bg-main)] lg:bg-transparent fixed lg:static top-0 left-0 z-50 w-[280px] sm:w-[300px] lg:w-[260px] xl:w-[280px] flex flex-col h-screen py-6 px-4 transform transition-all duration-300 ease-in-out border-r border-[color:var(--card-border)] lg:border-r-0
                ${isOpen ? "translate-x-0 shadow-2xl shadow-black/20" : "-translate-x-full lg:translate-x-0"}`}
            >
                {/* Header / Logo */}
                <div className="flex justify-between items-center mb-10 px-2 pl-3">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[color:var(--accent)] to-indigo-900 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-[color:var(--accent)]/50 relative overflow-hidden group">
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            {/* Isometric Vault SVG */}
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white z-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className="fill-white/10" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-black tracking-[0.1em] text-[color:var(--text-main)] uppercase">FinVault</h1>
                            <p className="text-[10px] text-[color:var(--text-muted)] mt-0 font-bold uppercase tracking-widest">Finance UI</p>
                        </div>
                    </div>
                    <button
                        className="lg:hidden p-2 -mr-2 bg-[color:var(--card-border)]/20 rounded-lg text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] active:scale-95 transition-all"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1.5 overflow-y-auto px-1">
                    <button
                        onClick={() => { setPage('dashboard'); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 group ${currentPage === 'dashboard' ? 'bg-[color:var(--accent)] text-white shadow-lg shadow-[color:var(--accent)]/20' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                    >
                        <LayoutDashboard size={20} />
                        <span className="tracking-tight">Overview</span>
                    </button>
                    <button
                        onClick={() => { setPage('transactions'); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 group ${currentPage === 'transactions' ? 'bg-[color:var(--accent)] text-white shadow-lg shadow-[color:var(--accent)]/20' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                    >
                        <Receipt size={20} />
                        <span className="tracking-tight">Transactions</span>
                    </button>
                    <button
                        onClick={() => { setPage('insights'); setIsSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 group ${currentPage === 'insights' ? 'bg-[color:var(--accent)] text-white shadow-lg shadow-[color:var(--accent)]/20' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                    >
                        <TrendingUp size={20} />
                        <span className="tracking-tight">Insights</span>
                    </button>
                </nav>

                {/* Bottom Actions */}
                <div className="mt-6 mb-12 px-1">
                    <div className="p-3.5 rounded-2xl bg-[color:var(--card-border)]/20 border border-[color:var(--card-border)]/30 flex items-center gap-3">
                        <div className="w-10 h-10 min-w-10 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] text-xs font-bold flex items-center justify-center border border-[color:var(--accent)]/20 shadow-inner relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--accent)]/20 to-transparent animate-pulse" />
                            <span className="relative z-10 tracking-widest pl-0.5">RR</span>
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-xs font-bold text-[color:var(--text-main)] truncate">Rati Ranjan</h4>
                            <p className="text-[9px] font-black text-[color:var(--accent)] uppercase tracking-widest truncate">Elite Member</p>
                        </div>
                    </div>
                </div>

            </aside>
        </>
    );
};

export default Sidebar;
