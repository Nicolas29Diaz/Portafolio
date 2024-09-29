import React from "react";
import styles from "./IconTutorial.module.css";

function IconTutorial({
  pathIcon = "./Images/Icons/Move.webp",
  altIcon = "Icon tutorial",
  top = "50%",
  left = "50%",
  move = false,
  scale = 1,
}) {
  return (
    <div
      className={`${styles.container} ${move && styles.move}`}
      style={{
        top: top,
        left: left,
      }}
    >
      <img
        src={pathIcon}
        alt={altIcon}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}

export default IconTutorial;
