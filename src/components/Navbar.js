import React from "react";
import "../Css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
      <a href="/" class="brand-logo">
    <span class="color-p">P</span>ort<span class="color-f">F</span>olio
</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">A propos</a></li>
          <li><a href="/project">Projets</a></li>
          <li><a href="/gallery">Centres d'Intérêt</a></li>
          <li><a href="badges.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
