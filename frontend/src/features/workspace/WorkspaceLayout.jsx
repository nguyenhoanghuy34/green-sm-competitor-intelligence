import { MessageSquare, LayoutDashboard } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

import "./WorkspaceLayout.css";

function WorkspaceLayout() {
  return (
    <div className="workspace">

      <aside className="workspace-sidebar glass">

        <div className="sidebar-title">
          WORKSPACE
        </div>

        <nav className="sidebar-nav">

          <NavLink
  to="/home/chat-with-agent"
  className={({ isActive }) =>
    `sidebar-item ${isActive ? "active" : ""}`
  }
>
  <MessageSquare size={17} />
  <span>Chat With Agent</span>
</NavLink>

<NavLink
  to="/home/dashboard"
  className={({ isActive }) =>
    `sidebar-item ${isActive ? "active" : ""}`
  }
>
  <LayoutDashboard size={17} />
  <span>Dashboard</span>
</NavLink>

        </nav>

      </aside>

      <main className="workspace-content">
        <Outlet />
      </main>

    </div>
  );
}

export default WorkspaceLayout;