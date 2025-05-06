import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const API_URL = "http://localhost:5000/api/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedProject, setExpandedProject] = useState(null); // Etat pour le projet sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour savoir si la modal est ouverte

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setProjects(response.data.projects); // Suppose que l'API renvoie { projects: [...] }
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

  const handleSeeMoreClick = (project) => {
    setExpandedProject(project);
  };

  const closeSeeMore = () => {
    setExpandedProject(null);
  };

  if (loading) return <p>Chargement en cours...</p>;
  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchProjects}>Réessayer</button>
      </div>
    );

  return (
    <section id="projects">
      <div className="projcard-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`projcard ${project.colorClass}`}
            style={project.customColor ? { '--projcard-color': project.customColor } : {}}
          >
            <div className="projcard-innerbox">
            <img className="projcard-img" src={`http://localhost:5000/images/${project.image}`}alt={project.title} />
              <div className="projcard-textbox">
                <div className="projcard-title">{project.title}</div>
                <div className="projcard-subtitle">{project.subtitle}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">{project.description}</div>
                <div className="projcard-tagbox">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="projcard-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouton "Voir plus" */}
            <button className="btnres_voirplus" onClick={() => handleSeeMoreClick(project)}>
              Voir plus
            </button>
          </div>
        ))}
      </div>

      {/* Section "Voir plus" avec les détails du projet */}
      {expandedProject && (
        <div className="see-more-overlay">
        <div className="see-more-modal">
          <button className="modal-close" onClick={closeSeeMore}>X</button>
      
          {/* Titre */}
          <h2>{expandedProject.title}</h2>
      
          {/* Carrousel d'images du projet */}
          {expandedProject.images && expandedProject.images.length > 0 && (
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {expandedProject.images.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`http://localhost:5000/images/${imgUrl}`}
                    alt={`Project image ${index + 1}`}
                    className="see-more-images"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
      
          {/* Bouton GitHub */}
          <div className="modal-button-container">
            {expandedProject.githubUrl && (
              <a
                href={expandedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btnres_proj">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    { <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#f0f1f2" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>}
                  </svg>
                  GitHub
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
      
      )}
    </section>
  );
}

export default Projects;
