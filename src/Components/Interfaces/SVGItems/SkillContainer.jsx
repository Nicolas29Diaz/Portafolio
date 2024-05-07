import React from "react";
import "./SVG.css";
import SKillPoints from "../SVGItems/SkillPoints";
function SkillContainer({ position = "10 15", scale = "1", skillPoints = 5 }) {
  return (
    <svg width="300px" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skillname-gradient">
          <stop offset="0%" stopColor="rgba(255,0,0)"></stop>
          <stop offset="90%" stopColor="rgba(0,0,0)"></stop>
        </linearGradient>
      </defs>

      <g transform={`translate(${position}) scale(${scale})`}>
        <polyline
          className="about-box-line"
          points="0,70 0,20 30,0 100,0 100,80 130,80 140,90 250,90 270,75"
        />
        <polyline
          className="about-box-line"
          points="0,70 0,120 65,120 100,100 100,80"
        />
        {/* SKILLPOINTS */}
        <SKillPoints skillPoints={skillPoints}></SKillPoints>
      </g>
    </svg>
  );
}

export default SkillContainer;
