import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/About.css";

const About = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isHardSkills, setIsHardSkills] = useState(true); // pour alterner entre Hard et Soft Skills

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/skills"); // Mettez à jour l'URL si besoin
        setSkills(response.data.skills);
      } catch (err) {
        setError("Error loading skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const toggleSkills = () => {
    setIsHardSkills(!isHardSkills); // Alterner entre les Hard Skills et les Soft Skills
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const currentSkills = isHardSkills
    ? skills.find((skill) => skill.id === "hardskills")
    : skills.find((skill) => skill.id === "softskill");

  // Vérifiez que currentSkills est défini avant de tenter d'accéder à ses propriétés
  const skillsToDisplay =
    currentSkills && currentSkills.skills ? currentSkills.skills : [];

  return (
    <>
      <div
        className="hard-skills"
        style={{
          backgroundColor: isHardSkills ? "#f3892c" : "#303b5f", // Change la couleur de fond
        }}
      >
        <div className="header">
          <div className="arrow" onClick={toggleSkills}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isHardSkills ? "Hard Skills" : "Soft Skills"}
          <div className="arrow" onClick={toggleSkills}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width=""
              height=""
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="content"
        style={{
          backgroundColor: isHardSkills ? "#f3892c" : "#303b5f", // Change la couleur de fond
        }}
      >
        {skillsToDisplay.map((skill, index) => (
          <div key={skill} className="skill-item">
            <span>{skill}</span>
            {currentSkills.icon[index] && (
              <span
                className="icon"
                dangerouslySetInnerHTML={{ __html: currentSkills.icon[index] }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
