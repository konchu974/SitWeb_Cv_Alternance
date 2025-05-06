import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Homepage.css";
import centerImage from "../Assets/profilpic.png";
import Skills from "./Skills";
import Apropos from "./Apropos";
import ContactForm from "./ContactForm";
import ScrollToTopButton from "./Scrolltoup"; // Adjust path accordingly

const diameter = 30; // en vh, que tu peux ajuster en fonction de la taille réelle
const radius = diameter / 2; // Rayon du cercle
const center = radius; // Centre du cercle en x et y

const API_URL = "http://localhost:5000/api/projects";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setProjects(response.data.projects); // Récupère tous les projets
      setError("");
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des projets.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  if (loading) return <p>Chargement en cours...</p>;
  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchProjects}>Réessayer</button>
      </div>
    );

  // Vérifie qu'il y a assez de projets
  const thirdProject = projects[2]; // Projet 3 (index 2)
  const fourthProject = projects[3];

  return (
    <>
      <div className="container">
        <div className="frameHome">
          <div className="pict_box gradient-effectfirst">
            <img
              src={`http://localhost:5000/images/${thirdProject?.image}`}
              // Image du projet 3
              alt={thirdProject?.title} // Titre du projet 3
              className="image-class"
            />
            <div className="overlay">
              <h2>{thirdProject?.title}</h2>
              <p>{thirdProject?.subtitle}</p>
              <a href={`/project/${thirdProject?.id}`} className="btn-overlay">
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
                    -Concepteur Developpeur d'Application{" "}
                  </textPath>
                </text>
              </svg>
              <img src={centerImage} alt="centrale" className="image-center" />
            </div>
            <div className="center-text">
              <h1>Dugain Clarence</h1>
              <p>
                Actuellement en formation de Concepteur Développeur
                d’Applications à l’AFPA de Brest, je recherche un stage non
                rémunéré de 10 semaines à partir de novembre 2025 pour mettre en
                pratique mes compétences en développement web et logiciel.
              </p>
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
              <a href="https://linktr.ee/dugain.c">
                <button className="btnres">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 80 97.7"
                    style={{ enableBackground: "new 0 0 80 97.7" }}
                  >
                    <path
                      d="M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7l-9.5,9.4L40,49.1
	L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z"
                    ></path>
                  </svg>
                  Linktree
                </button>
              </a>
            </div>
          </div>
          <div className="pict_box gradient-effectsec">
            <img
              src={`http://localhost:5000/images/${fourthProject?.image}`}
              // Image du projet 4
              alt={fourthProject?.title} // Titre du projet 4
              className="image-class"
            />
            <div className="overlay">
              <h2>{fourthProject?.title}</h2>
              <p>{fourthProject?.subtitle}</p>
              <a href={`/project/${fourthProject?.id}`} className="btn-overlay">
                Voir le projet
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="apropos">
        <Apropos />
      </section>
      <Skills />
      <section id="contact">
        <ContactForm />
        <ScrollToTopButton />
      </section>{" "}
    </>
  );
}

export default Home;
