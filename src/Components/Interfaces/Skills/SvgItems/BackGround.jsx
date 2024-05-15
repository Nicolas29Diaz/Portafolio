import React, { useEffect, useState } from "react";
import "./SVG.css";
import { subTitleConf } from "../Constants";

function BackGround({ active }) {
  const [subTitleOptions, setSubTitleOptions] = useState("Programming");

  //When the active changes, the subtitle changes after 500ms
  useEffect(() => {
    setTimeout(() => {
      setSubTitleOptions(subTitleConf[active]);
    }, 500);
  }, [active]);

  return (
    <>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          margin: "auto",
          zIndex: "0",
        }}
      >
        {/* Sldier rect gradients */}
        <defs>
          <linearGradient id="text-gradient-slideIn">
            <stop offset="5%" stopColor="#60CAFF"></stop>
            <stop offset="100%  " stopColor="rgba(0, 0, 0, 0)"></stop>
          </linearGradient>
          <linearGradient id="text-gradient-slideOut">
            <stop offset="5%  " stopColor="rgba(0, 0, 0, 0)"></stop>
            <stop offset="100%" stopColor="#60CAFF"></stop>
          </linearGradient>
        </defs>

        {/* Borders setup */}
        <g transform={`translate(20 20) scale(1)`}>
          {/* Skills Border */}
          <g>
            <polyline
              className="border-line"
              points="0,200 0,20 30,0 270,0 300,20 300,50 670,50 700,80 700,200"
            />
            <polyline
              className="border-line"
              points="0,200 0,370 30,400 670,400 700,370 700,200"
            />
          </g>

          {/* Subtitle border */}
          <g>
            <polyline
              className="border-line"
              points="310,20 310,40 670,40 700,0 340,0 310,20"
            />
          </g>

          {/* 3D model border */}
          <g>
            <polyline
              className="border-line"
              points="680,45 715,0 910,0 940,30 940,370 910,400 685,400 710,375 710,75 680,45"
            />
          </g>

          {/* Subtitle Text */}
          <g key={active}>
            {/* Subtitle mask */}
            <mask id="mask-subtitle">
              <rect
                width={160}
                height="30px"
                fill="white"
                transform="translate(580 36) rotate(180) "
              />
              <rect
                className="mask-subtitle"
                height="30px"
                fill="black"
                transform="translate(580 36) rotate(180) "
              />
            </mask>

            {/* Slide rect */}
            <rect
              className="rect-title-change"
              height={35}
              width={20}
              x={"415px"}
              y="3px"
            ></rect>

            {/* Subtitle text */}
            <text
              className="text-subtitle"
              x={subTitleOptions.x}
              y={subTitleOptions.y}
              mask="url(#mask-subtitle)"
            >
              {subTitleOptions.text}
            </text>
          </g>
        </g>
      </svg>
    </>
  );
}

export default BackGround;
