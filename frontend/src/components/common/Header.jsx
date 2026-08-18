import { NavLink } from "react-router-dom";
import { UserRound, ChevronDown } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logo-mark">G</span>

          <span className="logo-text">
            GSM<span>AI</span>
          </span>
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

        {/* Right side */}
        <div className="header-right">

          <div className="header-divider" />

          <button className="profile-button">
            <div className="profile-avatar">
              <UserRound size={17} />
            </div>

            <ChevronDown size={15} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;