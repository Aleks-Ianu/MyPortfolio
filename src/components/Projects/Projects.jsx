import React from "react";
import Hero from "../Hero/Hero";
import ProjectCard from "../ProjectCard/ProjectCard";


function Projects () {
return (
    <>
    <Hero backgroundImage="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg">
      <h1>Welcome, My name is Aleks.</h1>
      <h2>A front end Web Developer</h2>
      <img alt="Portfolio's Avatar"  src="https://a0.anyrgb.com/pngimg/422/1054/half-body-model-blond-male-models-to-work-in-an-office-man-delayering-cartoon-man-man-avatar-angry-man-snow-man-thumbnail.png" className="avatarImg" />
    </Hero>
    <div className="m-4">
    <ProjectCard />
    </div>
    </>
)
}


export default Projects;