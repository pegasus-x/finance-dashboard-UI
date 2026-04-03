// components/ThemeProvider.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: any) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const isDark = saved === "dark";

        setDark(isDark);
        applyTheme(isDark);
    }, []);

    const applyTheme = (isDark: boolean) => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    };

    const toggleTheme = () => {
        const newTheme = !dark;
        setDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        applyTheme(newTheme);
    };

    return (
        <div className="min-h-screen text-[color:var(--text-main)] transition-colors duration-300">
            {children(toggleTheme, dark)}
        </div>
    );
}