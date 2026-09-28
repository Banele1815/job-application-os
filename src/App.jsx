import { NavLink, Routes, Route } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Target,
  ClipboardList,
  User,
  Settings,
} from "lucide-react";

import Jobs from "./pages/Jobs";
import Matches from "./pages/Matches";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import SettingsPage from "./pages/Settings";

function Dashboard() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">JOB SEARCH</p>
          <h1>Dashboard</h1>
        </div>

        <button className="profile-button">
          BK
        </button>
      </header>

      <section className="welcome">
        <div>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>Let's find your next opportunity.</h2>
          <p>
            Your job search activity, matches and applications in one place.
          </p>
        </div>

        <NavLink to="/jobs" className="primary-button">
          Find Jobs
        </NavLink>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Jobs Found</span>
          <strong>0</strong>
          <small>Waiting for job sources</small>
        </div>

        <div className="stat-card">
          <span>Strong Matches</span>
          <strong>0</strong>
          <small>Based on your profile</small>
        </div>

        <div className="stat-card">
          <span>Applications</span>
          <strong>0</strong>
          <small>Applications tracked</small>
        </div>

        <div className="stat-card">
          <span>Interviews</span>
          <strong>0</strong>
          <small>Upcoming interviews</small>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">JOB DISCOVERY</p>
              <h3>Recent Jobs</h3>
            </div>

            <NavLink to="/jobs" className="text-button">
              View all
            </NavLink>
          </div>

          <div className="empty-state">
            <Briefcase size={32} />
            <h4>No jobs yet</h4>
            <p>
              Once we connect your first job source, matching jobs will appear
              here.
            </p>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">APPLICATION PIPELINE</p>
              <h3>Application Status</h3>
            </div>
          </div>

          <div className="pipeline">
            <div>
              <span>Saved</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Preparing</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Submitted</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Interview</span>
              <strong>0</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: Briefcase,
    },
    {
      name: "Matches",
      path: "/matches",
      icon: Target,
    },
    {
      name: "Applications",
      path: "/applications",
      icon: ClipboardList,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">J</div>
          <span>JobOS</span>
        </div>

        <nav className="navigation">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-mini">
            <div className="avatar">BK</div>

            <div>
              <strong>Banele Kubeka</strong>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;