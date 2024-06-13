import React, { useEffect, useState } from "react";
import "./SVG.css";

function ItemBackGround({ project, animate }) {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 740"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          // zIndex: "1000",
        }}
      >
        {/*Item Background */}
        <g transform="translate(80 -80)">
          <polyline
            className="projects-fill-green-1"
            points="0,0 540,0 540,150 580,190 580,900 100,900 50,850 50,600 0,560 0,0"
          ></polyline>
          <mask id="imageMask">
            <polyline
              style={{ fill: "white" }}
              points="0,0 540,0 540,150 580,190 580,450 0,450 0,560 0,0"
            ></polyline>
          </mask>
          <image
            href={project.img}
            x="0"
            y="0"
            height="80%"
            width="80%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#imageMask)"
          />
          <text x="50" y="530" fill="white" className="projects-text-title">
            {project.title}
          </text>
          <text
            x="80"
            y="630"
            fill="white"
            className="projects-text-description"
          >
            {project.title}
          </text>
        </g>

        {/* Item Border BackGround */}
        <g transform="translate(60 -100)">
          <polyline
            className={`projects-border-thick projects-no-fill ${
              animate
                ? "projects-border-thick-anim"
                : "projects-border-thick-no-anim"
            }`}
            points="310 ,0 580,0 580,150 620,190 620,940 100,940 50,890 50,640 0,600 0,0 80,0"
          ></polyline>
        </g>

        {/* Decoration 1 */}
        <g transform="translate(60 -120)">
          <polyline
            className="projects-fill-green-2"
            points="100,0 220,0 225,30 95,30 105,0"
          ></polyline>
        </g>
        {/* Decoration 2 */}
        <g transform="translate(680 -90) rotate(90)">
          <polyline
            className="projects-fill-green-2"
            points="25,0 145,0 120,20 0,20 25,0"
          ></polyline>
        </g>
        {/* Decoration 3 */}
        <g transform="translate(500 -125)">
          <polyline
            className="projects-border-thick projects-no-fill"
            points="0,0 170,0 170,80"
          ></polyline>
          <circle
            className="projects-fill-green-2"
            cx="0"
            cy="0"
            r="10"
            fill="white"
          />
        </g>
        {/* Decoration 4 */}
        <g transform="translate(-5 3)">
          <g transform="translate(300 -115) rotate(0) scale(0.1 0.1)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(316 -115) rotate(0) scale(0.1 0.1)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(332 -115) rotate(0) scale(0.1 0.1)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(348 -115) rotate(0) scale(0.1 0.1)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
        </g>

        {/* Decoration 5 */}
        <g transform="translate(70 440) rotate(90) scale(0.3 0.2)">
          <g transform="translate(300 -115)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(450 -115)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(600 -115)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
          <g transform="translate(750 -115)">
            <polyline
              className="projects-fill-green-2"
              points="100,0 200,0 115,200 0,200 100,0"
            ></polyline>
          </g>
        </g>
        {/* Decoration 6 */}
        <g transform="translate(75 700)">
          <polyline
            className="projects-border-thick projects-no-fill"
            points="0,0 0,100 70,170 200,170"
          ></polyline>
          <circle
            className="projects-fill-green-2"
            cx="200"
            cy="170"
            r="12"
            fill="white"
          />
        </g>
      </svg>
    </>
  );
}

export default ItemBackGround;
