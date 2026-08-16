import { NavLink } from "react-router-dom";
import { User } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          GSMAI
        </NavLink>

        {/* Navigation */}
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            News
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </NavLink>
        </nav>

        {/* User image - temporary */}
        <div className="user-avatar">
          <User size={20} />
        </div>

      </div>
    </header>
  );
}

export default Header;
