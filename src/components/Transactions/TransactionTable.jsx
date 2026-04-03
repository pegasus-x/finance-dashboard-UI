import { useApp } from "../../context/AppContext";
import { useState } from "react";
import { Search, Filter, ArrowUpDown, Edit2, Trash2, Check, X, TrendingUp, TrendingDown } from "lucide-react";

const TransactionTable = () => {
    const {
        transactions,
        role,
        deleteTransaction,
        updateTransaction,
    } = useApp();

    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortBy, setSortBy] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});

    // 🔍 Filter
    const filtered = transactions
        .filter((tx) =>
            tx.category.toLowerCase().includes(search.toLowerCase())
        )
        .filter((tx) =>
            filterType === "all" ? true : tx.type === filterType
        );

    // ↕ Sort
    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "amount") return b.amount - a.amount;
        if (sortBy === "date") return new Date(b.date) - new Date(a.date);
        return 0;
    });

    return (
        <div className="bg-[color:var(--card-bg)] p-6 md:p-8 rounded-3xl border border-[color:var(--card-border)] shadow-sm">
            {/* 🔍 Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[color:var(--text-muted)]" />
                    <input
                        type="text"
                        placeholder="Search category..."
                        className="w-full bg-[color:var(--input-bg)] text-[color:var(--text-main)] placeholder-[color:var(--text-muted)] border border-[color:var(--card-border)] rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex gap-4">
                    <div className="relative">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <select
                            className="appearance-none bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] rounded-xl py-3 pl-11 pr-10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] cursor-pointer"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option className="bg-[color:var(--bg-main)]" value="all">All Types</option>
                            <option className="bg-[color:var(--bg-main)]" value="income">Income</option>
                            <option className="bg-[color:var(--bg-main)]" value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="relative">
                        <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <select
                            className="appearance-none bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] rounded-xl py-3 pl-11 pr-10 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] cursor-pointer"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option className="bg-[color:var(--bg-main)]" value="">Sort By</option>
                            <option className="bg-[color:var(--bg-main)]" value="amount">Amount</option>
                            <option className="bg-[color:var(--bg-main)]" value="date">Date</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 📊 Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr className="border-[color:var(--card-border)] text-[color:var(--text-muted)] text-xs font-medium uppercase tracking-wider">
                            <th className="pb-4 px-4 font-medium border-b border-[color:var(--card-border)]">Date</th>
                            <th className="pb-4 px-4 font-medium border-b border-[color:var(--card-border)]">Category</th>
                            <th className="pb-4 px-4 font-medium border-b border-[color:var(--card-border)]">Type</th>
                            <th className="pb-4 px-4 font-medium border-b border-[color:var(--card-border)]">Amount</th>
                            {role === "admin" && <th className="pb-4 px-4 font-medium border-b border-[color:var(--card-border)] text-right">Actions</th>}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[color:var(--card-border)]">
                        {sorted.length > 0 ? (
                            sorted.map((tx, index) => (
                                <tr 
                                    key={tx.id} 
                                    className="hover:bg-[color:var(--card-border)]/30 transition-colors group animate-in fade-in slide-in-from-bottom-4 duration-500"
                                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                                >
                                    {/* DATE */}
                                    <td className="py-5 px-4">
                                        {editingId === tx.id ? (
                                            <input
                                                type="date"
                                                value={editForm.date}
                                                onChange={(e) =>
                                                    setEditForm({ ...editForm, date: e.target.value })
                                                }
                                                className="bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] p-2 rounded-lg focus:ring-2 focus:ring-[color:var(--accent)] outline-none"
                                            />
                                        ) : (
                                            <span className="font-medium">{tx.date}</span>
                                        )}
                                    </td>

                                    {/* CATEGORY */}
                                    <td className="py-5 px-4">
                                        {editingId === tx.id ? (
                                            <input
                                                value={editForm.category}
                                                onChange={(e) =>
                                                    setEditForm({
                                                        ...editForm,
                                                        category: e.target.value,
                                                    })
                                                }
                                                className="bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] p-2 rounded-lg focus:ring-2 focus:ring-[color:var(--accent)] outline-none"
                                            />
                                        ) : (
                                            <span className="font-medium text-[color:var(--text-main)]">{tx.category}</span>
                                        )}
                                    </td>

                                    {/* TYPE */}
                                    <td className="py-5 px-4">
                                        {editingId === tx.id ? (
                                            <select
                                                value={editForm.type}
                                                onChange={(e) =>
                                                    setEditForm({
                                                        ...editForm,
                                                        type: e.target.value,
                                                    })
                                                }
                                                className="bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] p-2 rounded-lg focus:ring-2 focus:ring-[color:var(--accent)] outline-none"
                                            >
                                                <option className="bg-[color:var(--bg-main)]" value="income">Income</option>
                                                <option className="bg-[color:var(--bg-main)]" value="expense">Expense</option>
                                            </select>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <div className={`p-1.5 rounded-md ${tx.type === 'income' ? 'bg-[color:var(--success)]/10 text-[color:var(--success)]' : 'bg-[color:var(--danger)]/10 text-[color:var(--danger)]'}`}>
                                                    {tx.type === 'income' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                                </div>
                                                <span className={`text-xs font-semibold capitalize ${tx.type === 'income' ? 'text-[color:var(--success)]' : 'text-[color:var(--danger)]'}`}>
                                                    {tx.type}
                                                </span>
                                            </div>
                                        )}
                                    </td>

                                    {/* AMOUNT */}
                                    <td className="py-5 px-4 font-medium">
                                        {editingId === tx.id ? (
                                            <div className="flex items-center gap-1">
                                                <span>₹</span>
                                                <input
                                                    type="number"
                                                    value={editForm.amount}
                                                    onChange={(e) =>
                                                        setEditForm({
                                                            ...editForm,
                                                            amount: Number(e.target.value),
                                                        })
                                                    }
                                                    className="w-24 bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] p-2 rounded-lg focus:ring-2 focus:ring-[color:var(--accent)] outline-none"
                                                />
                                            </div>
                                        ) : (
                                            <span className={tx.type === "income" ? "text-[color:var(--success)]" : "text-[color:var(--text-main)]"}>
                                                {tx.type === "income" ? "+" : ""}₹{tx.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                                            </span>
                                        )}
                                    </td>

                                    {/* ACTIONS */}
                                    {role === "admin" && (
                                        <td className="py-5 px-4 text-right">
                                            {editingId === tx.id ? (
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        className="p-2 bg-[color:var(--success)]/10 text-[color:var(--success)] hover:bg-[color:var(--success)]/20 rounded-lg transition-colors border border-[color:var(--success)]/20 shadow-sm shadow-[color:var(--success)]/10"
                                                        onClick={() => {
                                                            updateTransaction({ ...editForm, id: tx.id });
                                                            setEditingId(null);
                                                        }}
                                                        title="Save Changes"
                                                    >
                                                        <Check size={18} />
                                                    </button>

                                                    <button
                                                        className="p-2 bg-[color:var(--card-border)] hover:bg-[color:var(--card-border)]/80 text-[color:var(--text-muted)] hover:text-white rounded-lg transition-colors border border-[color:var(--card-border)] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                                                        onClick={() => setEditingId(null)}
                                                        title="Cancel"
                                                    >
                                                        <X size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        className="p-2 bg-[color:var(--accent)]/10 text-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white rounded-lg transition-all"
                                                        onClick={() => {
                                                            setEditingId(tx.id);
                                                            setEditForm(tx);
                                                        }}
                                                        title="Edit"
                                                    >
                                                        <Edit2 size={16} />
                                                    </button>

                                                    <button
                                                        className="p-2 bg-[color:var(--danger)]/10 text-[color:var(--danger)] hover:bg-[color:var(--danger)] hover:text-white rounded-lg transition-all"
                                                        onClick={() => deleteTransaction(tx.id)}
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-16 text-[color:var(--text-muted)]">
                                    <div className="flex flex-col items-center justify-center space-y-3">
                                        <div className="w-16 h-16 rounded-full bg-[color:var(--card-border)] flex items-center justify-center">
                                            <Search className="w-8 h-8 text-[color:var(--text-muted)]/50" />
                                        </div>
                                        <p className="text-lg font-medium text-[color:var(--text-main)]">No transactions found</p>
                                        <p className="text-sm">Try adjusting your search or filters to find what you're looking for.</p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;