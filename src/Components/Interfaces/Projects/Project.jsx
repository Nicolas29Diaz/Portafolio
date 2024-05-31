import React from "react";
import "./Projects.css";
function Project({ project }) {
  return (
    <div className="slider-item-container-project">
      <img src={project.img} alt={project.alt} />
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href="#"></a>
      </div>
    </div>
  );
}

export default Project;
