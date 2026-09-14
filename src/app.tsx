import { useState } from "react";

import Sidebar from "./components/sidebar";
import DashboardPage from "./pages/dashboard-page";
import ProjectRegistrationPage from "./pages/project-registration-page";
import ProjectsPage from "./pages/projects-page";
import SettingsPage from "./pages/settings-page";
import ProjectDetailPage from "./pages/project-detail-page";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  function renderPage() {
    switch (activePage) {
      case "projects":
        return <ProjectsPage />;

      case "project-registration":
        return (
          <ProjectRegistrationPage
            onCancel={() => setActivePage("dashboard")}
            onCreate={() => setActivePage("project-detail")}
          />
        );

      case "project-detail":
        return <ProjectDetailPage />;

      case "settings":
        return <SettingsPage />;

      case "dashboard":
      default:
        return (
          <DashboardPage
            onNewProject={() => setActivePage("project-registration")}
          />
        );
    }
  }

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
