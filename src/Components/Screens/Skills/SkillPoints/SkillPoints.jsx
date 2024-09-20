import React from "react";
import styles from "./SkillPoints.module.css";

function SkillPoints({ skillPoints, activeSkillPoints }) {
  return (
    <svg width="300px" height="160" xmlns="http://www.w3.org/2000/svg">
      {/* Define the mask */}
      {activeSkillPoints && (
        <>
          <defs>
            <clipPath id="skillPointsMask">
              <rect
                transform="translate(51 127) rotate(-180)"
                className={styles.rectMask}
                width="420px"
                fill="white"
              />
            </clipPath>
          </defs>
          <g transform="scale(1.05)" className={styles.containerClipPath}>
            <g transform="translate(0 0)">
              <polyline
                className={
                  skillPoints >= 1
                    ? `${styles.skillPoints} ${styles.filled}`
                    : styles.skillPoints
                }
                points="16,120 45,120 45,113 16,113 16,120"
              />
            </g>
            <g transform="translate(0 -13)">
              <polyline
                className={
                  skillPoints >= 2
                    ? `${styles.skillPoints} ${styles.filled}`
                    : styles.skillPoints
                }
                points="16,120 45,120 45,113 16,113 16,120"
              />
            </g>
            <g transform="translate(0 -26)">
              <polyline
                className={
                  skillPoints >= 3
                    ? `${styles.skillPoints} ${styles.filled}`
                    : styles.skillPoints
                }
                points="16,120 45,120 45,113 16,113 16,120"
              />
            </g>
            <g transform="translate(0 -39)">
              <polyline
                className={
                  skillPoints >= 4
                    ? `${styles.skillPoints} ${styles.filled}`
                    : styles.skillPoints
                }
                points="16,120 45,120 45,113 16,113 16,120"
              />
            </g>
          </g>
        </>
      )}

      <g transform="scale(1.05)">
        <g>
          <polyline
            className={styles.skillPoints}
            points="16,120 45,120 45,113 16,113 16,120"
          />
        </g>
        <g transform="translate(0 -13)">
          <polyline
            className={styles.skillPoints}
            points="16,120 45,120 45,113 16,113 16,120"
          />
        </g>
        <g transform="translate(0 -26)">
          <polyline
            className={styles.skillPoints}
            points="16,120 45,120 45,113 16,113 16,120"
          />
        </g>
        <g transform="translate(0 -39)">
          <polyline
            className={styles.skillPoints}
            points="16,120 45,120 45,113 16,113 16,120"
          />
        </g>
      </g>
    </svg>
  );
}

export default SkillPoints;
