import { useState } from "react";

import Sidebar from "./components/sidebar";
import DashboardPage from "./pages/dashboard-page";
import ProjectsPage from "./pages/projects-page";
import SettingsPage from "./pages/settings-page";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  function renderPage() {
    switch (activePage) {
      case "projects":
        return <ProjectsPage />;

      case "settings":
        return <SettingsPage />;

      case "dashboard":
      default:
        return <DashboardPage />;
    }
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;