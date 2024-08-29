// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import { Html } from "@react-three/drei";

// Importing styles
import "./About.css";
import "./SvgItems/SVG.css";

// Importing components

function About({ animate = false }) {
  return (
    <Html
      className={`about-background ${animate ? "" : ""}`}
      distanceFactor={1}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0.3, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[1.72, 1.72, 1.72]}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 740"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          // zIndex: "1000",
        }}
      >
        {/* 1450,50 */}
        <g transform="translate(-350 0)">
          <polyline
            className="about-border-thick about-no-fill"
            points="-250,50 450,50 525,150 925,150 1000,50 1700,50"
          ></polyline>
          <polyline
            transform="translate(0 725) rotate(180 725 0)"
            className="about-border-thick about-no-fill"
            points="-250,50 525,50 550,60 900,60 925,50 1700,50"
          ></polyline>
        </g>
        <g transform="translate(230 110)">
          <text x="0" y="0" className="about-text-title">
            ABOUT
          </text>
        </g>

        <image
          xlinkHref="https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"
          x="0"
          y="0"
          width="800"
          height="800"
          clipPath="url(#circleClip)"
        />
        <clipPath id="circleClip">
          <circle cx="370" cy="350" r="150" />
        </clipPath>

        <g transform="translate(250 0)">
          <text x="0" y="520" className="about-text-description">
            <tspan x="15" dy="1.2em">
              Game Skin 
            </tspan>
            <tspan x="0" dy="1.2em">
              {/* Skin */}
            </tspan>
          </text>
        </g>

        {/* <foreignObject x="150" y="550" width="300" height="500">
          <div className="about-text-description">Nicolas </div>
          <div className="about-text-description">Diaz Santos</div>
        </foreignObject> */}

        <foreignObject x="-580" y="105" width="710" height="600">
          <div className="about-text-description">
            I am a Multimedia Engineer, passionate about web development and
            focused on creating innovative and adaptable solutions in an
            ever-evolving tech environment. I easily adapt to changes and always
            prioritize user needs in every project.
          </div>
        </foreignObject>
      </svg>
    </Html>
  );
}

export default About;
