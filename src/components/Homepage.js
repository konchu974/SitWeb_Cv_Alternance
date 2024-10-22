import React from "react";
import "../Css/Homepage.css";
import backgroundPOS from "../Assets/backgroundPOS.jpg";
import brickbreaker from "../Assets/brickbreaker.png";
import centerImage from "../Assets/profilpic.png";

const diameter = 30; // en vh, que tu peux ajuster en fonction de la taille réelle
const radius = diameter / 2; // Rayon du cercle
const center = radius; // Centre du cercle en x et y

function Home() {
  return (
    <div className="container">
      <div className="frameHome">
        <div className="pict_box gradient-effectfirst ">
          <img
            src={backgroundPOS}
            alt="Background POS"
            className="image-class "
          />
          <div>
            <h2>Awesome Title</h2>
            <p>This hover effect is totally awesome.</p>
          </div>
        </div>
        <div className="center-content">
          <div className="center-picture">
            <svg
              id="rotatingText"
              viewBox={`0 0 ${diameter} ${diameter}`} // Ajuste le viewBox en fonction du diamètre
              width={`${diameter}vh`} // Définit la largeur du SVG
              height={`${diameter}vh`} // Définit la hauteur du SVG
            >
              <defs>
                <path
                  id="circle"
                  d={`M ${center}, ${center} 
             m -${radius}, 0 
             a ${radius}, ${radius} 0 1, 0 ${diameter}, 0 
             a ${radius}, ${radius} 0 1, 0 -${diameter}, 0`} // Chemin pour le cercle
                />
              </defs>
              <text width="400">
                <textPath
                  alignmentBaseline="top" // Assure-toi que l'attribut est en camelCase
                  href="#circle" // Référence au chemin du cercle
                  className="text"
                >
                  -Developpeur concepteur d'application{" "}
                </textPath>
              </text>
            </svg>
            <img
              src={centerImage}
              alt="Image centrale"
              className="image-center"
            />
          </div>
          <p className="center-text">
            <h1>Dugain Clarence</h1>
            Recherche alternance en developpement Web
          </p>
        </div>
        <div className="pict_box gradient-effectsec">
          <img
            src={brickbreaker}
            alt="Background POS"
            className="image-class"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
