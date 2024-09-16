import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loading.css";
function LoadingScreen({ progress }) {
  // const { progress } = useProgress();
  const [hideLoadinScreen, setHideLoadinScreen] = useState(false);
  const [hideLoadingIcon, setHideLoadingIcon] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setHideLoadinScreen(true);
        // const loadingScreen = document.getElementById("fast-loading-screen");
        // if (loadingScreen) {
        //   loadingScreen.style.display = "none";
        // }
      }, 100);
    }
  }, [progress]);

  return (
    <>
      <div
        className={`loading-container ${hideLoadinScreen ? "fade-out" : ""}`}
      ></div>

      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className={`loading-logo ${hideLoadinScreen ? "scale-out" : ""}`}
      >
        <rect
          id="loading-bar"
          width="100"
          stroke="#ffffff"
          strokeWidth="5"
          fill="white"
        ></rect>
      </svg>
    </>
  );
}

export default LoadingScreen;
