import React, { useEffect, useState } from "react";
import "./SVG.css";
import { subTitleConf } from "../Constants";

function BackGround({ active }) {
  const [subTitleOptions, setSubTitleOptions] = useState("Programming");
  const [option, setOption] = useState(false);
  //When the active changes, the subtitle changes after 500ms
  useEffect(() => {
    setTimeout(() => {
      setSubTitleOptions(subTitleConf[active]);
    }, 500);
  }, [active]);

  return (
    <>
      {/* <button
        style={{ position: "absolute", zIndex: 5 }}
        onClick={() => {
          setOption(!option);
        }}
      >
        CHANGE
      </button> */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 1000 500"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          margin: "auto",
          zIndex: "0",
        }}
      >
        {/* Def */}
        <defs>
          <linearGradient id="text-gradient-slideIn">
            <stop offset="5%" stopColor="rgba(96, 202, 255, 1)"></stop>
            <stop offset="100%  " stopColor="rgba(255, 255, 255, 0)"></stop>
          </linearGradient>
          <linearGradient id="text-gradient-slideOut">
            <stop offset="5%  " stopColor="rgba(255, 255, 255, 0)"></stop>
            <stop offset="100%" stopColor="rgba(96, 202, 255, 1)"></stop>
          </linearGradient>
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
          {option ? (
            <g>
              <polyline
                className="border-line"
                points="0,200 0,20 30,0 270,0 300,20 300,50 670,50 700,80 700,200"
              />
              <polyline
                className="border-line title-content"
                points="0,51.2 0,20 30,0 270,0 300,20 300,51.2 670"
              />
              <polyline
                className="border-line"
                points="0,200 0,390 30,420 670,420 700,390 700,200"
              />
            </g>
          ) : (
            <g>
              <polyline
                className="border-line"
                points="0,200 0,50 40,50 55,70 245,70 260,50 670,50 700,80 700,200"
              />
              <polyline
                className="border-line title-content"
                points="35,0 300,0 300,20 300,40 255,40 240,60 60,60 45,40 0,40 0,20 35,0"
              />
              <polyline
                className="border-line"
                points="0,200 0,390 30,420 670,420 700,390 700,200"
              />
              <text x={105} y={45} className="text-title">
                SKILLS
              </text>
            </g>
          )}

          {/* Subtitle border */}
          <g>
            <polyline
              className="border-line subtitle-content"
              points="310,20 310,40 670,40 700,0 310,0 310,20"
            />
          </g>

          {/* 3D model border */}
          <g>
            <polyline
              className="border-line"
              points="680,45 715,0 910,0 940,30 940,390 910,420 685,420 710,395 710,75 680,45"
            />
          </g>
        </g>
      </svg>
      {/* Tocó poner en otro svg el texto porque en mac se bugeaba la mascara, la forma de solucionarlo era con el viewBox en el svg pero eso me cambiaba todo el background, entonces lo separé en otro svg por ahora */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 500"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          margin: "auto",
          zIndex: "0",
        }}
      >
        <g transform={`translate(20 20) scale(1)`}>
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
              width={10}
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
