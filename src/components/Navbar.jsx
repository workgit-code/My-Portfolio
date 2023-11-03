import React, { useState } from "react";
import { NavbarData } from "./NavbarData.jsx";
import "../stylesheets/Navbar.css";

function Navbar() {
  const [state, setState] = useState(false);
  return (
    <nav className="navbar-items">
      <div className="menu-icons" onClick={() => setState(!state)}></div>
      <h1>Portfolio</h1>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {NavbarData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <li>{item.title}</li>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
