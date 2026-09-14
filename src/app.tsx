import { useState } from "react";

import Sidebar from "./components/sidebar";
import DashboardPage from "./pages/dashboard-page";
import ProjectRegistrationPage from "./pages/project-registration-page";
import ProjectsPage from "./pages/projects-page";
import SettingsPage from "./pages/settings-page";
import ProjectDetailPage from "./pages/project-detail-page";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  function renderPage() {
    switch (activePage) {
      case "projects":
        return <ProjectsPage />;

      case "project-registration":
        return (
          <ProjectRegistrationPage
            onCancel={() => setActivePage("dashboard")}
            onCreated={() => setActivePage("project-detail")}
          />
        );

      case "project-detail":
        if (!currentProjectId) {
          return null;
        }
  
        return <ProjectDetailPage
          projectId={currentProjectId} 
        />;

      case "settings":
        return <SettingsPage />;

      case "dashboard":
      default:
        return (
          <DashboardPage
            onNewProject={() => setActivePage("project-registration")}
            onOpenProject={(projectId) => {
              setCurrentProjectId(projectId);
              setActivePage("project-detail");
            }}
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
