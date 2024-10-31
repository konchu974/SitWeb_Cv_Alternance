import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Skills.css";

const API_URL = "http://localhost:5000/api/skills"; // URL constant

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSkills = async () => {
    setLoading(true); // Start loading state
    try {
      const response = await axios.get(API_URL);
      setSkills(response.data.skills);
      setError(""); // Clear any previous error
    } catch (err) {
      console.error(err);
      setError("Error loading skills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>{error}</p>
      <button onClick={fetchSkills}>Retry</button>
    </div>
  );

  const currentSkills = skills.find(skill => skill.id === "hardskills");
  const categoriesToDisplay = currentSkills?.categories || [];

  return (
    <>
      <div className="hard-skills" style={{ backgroundColor: "#f3892c" }}>
        <h2>Hard Skills</h2>
      </div>
      <div className="content">
        {categoriesToDisplay.length > 0 ? (
          categoriesToDisplay.map(category => (
            <div key={category.category} className="category-box">
              <h2>{category.category}</h2>
              <div className="skills">
                {category.skills.map(skill => (
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
