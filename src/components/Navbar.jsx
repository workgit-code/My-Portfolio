// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

function Navbar({}) {
  return (
    <nav className="navbar-items">
      <div className="menu-icons"></div>
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <Link
          to="projects"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li>Projects</li>
        </Link>
        <li>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;
