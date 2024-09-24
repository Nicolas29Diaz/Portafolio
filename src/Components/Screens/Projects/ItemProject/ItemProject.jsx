import React from "react";
// import "./Projects.css";
import ItemBackGround from "../ItemBackground/ItemBackGround";
import "./ItemProject.css";

function ItemProject({ project, animate, interaction }) {
  return (
    <>
      {project.title !== "" && (
        <div
          className={`projects-containerSliderItem ${
            interaction ? "interaction" : "noInteraction"
          }`}
        >
          <>
            <ItemBackGround
              project={project}
              animate={animate}
            ></ItemBackGround>

            <img
              src={project.img}
              style={{
                display: `${project.title === "" ? "none" : "block"}`,
                position: "absolute",
                top: "50px",
                left: "0",
                height: "300px",
                width: "300px",
                objectFit: "cover",
                // clipPath: "url(#imageMask2)",
                clipPath:
                  "polygon(12% 17%, 92% 17%, 92% 38% , 98% 44%, 98% 78%, 12% 78%",
              }}
            />

            <article className="ulContainer">
              <ul>
                <li>
                  <h1>{project.title}</h1>
                </li>
                <li>
                  <ul id="techList">
                    {project.techs.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <p>{project.description}</p>
                </li>
              </ul>
            </article>

            {/* <div
              style={{
                position: "absolute",
                top: "310px",
                left: "50px",
                width: "230px",
                height: "40px",
              }}
            >
              <h1 className="titleProject">{project.title}</h1>
            </div>
            <div
              style={{
                position: "absolute",
                top: "360px",
                left: "70px",
                backgroundColor: "blue",
                width: "210px",
                height: "130px",
                // overflowY: "scroll",
              }}
            >
              {project.description}
            </div> */}
          </>
        </div>
      )}
    </>
  );
}

export default ItemProject;
