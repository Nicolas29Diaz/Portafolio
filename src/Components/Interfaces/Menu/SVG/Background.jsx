import React, { useEffect } from "react";
import "./SVG.css";
import useStore from "../../../../Store/Store";

function Background({ animate }) {
  const { setMenuOption } = useStore();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "10",
          left: "10",
        }}
      >
        {/* Borders setup */}
        <g transform="translate(10 10)">
          <polyline
            points="49,0 350,0 350,380 340,390 300,390 290,380 60,380 50,390 10,390 0,380 0,50 50,0"
            className="menu-border-line"
          />
        </g>
        <g transform="translate(10 10)">
          <polyline
            points="0,395 0,420 350,420 350,395 340,405 300,405 290,395 60,395 50,405 10,405 0,395"
            className="menu-border-line-2"
          />
        </g>
        {/* Decoration */}
        <g transform="translate(10 10)">
          <polyline
            points="330,0 330,60 350,90 350,0"
            className="menu-border-line-2"
          />
        </g>
        <g transform="translate(10 10)">
          <polyline
            points="49,0 200,0 150,50 0,50"
            className="menu-border-line-2"
          />
        </g>
        {/* Decoration 2*/}
        <g transform="translate(190 18) scale(0.5)">
          <polyline
            className={`menu-border-line-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(40 0)"
            className={`menu-border-line-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(80 0)"
            className={`menu-border-line-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(120 0)"
            className={`menu-border-line-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(160 0)"
            className={`menu-border-line-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
        </g>

        {/* Buttons */}
        <g transform="translate(80 80)">
          <g
            onClick={() => {
              setMenuOption("SKILLS");
            }}
            transform="translate(0 0)"
            className="menu-svg-button"
          >
            <polyline
              className={`menu-button`}
              points="0,0 190,0 200,10 200,50 10,50 0,40 0,0"
            ></polyline>
            <polyline
              transform="translate(8 8) scale(1.2)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <polyline
              transform="translate(192 42) scale(1.2) rotate(180 0 0)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <text transform="translate(50 35)" className="menu-text-button">
              SKILLS
            </text>
          </g>

          <g
            onClick={() => {
              setMenuOption("ABOUT");
            }}
            transform="translate(0 80)"
            className="menu-svg-button"
          >
            <polyline
              className={`menu-button`}
              points="0,0 190,0 200,10 200,50 10,50 0,40 0,0"
            ></polyline>
            <polyline
              transform="translate(8 8) scale(1.2)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <polyline
              transform="translate(192 42) scale(1.2) rotate(180 0 0)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <text transform="translate(50 35)" className="menu-text-button">
              ABOUT
            </text>
          </g>

          <g
            onClick={() => {
              setMenuOption("PROJECTS");
            }}
            transform="translate(0 160)"
            className="menu-svg-button"
          >
            <polyline
              className={`menu-button`}
              points="0,0 190,0 200,10 200,50 10,50 0,40 0,0"
            ></polyline>
            <polyline
              transform="translate(8 8) scale(1.2)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <polyline
              transform="translate(192 42) scale(1.2) rotate(180 0 0)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <text transform="translate(20 35)" className="menu-text-button">
              PROJECTS
            </text>
          </g>

          <g
            onClick={() => {
              setMenuOption("CONTACT");
            }}
            transform="translate(0 240)"
            className="menu-svg-button"
          >
            <polyline
              className={`menu-button`}
              points="0,0 190,0 200,10 200,50 10,50 0,40 0,0"
            ></polyline>
            <polyline
              transform="translate(8 8) scale(1.2)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <polyline
              transform="translate(192 42) scale(1.2) rotate(180 0 0)"
              className={`menu-decoration-button`}
              points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
            ></polyline>
            <text transform="translate(30 35)" className="menu-text-button">
              CONTACT
            </text>
          </g>
        </g>
      </svg>
    </>
  );
}

export default Background;
