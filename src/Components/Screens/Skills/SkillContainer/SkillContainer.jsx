import React from "react";
import styles from "./SkillContainer.module.css";
import SKillPoints from "../SkillPoints/SkillPoints.jsx";

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
      <div className={styles.skillContainer}>
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
                className={styles.borderLine}
                points="10,85 10,35 40,15 110,15 110,95 140,95 150,105 260,105 280,90"
              />
              <polyline
                className={styles.borderLine}
                points="10,85 10,135 75,135 110,115 110,95 110,100"
              />
            </g>

            {/* Skill container Decoration */}
            <g>
              <polyline
                className={`${styles.borderLine2} ${
                  animate ? styles.animationBorderLine : ""
                }`}
                points="110,95 140,95 150,105 160,105"
              />
            </g>

            {/* SKILLPOINTS */}
            <SKillPoints
              skillPoints={skillPoints}
              activeSkillPoints={activeSkillPoints}
            ></SKillPoints>
          </g>
        </svg>

        {/* TEXT AND IMAGES */}
        <div className={styles.imgContainer}>
          <img src={srcImg} alt={altImg} />
        </div>
        <div className={styles.textContainer} style={{ top: `${y}px` }}>
          <p>{skillText}</p>
        </div>
      </div>
    </>
  );
}

export default SkillContainer;
