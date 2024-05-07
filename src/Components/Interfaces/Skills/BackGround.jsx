import React from "react";
import { Canvas } from "@react-three/fiber";
function BackGround() {
  return (
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
      <g transform={`translate(20 20) scale(1)`}>
        <polyline
          className="about-box-line"
          points="0,200 0,20 30,0 270,0 300,20 300,50 670,50 700,80 700,200"
        />

        <polyline
          className="about-box-line"
          points="310,20 310,40 670,40 700,0 340,0 310,20"
        />
        {/* <polyline
        className="about-box-line"
        points="310,15 310,40 670,40 700,0 290,0 310,15"
      /> */}
        <polyline
          className="about-box-line"
          points="0,200 0,370 30,400 670,400 700,370 700,200"
        />

        {/* <polyline
          className="about-box-line"
          points="680,45 715,0 910,0 940,30 940,370 910,400 745,400 710,370 710,75 680,45"
        /> */}

        <polyline
          className="about-box-line"
          points="680,45 715,0 910,0 940,30 940,370 910,400 685,400 710,375 710,75 680,45"
        />

        <div>
          Acá va lo que no se puede salir del path: points="680,45 715,0 910,0
          940,30 940,370 910,400 685,400 710,375 710,75 680,45"
        </div>
      </g>
    </svg>
  );
}

export default BackGround;
