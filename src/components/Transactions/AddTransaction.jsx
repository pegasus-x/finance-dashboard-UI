import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { PlusCircle, Calendar, Hash, Tag, Layers } from "lucide-react";

const AddTransaction = () => {
    const { addTransaction } = useApp();

    const [form, setForm] = useState({
        date: "",
        amount: "",
        category: "",
        type: "expense",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.date || !form.amount || !form.category) return;
        addTransaction({ ...form, amount: Number(form.amount) });
        // Reset form after submission
        setForm({
            date: "",
            amount: "",
            category: "",
            type: "expense",
        });
    };

    return (
        <div className="glass-panel p-6 md:p-8 rounded-3xl mb-8 relative overflow-hidden transition-all duration-300">
            {/* Subtle Gradient Glow inside the box */}
            <div className="absolute top-0 right-0 w-[500px] h-full bg-[color:var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
                <PlusCircle className="w-6 h-6 text-[color:var(--accent)]" />
                <h3 className="text-xl font-bold tracking-tight text-[color:var(--text-main)]">Add New Transaction</h3>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
            >
                {/* Date Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[color:var(--text-muted)] uppercase tracking-wider ml-1">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <input
                            type="date"
                            required
                            className="w-full bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all"
                            value={form.date}
                            onChange={(e) =>
                                setForm({ ...form, date: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Amount Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[color:var(--text-muted)] uppercase tracking-wider ml-1">Amount (₹)</label>
                    <div className="relative">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <input
                            type="number"
                            required
                            placeholder="0.00"
                            className="w-full bg-[color:var(--input-bg)] text-[color:var(--text-main)] placeholder-[color:var(--text-muted)] border border-[color:var(--card-border)] rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all"
                            value={form.amount}
                            onChange={(e) =>
                                setForm({ ...form, amount: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Category Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[color:var(--text-muted)] uppercase tracking-wider ml-1">Category</label>
                    <div className="relative">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <input
                            type="text"
                            required
                            placeholder="e.g. Freelance, Food"
                            className="w-full bg-[color:var(--input-bg)] text-[color:var(--text-main)] placeholder-[color:var(--text-muted)] border border-[color:var(--card-border)] rounded-xl py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all"
                            value={form.category}
                            onChange={(e) =>
                                setForm({ ...form, category: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Type Select */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-[color:var(--text-muted)] uppercase tracking-wider ml-1">Type</label>
                    <div className="relative">
                        <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
                        <select
                            className="appearance-none w-full bg-[color:var(--input-bg)] text-[color:var(--text-main)] border border-[color:var(--card-border)] rounded-xl py-2.5 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] transition-all cursor-pointer font-bold"
                            value={form.type}
                            onChange={(e) =>
                                setForm({ ...form, type: e.target.value })
                            }
                        >
                            <option className="bg-[color:var(--bg-main)] text-[color:var(--danger)]" value="expense">Expense</option>
                            <option className="bg-[color:var(--bg-main)] text-[color:var(--success)]" value="income">Income</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col justify-end lg:col-span-1 mt-2 lg:mt-0">
                    <button type="submit" className="w-full py-2.5 px-4 bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-white font-bold rounded-xl shadow-lg shadow-[color:var(--accent)]/30 transition-all active:scale-[0.98]">
                        Append Record
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;