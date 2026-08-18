import {
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "./HomeSidebar.css";

function HomeSidebar() {
  return (
    <aside className="home-sidebar glass">

      <div className="sidebar-title">
        WORKSPACE
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <MessageSquare size={17} />

          <span>
            Chat With Agent
          </span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <LayoutDashboard size={17} />

          <span>
            Dashboard
          </span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default HomeSidebar;