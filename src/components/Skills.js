import React from "react";
import "./Skills.css";

export default function Skills() {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git & GitHub",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <div id="Skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
