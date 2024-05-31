import React, { useEffect, useState } from "react";
import "./SVG.css";

function BackGround() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 740"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          margin: "auto",
          zIndex: "0",
          padding: "10px",
        }}
      >
        {/* Border */}
        <g transform="translate(20 20)">
          <polyline
            className="border-line"
            points="0,200 0,20 30,0 270,0 300,20 300,50 670,50 700,80 700,200"
          ></polyline>
        </g>

        {/* <rect x="0" y="0" width="100" height="100" fill="blue" /> */}
      </svg>
    </>
  );
}

export default BackGround;
