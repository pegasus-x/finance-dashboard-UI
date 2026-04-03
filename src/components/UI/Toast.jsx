import { useApp } from "../../context/AppContext";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useEffect } from "react";

const Toast = () => {
    const { toast, hideToast } = useApp();

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                hideToast();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast.visible, hideToast]);

    if (!toast.visible) return null;

    const icons = {
        success: <CheckCircle2 className="w-5 h-5 text-[color:var(--success)]" />,
        error: <AlertCircle className="w-5 h-5 text-[color:var(--danger)]" />,
        info: <Info className="w-5 h-5 text-[color:var(--accent)]" />
    };

    const borders = {
        success: "border-[color:var(--success)]/40 shadow-[color:var(--success)]/10",
        error: "border-[color:var(--danger)]/40 shadow-[color:var(--danger)]/10",
        info: "border-[color:var(--accent)]/40 shadow-[color:var(--accent)]/10"
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className={`glass-panel p-4 rounded-2xl border ${borders[toast.type]} shadow-xl flex items-center gap-3 pr-12 min-w-[300px]`}>
                {icons[toast.type]}
                <span className="text-sm font-semibold text-[color:var(--text-main)]">
                    {toast.message}
                </span>
                <button 
                    onClick={hideToast}
                    className="absolute right-4 text-[color:var(--text-muted)] hover:text-[color:var(--text-main)] transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
