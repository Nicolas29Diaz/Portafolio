import React, { useEffect } from "react";
import "./SVG.css";
import { useScaleAnimation } from "../../../../Animation/useScaleAnimation";

function Background({ isHandVisible, onHandClick }) {
  const opacity = useScaleAnimation(isHandVisible, 1);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 380 430"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "0",
          left: "6",
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
        {/* Title */}
        <g transform="translate(65 45)">
          <text className="menu-title">MENU</text>
        </g>

        {opacity > 0 && (
          <foreignObject
            x={20}
            y={70}
            // style={{ width: "300px", height: "300px" }}
            className="menu-hand-container"
            onClick={onHandClick}
            // transform="translate(-50%, -50%) scale(0.5)"
            style={{ opacity: opacity }}
          >
            <img src="/Images/Icons/HandMenu.webp" alt="HandIcon" />
          </foreignObject>
        )}
      </svg>
    </>
  );
}

export default Background;
