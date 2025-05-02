import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/Projects.css';

const API_URL = "http://localhost:5000/api/projects";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
