// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

// Importing styles
import "./About.css";
import "./SvgItems/SVG.css";

// Importing components

function About({ animate = false, showScreen }) {
  return (
    <Html
      className={`about-background ${animate ? "" : ""}`}
      distanceFactor={1.72}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0.3, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
      visible={showScreen}
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
      </svg>

      {/* ICONS AND TEXT */}
      <div
        className="about-icons-text-containter"
        style={{ top: "46px", left: "650px" }}
      >
        <img src="Images/AboutImages/IconName.webp" alt="IconName" />
        <div>
          <h2>Name:</h2>
          <p>Nicolas Santiago Diaz Santos</p>
        </div>
      </div>
      <div
        className="about-icons-text-containter"
        style={{ top: "114px", left: "650px" }}
      >
        <img src="Images/AboutImages/IconAge.webp" alt="IconName" />
        <div>
          <h2>Age:</h2>
          <p>21</p>
        </div>
      </div>
      <div
        className="about-icons-text-containter"
        style={{ top: "180px", left: "650px" }}
      >
        <img src="Images/AboutImages/IconFrom.webp" alt="IconName" />
        <div>
          <h2>From:</h2>
          <p>Colombia</p>
        </div>
      </div>
      <div
        className="about-icons-text-containter"
        style={{ top: "246px", left: "650px" }}
      >
        <img src="Images/AboutImages/IconProfession.webp" alt="IconName" />
        <div>
          <h2> Profession:</h2>
          <p> Multimedia Engineer</p>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="about-text-description">
        I am a Multimedia Engineer, passionate about web development and focused
        on creating innovative and adaptable solutions in an ever-evolving tech
        environment. I easily adapt to changes and always prioritize user needs
        in every project.
      </div>
      {/* CENTRAL IMAGE */}
      <div className="about-centralImage-container">
        <div>
          <img
            src="https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"
            alt="IconAbout"
          />
        </div>

        <h2> Virtual Skin</h2>
      </div>

      <h1 className="about-title">ABOUT</h1>
    </Html>
  );
}

export default About;
