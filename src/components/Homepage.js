import React from "react";
import "../Css/Homepage.css";
import backgroundPOS from "../Assets/backgroundPOS.jpg";
import brickbreaker from "../Assets/brickbreaker.png";
import centerImage from "../Assets/profilpic.png";
import Skills from "./Skills";
import Apropos from './Apropos';

const diameter = 30; // en vh, que tu peux ajuster en fonction de la taille réelle
const radius = diameter / 2; // Rayon du cercle
const center = radius; // Centre du cercle en x et y

function Home() {
  return (
    <>
      <div className="container">
        <div className="frameHome">
          <div className="pict_box gradient-effectfirst ">
            <img
              src={backgroundPOS}
              alt="Background POS"
              className="image-class "
            />
            <div className="overlay">
              <h2>Titre du Projet</h2>
              <p>Petite description du projet pour donner un aperçu rapide.</p>
              <a href="/project-page" className="btn-overlay">
                Voir le projet
              </a>
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
                alt="centrale"
                className="image-center"
              />
            </div>
            <div className="center-text">
              <h1>Dugain Clarence</h1>
              <p>étudiant en deuxième année de développement
              informatique au CESI de brest.</p>
              <a
                href="https://linkedin.com/in/clarence-dugain-046097208"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnres">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  LinkedIn
                </button>
              </a>
              <a
                href="https://github.com/konchu974"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnres">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  GitHub
                </button>
              </a>
              <a
                href="https://www.discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnres">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    width="16"
                    height="16"
                  >
                    <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                  </svg>
                  Discord
                </button>
              </a>
            </div>
          </div>
          <div className="pict_box gradient-effectsec">
            <img
              src={brickbreaker}
              alt="Background POS"
              className="image-class"
            />
            <div className="overlay">
              <h2>Titre du Projet</h2>
              <p>Petite description du projet pour donner un aperçu rapide.</p>
              <a href="/project-page" className="btn-overlay">
                Voir le projet
              </a>
            </div>
          </div>
        </div>
      </div>
      <Apropos/>
      <Skills />

    </>
  );
}

export default Home;
