import { MessageSquare, LayoutDashboard } from "lucide-react";

import "./HomeSidebar.css";

function HomeSidebar() {
  return (
    <aside className="home-sidebar glass">

      <div className="sidebar-title">
        WORKSPACE
      </div>

      <nav className="sidebar-nav">

        <button className="sidebar-item active">
          <MessageSquare size={17} />
          <span>Chat With Agent</span>
        </button>

        <button className="sidebar-item">
          <LayoutDashboard size={17} />
          <span>Dashboard</span>
        </button>

      </nav>

    </aside>
  );
}

export default HomeSidebar;
