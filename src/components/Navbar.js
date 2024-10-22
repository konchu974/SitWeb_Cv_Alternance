import React from "react";
import "../Css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">A propos</a></li>
          <li><a href="badges.html">Projets</a></li>
          <li>
            <div className="dropdown">
              <div className="dropdown-toggle">Centres d'Intérêt</div>
              <div className="dropdown-options">
                <a href="#">Photo</a>
                <a href="#">Modélisation 3D</a>
                <a href="#">Je sais pas</a>
              </div>
            </div>
          </li>
          <li><a href="badges.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
