import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0C10]">
            {/* Background Decorative Mesh/Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden select-none">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                    }}
                ></div>
            </div>

            <div className="relative w-32 h-32 flex items-center justify-center mb-10">
                {/* Orbital Outer Ring - Electric Cyan */}
                <div 
                    className="absolute inset-0 border-[1px] border-transparent border-t-[#06B6D4] border-l-[#06B6D4]/20 rounded-full animate-spin"
                    style={{ animationDuration: '4s' }}
                ></div>
                
                {/* Orbital Mid Ring (Reverse) - Deep Violet Gradient */}
                <div 
                    className="absolute inset-4 border-[1px] border-transparent border-b-[#8B5CF6] border-r-[#8B5CF6]/30 rounded-full animate-[spin_2s_linear_infinite_reverse]"
                ></div>

                {/* Inner Core Pulsing Glow */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                    {/* Multi-layered glow */}
                    <div className="absolute inset-[-100%] bg-[#06B6D4] blur-3xl rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute inset-0 bg-[#06B6D4] blur-xl rounded-full opacity-30 animate-pulse"></div>
                    
                    {/* Sharp Inner Core */}
                    <div className="relative w-full h-full bg-[#06B6D4] rounded-full shadow-[0_0_25px_#06B6D4] animate-[pulseScale_2.5s_ease-in-out_infinite] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-2 text-center relative z-10">
                <p className="text-[11px] font-bold text-[#06B6D4] tracking-[0.5em] uppercase opacity-90 animate-pulse">
                    Initializing
                </p>
                <div className="flex items-center justify-center gap-2">
                    <p className="text-lg font-bold text-white tracking-widest pl-[0.5em]">
                        VAULT ACCESS
                    </p>
                </div>
                <div className="flex items-center justify-center gap-1.5 pt-1">
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent"></div>
                </div>
            </div>
        </div>


    );
};

export default Loader;
