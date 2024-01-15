import React from "react";
import Hero from "../Hero/Hero";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <>
      <Hero backgroundImage="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg">
        <h1>Have a look at my Projects</h1>
      </Hero>
      <div className="m-4">
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;
