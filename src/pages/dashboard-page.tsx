function DashboardPage() {
  return (
    <>
      <header className="page-header">
        <div>
          <h2>Dashboard</h2>

          <p className="page-subtitle">
            Manage your construction cost estimation projects.
          </p>
        </div>

        <button className="primary-button">
          New Project
        </button>
      </header>

      <section className="content-section">
        <h3>Recent Projects</h3>

        <div className="project-grid">
          <div className="project-card">
            <h4>Frankfurt Hbf</h4>
            <p>42 Positions</p>

            <span className="project-status">
              In Progress
            </span>
          </div>

          <div className="project-card">
            <h4>Demo Project</h4>
            <p>18 Positions</p>

            <span className="project-status">
              Ready
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardPage;