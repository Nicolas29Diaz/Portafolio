import React from "react";
import "./SVG.css";
import SKillPoints from "./SkillPoints";
function SkillContainer({
  animate,
  position = "10 15",
  scale = "1",
  skillPoints = 5,
  activeSkillPoints = false,
  skillText = "Skill Name",
  x = 0,
  y = 50,
  srcImg = "",
  altImg = "Image",
  cameraFocus,
}) {
  return (
    <>
      <div className="skill-container">
        <svg width="300px" height="160" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skillname-gradient">
              <stop offset="0%" stopColor="rgba(255,0,0)"></stop>
              <stop offset="90%" stopColor="rgba(0,0,0)"></stop>
            </linearGradient>
          </defs>

          <g>
            {/* Skill container */}

            <g>
              <polyline
                className={`border-line `}
                points="10,85 10,35 40,15 110,15 110,95 140,95 150,105 260,105 280,90"
              />
              <polyline
                className={`border-line`}
                points="10,85 10,135 75,135 110,115 110,95 110,100"
              />
            </g>

            {/* Skill container Decoration */}
            <g>
              <polyline
                className={`border-line-2 ${
                  animate ? "animation-border-line-3" : ""
                }`}
                points="110,95 140,95 150,105 160,105"
              />
            </g>

            {/* TEXT */}
            {/* <text className="text-skills" x={x} y={y}>
              {skillText}
            </text> */}

            {/* SKILLPOINTS */}

            <SKillPoints
              skillPoints={skillPoints}
              activeSkillPoints={activeSkillPoints}
            ></SKillPoints>
          </g>
        </svg>

        <div className="img-container">
          <img src={srcImg} alt={altImg} />
        </div>
        <div className="skill-text-container" style={{ top: `${y}px` }}>
          <p className="skill-text">{skillText}</p>
        </div>
      </div>
    </>
  );
}

export default SkillContainer;
