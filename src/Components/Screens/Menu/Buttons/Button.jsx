import React from "react";
import styles from "./Buttons.module.css";

function Button({ positionY = 88, canPressButton, onClick, text }) {
  return (
    <div
      className={styles.container}
      style={{
        top: `${positionY}px`,
      }}
      onClick={canPressButton ? onClick : () => {}}
    >
      <svg
        width="190"
        height="45"
        viewBox="0 0 790 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10H741.74L782 52.3529V190H47.2597L7 147.647V10Z"
          fill="#D9D9D9"
          className={styles.button}
        />
        <path
          d="M0.5 128.841V0.5H128.889L107.261 24.919H25.419H24.919V25.419V105.818L0.5 128.841Z"
          fill="#D9D9D9"
          stroke="black"
          className={styles.buttonDecoration}
        />
        <path
          d="M789.5 71.1586V199.5L661.111 199.5L682.739 175.081H764.581H765.081V174.581V94.1823L789.5 71.1586Z"
          fill="#D9D9D9"
          stroke="black"
          className={styles.buttonDecoration}
        />
      </svg>

      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}

export default Button;
