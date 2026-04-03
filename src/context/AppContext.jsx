import { createContext, useContext, useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("vault_transactions");
        return saved ? JSON.parse(saved) : initialData;
    });
    const [role, setRole] = useState("viewer");
    const [filter, setFilter] = useState("all");
    const [toast, setToast] = useState({ message: "", type: "info", visible: false });

    // Sync transactions to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("vault_transactions", JSON.stringify(transactions));
    }, [transactions]);

    const showToast = (message, type = "success") => {
        setToast({ message, type, visible: true });
    };

    const hideToast = () => {
        setToast((prev) => ({ ...prev, visible: false }));
    };

    const addTransaction = (tx) => {
        setTransactions((prev) => [...prev, { ...tx, id: Date.now() }]);
        showToast("Transaction logged successfully", "success");
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((tx) => tx.id !== id));
        showToast("Transaction deleted", "error");
    };

    const updateTransaction = (updatedTx) => {
        setTransactions((prev) =>
            prev.map((tx) => (tx.id === updatedTx.id ? updatedTx : tx))
        );
        showToast("Transaction updated securely", "success");
    };

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
                updateTransaction,
                role,
                setRole,
                filter,
                setFilter,
                toast,
                showToast,
                hideToast,
            }}
        >
            {children}
        </AppContext.Provider>

    );
};

export const useApp = () => useContext(AppContext);