import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importez le composant Link
import "../Css/Navbar.css";
import "../Css/Responssive/ResNavbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <span className="color-p">P</span>ort
          <span className="color-f">F</span>olio
        </Link>

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
          <li><Link to="/#apropos">A propos</Link></li>
          <li><Link to="/project">Projets</Link></li>
          <li><Link to="/gallery">Centres d'Intérêt</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
