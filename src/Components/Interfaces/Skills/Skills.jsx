import React, { useEffect, useState } from "react";
import HtmlBase from "../HtmlBase";
import { Html } from "@react-three/drei";
import useStore from "../../../Store/Store";
import "./Skills.css";
// import { views, useStore } from "../../../Store/Store.js";
function Skills() {
  const { cameraFocus } = useStore();
  useEffect(() => {
    console.log(cameraFocus);
  }, [cameraFocus]);

  const [isActive, setIsActive] = useState(false);
  const toggleSVG = () => {
    setIsActive(!isActive);
  };

  return (
    <HtmlBase
      backgroundColor="#ffffff"
      sizeScreen={["1000px", "480px"]}
      borderRadius="0px"
      position={[0, 0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          width: "90%",
          height: "90%",
          margin: "auto",
        }}
      >
        <button onClick={toggleSVG}>
          {isActive ? "Desactivar SVG" : "Activar SVG"}
        </button>
        {/* {cameraFocus === "SKILLS" && ( */}
        {isActive && (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="skillname-gradient"
                // gradientTransform="rotate(90)"
              >
                <stop offset="0%" stopColor="rgba(255,0,0)"></stop>
                <stop offset="90%" stopColor="rgba(0,0,0)"></stop>
              </linearGradient>
            </defs>
            {/* <rect
              x="10"
              y="10"
              width="100px"
              height="100px"
              fill="url(#skillname-gradient)"
            /> */}
            <mask></mask>
            {/* <g transform="translate(20 20)">
              <polyline
                className="about-box-line"
                points="0,0 100,0 120,10 390,10 400,15 400,50"
              />
              <polyline
                className="about-box-line"
                points="0,100 70,100 80,90 390,90 400,85 400,50"
              />
            </g> */}
            <g>
              <mask id="heart-mask">
                <rect className="heart-rect-mask" height="200px" fill="white" />
                <rect className="heart-rect-mask" height="200px" fill="black" />
              </mask>

              <polyline
                className="heart-line"
                points="0,100 70,100 80,120 90,100 120,40 150,170 180,100 250,100"
                mask="url(#heart-mask)"
              />
            </g>
          </svg>
        )}
      </div>
    </HtmlBase>
  );
}

export default Skills;
{
  /* <g transform="translate(170 118)" fill="#34bfff" font-weight="bold">
             <text x="0" y="0" font-size="12" class="about-header-upper-text">
               Name :
             </text>
             <text x="0" y="20" font-size="18" class="about-header-lower-text">
               David
             </text>
             <text x="110" y="0" font-size="12" class="about-header-upper-text">
               Age :
             </text>
             <text x="110" y="20" font-size="18" class="about-header-lower-text">
               23
             </text>
             <text x="200" y="0" font-size="12" class="about-header-upper-text">
               From :
             </text>
             <text x="200" y="20" font-size="18" class="about-header-lower-text">
               Germany
             </text>
           </g> */
}
