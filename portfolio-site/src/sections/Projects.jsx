import React from "react";
import Project1 from "../image/Project1.png";
import Project2 from "../image/Project2.png";
import "../styling/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Life Coaching",
      description:
        "This site was created for Mrs. Yvonne for her life coaching business.",
      image: Project1,
      link: "https://github.com/JohndaDeveloper/YHoward-Life-Coaching", // Add the link for the project
    },
    {
      title: "User Chat",
      description: 'I recreated my own fan favorite user chat "Aim"',
      image: Project2,
      link: "https://github.com/uprighted-learners/react-chat-johnjason", // Add the link for the project
    },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project"
            key={index}
          >
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
