import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";
import Layout from "./components/UI/Layout";

function App() {
  const [page, setPage] = useState("dashboard");

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