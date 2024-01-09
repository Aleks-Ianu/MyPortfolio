import React from "react";
import data from "../../projects.json";

function ProjectCard() {
  const { projects } = data;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5">
      {projects.map((project) => (
        <div className="col">
          <div className="card bg-color-" id={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} className="card-img-top h-20" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
