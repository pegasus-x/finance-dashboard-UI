import TransactionTable from "../components/Transactions/TransactionTable";
import AddTransaction from "../components/Transactions/AddTransaction";
import { useApp } from "../context/AppContext";

const Transactions = () => {
    const { role } = useApp();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Transactions</h2>
            <div className="space-y-6">
                {/* ➕ Show only for Admin */}
                {role === "admin" && <AddTransaction />}
                <TransactionTable />
            </div>
        </div>
    );
};

export default Transactions;