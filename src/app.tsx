import Sidebar from "./components/sidebar";
import DashboardPage from "./pages/dashboard-page";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <DashboardPage />
      </main>
    </div>
  );
}

export default App;