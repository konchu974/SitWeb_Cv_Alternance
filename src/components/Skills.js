import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Skills.css";
import "../Css/Responssive/ResSkills.css";
import IconCarousel from "./IconCarousel"; // adapte le chemin selon ton arborescence

const API_URL = "https://back-dugain.onrender.com/api/skills";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setSkills(response.data.skills);
      setError("");
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
  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchSkills}>Retry</button>
      </div>
    );

  const currentSkills = skills.find((skill) => skill.id === "hardskills");
  const categoriesToDisplay = currentSkills?.categories || [];

  return (
    <>
      <div className="hard-skills">
        <h2 className="titleHard">Hard Skills</h2>
      </div>
      <div className="content">
        {categoriesToDisplay.length > 0 ? (
          categoriesToDisplay.map((category) => (
            <div key={category.category} className="category-box full-width">
              <h2 className="catetitle">{category.category}</h2>
              <IconCarousel items={category.skills} />
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
