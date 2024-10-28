import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/skills");
        console.log(response.data); // Vérification de la réponse
        setSkills(response.data.skills);
      } catch (err) {
        console.error(err); // Affichage de l'erreur
        setError("Error loading skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Filtrez uniquement les hard skills
  const currentSkills = skills.find((skill) => skill.id === "hardskills");

  console.log(currentSkills); // Vérification des compétences actuelles

  const categoriesToDisplay =
    currentSkills && currentSkills.categories ? currentSkills.categories : [];

  return (
    <>
      <div
        className="hard-skills"
        style={{
          backgroundColor: "#f3892c", // couleur fixe pour les hard skills
        }}
      >
        <h2>Hard Skills</h2>
      </div>
      <div
        className="content"
        style={{
          backgroundColor: "#f3892c", // couleur fixe pour les hard skills
        }}
      >
        {categoriesToDisplay.length > 0 ? (
          categoriesToDisplay.map((category) => (
            <div key={category.category} className="category">
              <h3>{category.category}</h3>
              <div className="skills">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span>{skill.name}</span>
                    {skill.icon && (
                      <span
                        className="icon"
                        dangerouslySetInnerHTML={{ __html: skill.icon }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Aucune compétence à afficher</p>
        )}
      </div>
    </>
  );
};

export default Skills;
