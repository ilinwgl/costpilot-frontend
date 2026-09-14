import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>CostPilot</h1>

        <nav>
          <button>Dashboard</button>
          <button>Projects</button>
          <button>Settings</button>
        </nav>
      </aside>

      <main className="content">
        <h2>Dashboard</h2>
        <p>Welcome to CostPilot.</p>
      </main>
    </div>
  );
}

export default App;