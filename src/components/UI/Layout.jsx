import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Toast from "./Toast";

const Layout = ({ children, toggleTheme, dark, currentPage, setPage }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex bg-[color:var(--bg-main)] text-[color:var(--text-main)] font-sans relative w-full max-w-[100vw] overflow-x-hidden">
            {/* Ethereal Global Ambient Glows */}
            <div className={`fixed top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full ${dark ? 'bg-cyan-600/15' : 'bg-purple-400/20'} blur-[140px] pointer-events-none transition-colors duration-700`} />
            <div className={`fixed bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full ${dark ? 'bg-violet-600/15' : 'bg-blue-400/20'} blur-[140px] pointer-events-none transition-colors duration-700`} />
            <div className={`fixed top-[40%] left-[20%] w-[30%] h-[30%] rounded-full ${dark ? 'bg-emerald-500/5' : 'bg-pink-300/10'} blur-[120px] pointer-events-none transition-colors duration-700`} />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} currentPage={currentPage} setPage={setPage} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Navbar */}
                <Navbar 
                    toggleTheme={toggleTheme} 
                    dark={dark} 
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                
                {/* Page Content */}
                <main className="flex-1 p-4 md:p-8 space-y-6 md:space-y-8 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
            
            <Toast />
        </div>
    );
};

export default Layout;