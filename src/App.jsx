import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import Layout from "./components/UI/Layout";
import Loader from "./components/UI/Loader";

function App() {
  const [page, setPage] = useState("dashboard");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeProvider>
      {(toggleTheme, dark) => (
        <Layout toggleTheme={toggleTheme} dark={dark} currentPage={page} setPage={setPage}>
          {page === "dashboard" && <Dashboard />}
          {page === "transactions" && <Transactions />}
          {page === "insights" && <Insights />}
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default App;
