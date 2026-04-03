import { LayoutDashboard, Receipt, TrendingUp, X, Hexagon } from "lucide-react";

const Sidebar = ({ isOpen, setIsSidebarOpen, currentPage, setPage }) => {
    return (
        <aside
            className={`glass-sidebar fixed lg:static top-0 left-0 z-50 w-[260px] md:w-[280px] flex flex-col h-screen py-6 px-4 transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
            {/* Header / Logo */}
            <div className="flex justify-between items-center mb-10 px-2">
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
                    className="lg:hidden p-1 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <X size={20} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                <button
                    onClick={() => { setPage('dashboard'); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${currentPage === 'dashboard' ? 'bg-[color:var(--accent)]/10 text-[color:var(--accent)] border border-[color:var(--accent)]/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                >
                    <LayoutDashboard size={20} />
                    Overview
                </button>
                <button
                    onClick={() => { setPage('transactions'); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${currentPage === 'transactions' ? 'bg-[color:var(--accent)]/10 text-[color:var(--accent)] border border-[color:var(--accent)]/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                >
                    <Receipt size={20} />
                    Transactions
                </button>
                <button
                    onClick={() => { setPage('insights'); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${currentPage === 'insights' ? 'bg-[color:var(--accent)]/10 text-[color:var(--accent)] border border-[color:var(--accent)]/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'hover:bg-[color:var(--card-border)]/50 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)]'}`}
                >
                    <TrendingUp size={20} />
                    Insights
                </button>
            </nav>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-6">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 min-w-10 rounded-full bg-[color:var(--accent)]/10 text-[color:var(--accent)] text-sm font-bold flex items-center justify-center border border-[color:var(--card-border)]/80 shadow-inner relative group">
                        <div className="absolute inset-0 bg-[color:var(--accent)] rounded-full blur-[6px] opacity-20" />
                        <span className="relative z-10 tracking-widest">RR</span>
                    </div>
                    <div className="overflow-hidden">
                        <h4 className="text-sm font-semibold text-[color:var(--text-main)] truncate">Rati Ranjan</h4>
                        <p className="text-[10px] font-bold text-[color:var(--text-muted)] uppercase tracking-wider truncate">Elite Member</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;