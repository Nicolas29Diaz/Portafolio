import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loading.css";
function LoadingScreen({ progress, isStartButtonPressed }) {
  // const { progress } = useProgress();
  const [hideLoadinScreen, setHideLoadinScreen] = useState(false);
  const [hideLoadingIcon, setHideLoadingIcon] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setHideLoadinScreen(true);
      }, 200);

      setTimeout(() => {
        setSlideIn(true);
      }, 500);
    }
  }, [progress]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSlideIn(true);
  //   }, 500);
  // }, []);

  return (
    <>
      <svg
        style={{ position: "absolute", top: 0, left: 0 }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path
              transform="translate(0.2 0) scale(1.1)"
              d="M0,0.805 C0.023,0.919,0.209,0.983,0.298,1 L0.999,0.99 V0 H0.103 C0.212,0.015,0.445,0.068,0.504,0.159 C0.577,0.272,0.132,0.175,0.132,0.293 C0.132,0.411,0.298,0.295,0.387,0.436 C0.475,0.576,-0.029,0.662,0,0.805"
            />
          </clipPath>
        </defs>
      </svg>
      <div
        className={`sliding-box ${slideIn ? "slideIn" : ""} ${
          isStartButtonPressed ? "slideOut" : ""
        }`}
      >
        <div className="box green"></div>
        <div className="box red"></div>
      </div>

      <div className={`loading-container ${hideLoadinScreen && "scale-out"}`}>
        <div className="loading-fill-wrapper ">
          <div
            className="loading-fill"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-image"></div>
      </div>
    </>
  );
}

export default LoadingScreen;
