import React, { useEffect, useState } from "react";
import "./Subtitle.css";
function Subtitle({ active, subTitleOptions }) {
  const [subTitleOptionsDelay, setSubTitleOptionsDelay] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSubTitleOptionsDelay(subTitleOptions);
      console.log(subTitleOptions.text);
    }, 400);
  }, [active]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 32"
      style={{
        width: "320px",
        height: "32px",
        position: "absolute",
        top: "25px",
        left: "350px",
        margin: "auto",
        zIndex: "0",
      }}
    >
      <defs>
        <linearGradient id="text-gradient-slideIn">
          <stop offset="5%" stopColor="rgba(96, 202, 255, 1)"></stop>
          <stop offset="100%  " stopColor="rgba(255, 255, 255, 0)"></stop>
        </linearGradient>
        <linearGradient id="text-gradient-slideOut">
          <stop offset="5%  " stopColor="rgba(255, 255, 255, 0)"></stop>
          <stop offset="100%" stopColor="rgba(96, 202, 255, 1)"></stop>
        </linearGradient>
      </defs>

      <g key={active}>
        <rect className="rect-title-change" height="100%" width="10px" />

        <mask id="mask-subtitle">
          <rect fill="white" height="100%" className="mask-rect" />
        </mask>
      </g>

      <text
        x={subTitleOptionsDelay.x}
        y="24.5"
        className="text-subtitle"
        mask="url(#mask-subtitle)"
      >
        {subTitleOptionsDelay.text}
      </text>
    </svg>
  );
}

export default Subtitle;
