import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Projects.css';

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
            <img className="projcard-img" src={project.image} alt={project.title} />
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
            <button className="btnres_proj" onClick={() => handleSeeMoreClick(project)}>
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
            
            {/* Afficher les détails du projet */}
            <h2>{expandedProject.title}</h2>
            <video
              className="see-more-video"
              src={expandedProject.video}
              autoPlay
              loop
              muted
              controls={true}
            />
            <div className="modal-button-container">
              {/* Bouton GitHub dans la modal */}
              {expandedProject.githubUrl && (
                <a
                  href={expandedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btnres_proj">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
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
