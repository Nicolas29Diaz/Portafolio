import React, { useEffect, useState } from "react";
import "./SVG.css";

function BackGround({ animate }) {
  //When the active changes, the subtitle changes after 500ms

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "0",
          left: "0",
        }}
      >
        {/* Def */}
        <defs>
          <linearGradient
            id="content-gradient-title"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%  " stopColor="#399ab5"></stop>
            <stop offset="100%" stopColor="#399ab5"></stop>
          </linearGradient>
          <linearGradient
            id="content-gradient-subtitle"
            gradientTransform="rotate(90)"
          >
            <stop offset="0%" stopColor="rgb(0, 64, 124)"></stop>
            <stop offset="100%  " stopColor="rgb(0, 64, 124)"></stop>
          </linearGradient>
        </defs>

        {/* Borders setup */}
        <g transform={`translate(20 20) scale(1)`}>
          {/* Skills Border */}
          <g>
            <polyline
              className={`border-line`}
              points="0,200 0,50 40,50 55,70 245,70 260,50 670,50 700,80 700,200"
            />
            <polyline
              className={`border-line title-content ${
                animate ? "animation-border-line-2" : ""
              }`}
              points="35,0 300,0 300,20 300,40 255,40 240,60 60,60 45,40 0,40 0,20 35,0"
            />
            <polyline
              className={`border-line`}
              points="0,200 0,390 30,420 670,420 700,390 700,200"
            />
            <text x={105} y={45} className="text-title">
              SKILLS
            </text>
          </g>
          {/* )} */}

          {/* Subtitle border */}
          <g>
            <polyline
              className={`border-line subtitle-content`}
              points="310,20 310,40 670,40 700,0 310,0 310,20"
            />
          </g>

          {/* 3D model border */}
          <g>
            <polyline
              className={`border-line`}
              points="680,45 715,0 910,0 940,30 940,390 910,420 685,420 710,395 710,75 680,45"
            />
          </g>
        </g>
      </svg>
    </>
  );
}

export default BackGround;
