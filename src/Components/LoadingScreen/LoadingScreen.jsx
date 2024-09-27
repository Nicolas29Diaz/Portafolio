import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loading.css";
import "../../StylesVariables/Floats/StartButton.css";
import { showStartTextTime, slideInTime } from "../../Constants/Times.js";

function LoadingScreen({
  progress,
  isStartButtonPressed,
  isStartButtonVisible,
  setStartButtonPressed,
  setStartButtonVisibility,
}) {
  // const { progress } = useProgress();
  const [hideLoadinScreen, setHideLoadinScreen] = useState(false);

  const [hideLoadingLogo, setHideLoadingLogo] = useState(false);
  const [hideLoadingIcon, setHideLoadingIcon] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setHideLoadingLogo(true);

      setTimeout(() => {
        setSlideIn(true);
      }, slideInTime);

      setTimeout(() => {
        setStartButtonVisibility(true);
      }, showStartTextTime);
    }

    document.getElementById("preload-image").style.display = "none";
    document.getElementById("preload-screen").style.display = "none";
  }, [progress]);

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
              transform="translate(0 0) scale(1.1)"
              d="M0.803,1 L0.75,0.991 C0.698,0.981,0.593,0.963,0.471,0.944 C0.347,0.926,0.21,0.908,0.191,0.889 C0.174,0.87,0.278,0.852,0.366,0.833 C0.452,0.815,0.524,0.797,0.558,0.778 C0.593,0.759,0.593,0.741,0.506,0.722 C0.419,0.704,0.242,0.685,0.139,0.667 C0.033,0.648,0,0.63,0.016,0.611 C0.033,0.593,0.105,0.574,0.278,0.556 C0.452,0.537,0.734,0.519,0.733,0.5 C0.734,0.481,0.452,0.463,0.401,0.444 C0.347,0.426,0.524,0.408,0.506,0.389 C0.488,0.37,0.278,0.352,0.296,0.333 C0.315,0.315,0.557,0.297,0.715,0.278 C0.872,0.259,0.944,0.241,0.855,0.222 C0.767,0.204,0.524,0.185,0.348,0.167 C0.174,0.148,0.069,0.13,0.156,0.111 C0.242,0.093,0.524,0.074,0.628,0.056 C0.734,0.037,0.662,0.019,0.628,0.009 L0.593,0 H1 V0.009 C1,0.019,1,0.037,1,0.056 C1,0.074,1,0.092,1,0.111 C1,0.13,1,0.148,1,0.167 C1,0.185,1,0.203,1,0.222 C1,0.241,1,0.259,1,0.278 C1,0.296,1,0.315,1,0.333 C1,0.352,1,0.37,1,0.389 C1,0.407,1,0.426,1,0.444 C1,0.463,1,0.481,1,0.5 C1,0.519,1,0.537,1,0.556 C1,0.574,1,0.592,1,0.611 C1,0.63,1,0.648,1,0.667 C1,0.685,1,0.703,1,0.722 C1,0.741,1,0.759,1,0.778 C1,0.796,1,0.815,1,0.833 C1,0.852,1,0.87,1,0.889 C1,0.907,1,0.926,1,0.944 C1,0.963,1,0.981,1,0.991 V1 H0.803"
            />
          </clipPath>
          <clipPath id="clipMobile">
            <path
              transform="translate(0 0) scale(1 0.5) rotate(180 720 65)"
              d="M0,39L14.1,49.8C28.2,61,56,82,85,82.3C112.9,82,141,61,169,47.7C197.6,35,226,30,254,39C282.4,48,311,69,339,84.5C367.1,100,395,108,424,101.8C451.8,95,480,74,508,54.2C536.5,35,565,17,593,26C621.2,35,649,69,678,75.8C705.9,82,734,61,762,43.3C790.6,26,819,13,847,21.7C875.3,30,904,61,932,73.7C960,87,988,82,1016,67.2C1044.7,52,1073,26,1101,32.5C1129.4,39,1158,78,1186,88.8C1214.1,100,1242,82,1271,67.2C1298.8,52,1327,39,1355,43.3C1383.5,48,1412,69,1440,82.3C1468.2,95,1496,100,1525,99.7C1552.9,100,1581,95,1609,86.7C1637.6,78,1666,65,1694,60.7C1722.4,56,1751,61,1779,69.3C1807.1,78,1835,91,1864,99.7C1891.8,108,1920,113,1948,106.2C1976.5,100,2005,82,2019,73.7L2032.9,65L2032.9,130L2018.8,130C2004.7,130,1976,130,1948,130C1920,130,1892,130,1864,130C1835.3,130,1807,130,1779,130C1750.6,130,1722,130,1694,130C1665.9,130,1638,130,1609,130C1581.2,130,1553,130,1525,130C1496.5,130,1468,130,1440,130C1411.8,130,1384,130,1355,130C1327.1,130,1299,130,1271,130C1242.4,130,1214,130,1186,130C1157.6,130,1129,130,1101,130C1072.9,130,1045,130,1016,130C988.2,130,960,130,932,130C903.5,130,875,130,847,130C818.8,130,791,130,762,130C734.1,130,706,130,678,130C649.4,130,621,130,593,130C564.7,130,536,130,508,130C480,130,452,130,424,130C395.3,130,367,130,339,130C310.6,130,282,130,254,130C225.9,130,198,130,169,130C141.2,130,113,130,85,130C56.5,130,28,130,14,130L0,130Z"
            />
          </clipPath>
        </defs>
      </svg>
      {/* SLIDE SCREEN */}
      {!isStartButtonPressed && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            zIndex: "3",
          }}
        ></div>
      )}

      <div
        className={`sliding-box
          ${slideIn ? "slideIn" : ""} 
          ${isStartButtonPressed ? "slideOut" : ""} 
        `}
        onAnimationEnd={(e) => {
          if (isStartButtonPressed) e.target.style.display = "none";
        }}
      >
        <div className="box green"></div>
        <div className="box red"></div>
      </div>

      {/* LOGO */}
      <div className={`loading-container ${hideLoadingLogo && "scale-out"}`}>
        <div className="loading-fill-wrapper ">
          <div
            className="loading-fill"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-image"></div>
      </div>

      {/* TEXT */}

      <div
        className="loading-text-container"
        style={{
          opacity: isStartButtonVisible ? 1 : 0,
          display: isStartButtonPressed ? "none" : "",
        }}
      >
        <h1>Hi!, I'm Nicolas Diaz</h1>
        <h2>Multimedia Engineer</h2>

        <div>
          {isStartButtonVisible && (
            <button
              onClick={() => {
                setStartButtonPressed(true);
              }}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;

{
  /* <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(72, 208, 228, 1)" offset="0%"></stop><stop stop-color="rgba(43.891, 109.164, 118.763, 0.7)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,39L14.1,49.8C28.2,61,56,82,85,82.3C112.9,82,141,61,169,47.7C197.6,35,226,30,254,39C282.4,48,311,69,339,84.5C367.1,100,395,108,424,101.8C451.8,95,480,74,508,54.2C536.5,35,565,17,593,26C621.2,35,649,69,678,75.8C705.9,82,734,61,762,43.3C790.6,26,819,13,847,21.7C875.3,30,904,61,932,73.7C960,87,988,82,1016,67.2C1044.7,52,1073,26,1101,32.5C1129.4,39,1158,78,1186,88.8C1214.1,100,1242,82,1271,67.2C1298.8,52,1327,39,1355,43.3C1383.5,48,1412,69,1440,82.3C1468.2,95,1496,100,1525,99.7C1552.9,100,1581,95,1609,86.7C1637.6,78,1666,65,1694,60.7C1722.4,56,1751,61,1779,69.3C1807.1,78,1835,91,1864,99.7C1891.8,108,1920,113,1948,106.2C1976.5,100,2005,82,2019,73.7L2032.9,65L2032.9,130L2018.8,130C2004.7,130,1976,130,1948,130C1920,130,1892,130,1864,130C1835.3,130,1807,130,1779,130C1750.6,130,1722,130,1694,130C1665.9,130,1638,130,1609,130C1581.2,130,1553,130,1525,130C1496.5,130,1468,130,1440,130C1411.8,130,1384,130,1355,130C1327.1,130,1299,130,1271,130C1242.4,130,1214,130,1186,130C1157.6,130,1129,130,1101,130C1072.9,130,1045,130,1016,130C988.2,130,960,130,932,130C903.5,130,875,130,847,130C818.8,130,791,130,762,130C734.1,130,706,130,678,130C649.4,130,621,130,593,130C564.7,130,536,130,508,130C480,130,452,130,424,130C395.3,130,367,130,339,130C310.6,130,282,130,254,130C225.9,130,198,130,169,130C141.2,130,113,130,85,130C56.5,130,28,130,14,130L0,130Z"></path></svg> */
}
