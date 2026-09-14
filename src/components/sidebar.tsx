function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="app-title">CostPilot</h1>
      </div>

      <nav className="sidebar-nav">
        <button className="nav-button nav-button-active">
          Dashboard
        </button>

        <button className="nav-button">
          Projects
        </button>

        <button className="nav-button">
          Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;