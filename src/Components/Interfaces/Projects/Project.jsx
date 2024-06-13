import React from "react";
import "./Projects.css";
import ItemBackGround from "./SvgItems/ItemBackGround";

function Project({ project, animate }) {
  return (
    <div
      className={`slider-item-container-project ${
        animate ? "projects-interaction" : "projects-no-interaction"
      } `}
    >
      {/* <img src={project.img} alt={project.alt} /> */}

      <div className="slider-item-container-project-img">
        {/* <img src={project.img} alt={project.alt} /> */}
      </div>
      {/* <div className="slider-item-container-project-info">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href="#"></a>
      </div> */}
      <ItemBackGround project={project} animate={animate}></ItemBackGround>
    </div>
  );
}

export default Project;
