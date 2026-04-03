import { useApp } from "../../context/AppContext";
import { Moon, Sun, Bell, Settings, Menu } from "lucide-react";

const Navbar = ({ toggleTheme, dark, onMenuClick }) => {
    const { role, setRole } = useApp();

    return (
        <header className="px-4 md:px-8 py-4 flex items-center justify-between bg-transparent">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    className="p-2 lg:hidden text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors"
                    onClick={onMenuClick}
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Purposely empty to keep the header extremely clean and minimal */}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* Theme Toggle (like a switch) */}
                <button
                    onClick={toggleTheme}
                    className="flex justify-between items-center w-14 h-7 rounded-full bg-[color:var(--card-border)] p-1 relative transition-colors border border-[color:var(--card-border)]/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]"
                    aria-label="Toggle Theme"
                >
                    <Moon className="w-3.5 h-3.5 text-[color:var(--accent)]" />
                    <Sun className="w-3.5 h-3.5 text-yellow-500" />
                    {/* Toggle Slider */}
                    <div
                        className={`absolute w-5 h-5 bg-[color:var(--bg-main)] rounded-full shadow-lg transition-transform duration-500 ease-spring ${dark ? "translate-x-0" : "translate-x-7"
                            }`}
                        style={{ left: "4px" }}
                    />
                </button>

                <button className="hidden sm:block p-2 rounded-full hover:bg-[color:var(--card-border)] text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">
                    <Bell className="w-6 h-6" />
                </button>
                <button className="hidden sm:block p-2 rounded-full hover:bg-[color:var(--card-border)] text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">
                    <Settings className="w-6 h-6" />
                </button>

                {/* Role Switch Pill */}
                <div className="flex items-center ml-2 border-l border-[color:var(--card-border)]/50 pl-2 md:pl-4">
                    <div className="flex items-center bg-[color:var(--input-bg)] rounded-[14px] p-1 border border-[color:var(--card-border)]/50 mr-2 md:mr-3 shadow-inner">
                        <button
                            onClick={() => setRole("viewer")}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-[10px] transition-all duration-300 ${role === "viewer"
                                    ? "bg-[color:var(--card-bg)] text-[color:var(--text-main)] shadow-sm shadow-black/20"
                                    : "text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] hover:bg-[color:var(--card-bg)]/50"
                                }`}
                        >
                            Viewer
                        </button>
                        <button
                            onClick={() => setRole("admin")}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-[10px] transition-all duration-300 ${role === "admin"
                                    ? "bg-[color:var(--danger)]/10 text-[color:var(--danger)] shadow-sm shadow-red-900/10"
                                    : "text-[color:var(--text-muted)] hover:text-[color:var(--danger)] hover:bg-[color:var(--danger)]/5"
                                }`}
                        >
                            Admin
                        </button>
                    </div>

                    <div className="relative group cursor-pointer border border-[color:var(--card-border)]/50 rounded-full flex items-center justify-center w-9 h-9 bg-[color:var(--accent)]/10 text-[color:var(--accent)] text-sm font-bold shadow-inner">
                        <div className="absolute inset-0 bg-[color:var(--accent)] rounded-full blur-[8px] opacity-40 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10 tracking-widest">RR</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;