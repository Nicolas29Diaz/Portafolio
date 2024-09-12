import React from "react";
import "./Projects.css";
import ItemBackGround from "./SvgItems/ItemBackGround";

function Project({ project, animate, interaction }) {
  return (
    <div
      className={`slider-item-container-project ${
        interaction ? "projects-interaction" : "projects-no-interaction"
      } `}
    >
      <ItemBackGround project={project} animate={animate}></ItemBackGround>
    </div>
  );
}

export default Project;
