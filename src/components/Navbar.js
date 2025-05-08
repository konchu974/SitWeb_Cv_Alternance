import React, { useState } from "react";
import "../Css/Navbar.css";
import "../Css/Responssive/ResNavbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <span className="color-p">P</span>ort
          <span className="color-f">F</span>olio
        </a>

        {/* bouton hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>

        {/* votre menu */}
        <ul
          id="nav-mobile"
          className={isOpen ? "open" : ""}
        >
          <li><a href="/#apropos">A propos</a></li>
          <li><a href="/project">Projets</a></li>
          <li><a href="/gallery">Centres d'Intérêt</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;