import { UserProvider } from "./context/UserContext";
import Profile from "./Profile.jsx";
import Dashboard from "./Dashboard.jsx";
import "./index.css";

export default function App() {
  return (
    <UserProvider>
      <div className="app">

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo"> ContextHub</div>
          <span className="nav-badge">React Demo</span>
        </nav>

        {/* Main Section */}
        <main className="main-content">

          {/* Heading */}
          <section className="hero">
            <p className="eyebrow">REACT • USECONTEXT</p>

            <h1>
              One state.
              <br />
              <span>Multiple components.</span>
            </h1>

            <p>
              Share data between components
              without passing props manually.
            </p>
          </section>

          {/* Components */}
          <div className="cards">

            <section className="card profile-card">
              <div className="card-icon">👤</div>
              <p className="card-label">USER PROFILE</p>

              <Profile />

              <p className="muted">
                Data from UserContext
              </p>
            </section>

            <section className="card dashboard-card">
              <div className="card-icon">📊</div>
              <p className="card-label">DASHBOARD</p>

              <Dashboard />
            </section>

          </div>

          {/* Footer */}
          <footer>
            <span className="status-dot"></span>
            Powered by React Context API
          </footer>

        </main>
      </div>
    </UserProvider>
  );
}