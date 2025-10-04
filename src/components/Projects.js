import React from "react";
import "./Project.css";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive personal portfolio built with React.",
      link: "",
    },
    {
      title: "ToDo App",
      description:
        "A full-featured task manager with CRUD operations using React and LocalStorage.",
      link: "https://pranav-solanki.github.io/Todo-List/",
    },
    {
      title: "News App",
      description:
        "A News forecast app that fetches real-time data from OpenNewsApp API.",
      link: "https://pranavstech.me",
    },
  ];

  return (
    <div id="Projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a target="_blank" href={`${project.link}`}>
              go
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
