import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css"; // Ensure correct import

const Header = () => {
  return (
    <header className="header-custom">
      <h1>HR Portal</h1>
      <nav>
        <ul>
          <li><Link to="/">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/Hrhome">HR Dashboard</Link></li>
          <li><Link to="/EmployeeDashboard">Employee Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
