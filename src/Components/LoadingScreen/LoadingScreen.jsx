import React from "react";
import { useProgress } from "@react-three/drei";
import "./Loading.css";
function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <div className="loading-container">
      <p>CARAGANDO: {progress}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            backgroundColor: "white",
            width: `${progress}%`,
            height: "100%",
            margin: "0px",
            
          }}
        ></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
