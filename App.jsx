import React from "react";
import "./App.css";

function App() {
  const stats = [
    {
      icon: "📋",
      title: "Total Projects",
      value: "24",
      color: "purple"
    },
    {
      icon: "☷",
      title: "Total Tasks",
      value: "1,248",
      color: "blue"
    },
    {
      icon: "👥",
      title: "Active Members",
      value: "18",
      color: "green"
    },
    {
      icon: "◷",
      title: "Pending Tasks",
      value: "96",
      color: "orange"
    }
  ];

  const tasks = [
    {
      task: "Create UI prototype",
      project: "Image Labeling",
      assignee: "VK",
      status: "Completed"
    },
    {
      task: "Validate dataset",
      project: "Sports AI Tool",
      assignee: "RJ",
      status: "In Progress"
    },
    {
      task: "Update evaluation script",
      project: "Model QA",
      assignee: "KC",
      status: "Pending"
    },
    {
      task: "Prepare QA report",
      project: "QC Monitoring",
      assignee: "AM",
      status: "In Progress"
    },
    {
      task: "Sync log files",
      project: "Data Pipeline",
      assignee: "VK",
      status: "Pending"
    }
  ];

  const projects = [
    {
      icon: "♦",
      name: "Image Labeling",
      members: "5 members",
      status: "Active"
    },
    {
      icon: "♢",
      name: "Sports AI Tool",
      members: "4 members",
      status: "Active"
    },
    {
      icon: "▣",
      name: "Model QA",
      members: "3 members",
      status: "On Hold"
    },
    {
      icon: "▤",
      name: "QC Monitoring",
      members: "4 members",
      status: "Active"
    },
    {
      icon: "⚒",
      name: "Data Pipeline",
      members: "2 members",
      status: "Active"
    }
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <span className="logo-icon">✦</span>
          PulseWorks AI
        </div>

        <nav className="navigation">
          <a className="nav-link active">
            <span>⌂</span> Dashboard
          </a>

          <a className="nav-link">
            <span>◈</span> Projects
          </a>

          <a className="nav-link">
            <span>▤</span> Tasks
          </a>

          <a className="nav-link">
            <span>♧</span> Team
          </a>

          <a className="nav-link">
            <span>▣</span> Reports
          </a>

          <a className="nav-link">
            <span>⚙</span> Settings
          </a>
        </nav>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Top Search Bar */}
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search projects, tasks, or teams..."
            />
          </div>

          <div className="profile">
            <span>🔔</span>
            <div className="profile-avatar">J</div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <h1>Welcome back, Jayaruba👋</h1>
            <p>Here's what's happening at PulseWorks AI today.</p>
          </div>

          <span className="date">Nov 25, 2026</span>
        </section>

        {/* Statistics Cards */}
        <section className="stats-container">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <div className={`stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>

            </div>
          ))}

        </section>

        {/* Dashboard Bottom Section */}
        <section className="dashboard-grid">

          {/* Recent Tasks */}
          <div className="panel recent-tasks">

            <div className="panel-heading">
              <h2>Recent Tasks</h2>
              <a href="#">View All →</a>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Project</th>
                    <th>Assignee</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((item, index) => (
                    <tr key={index}>
                      <td>{item.task}</td>
                      <td>{item.project}</td>
                      <td>
                        <div className="assignee">
                          {item.assignee}
                        </div>
                      </td>
                      <td>
                        <span
                          className={`status ${
                            item.status
                              .toLowerCase()
                              .replace(" ", "-")
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

          </div>

          {/* Active Projects */}
          <div className="panel active-projects">

            <div className="panel-heading">
              <h2>Active Projects</h2>
              <a href="#">View All →</a>
            </div>

            <div className="project-list">

              {projects.map((project, index) => (
                <div className="project-item" key={index}>

                  <div className={`project-icon project-${index}`}>
                    {project.icon}
                  </div>

                  <div className="project-info">
                    <h4>{project.name}</h4>
                    <p>{project.members}</p>
                  </div>

                  <span
                    className={`project-status ${
                      project.status === "Active"
                        ? "active-status"
                        : "hold-status"
                    }`}
                  >
                    {project.status}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;