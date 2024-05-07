import React from "react";
import "./SVG.css";
function SkillPoints({ skillPoints }) {
  return (
    <svg width="300px" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skillname-gradient">
          <stop offset="0%" stopColor="rgba(255,0,0)"></stop>
          <stop offset="90%" stopColor="rgba(0,0,0)"></stop>
        </linearGradient>
      </defs>

      <g transform="scale(1.05) translate(0 -5)">
        <g transform="translate(0 0)">
          <polyline
            className={skillPoints >= 1 ? "skillPoints filled" : "skillPoints"}
            points="6,110 35,110 35,103 6,103 6,110"
          />
        </g>
        <g transform="translate(0 -13)">
          <polyline
            className={skillPoints >= 2 ? "skillPoints filled" : "skillPoints"}
            points="6,110 35,110 35,103 6,103 6,110"
          />
        </g>
        <g transform="translate(0 -26)">
          <polyline
            className={skillPoints >= 3 ? "skillPoints filled" : "skillPoints"}
            points="6,110 35,110 35,103 6,103 6,110"
          />
        </g>
        <g transform="translate(0 -39)">
          <polyline
            className={skillPoints >= 4 ? "skillPoints filled" : "skillPoints"}
            points="6,110 35,110 35,103 6,103 6,110"
          />
        </g>
      </g>
    </svg>
  );
}

export default SkillPoints;
