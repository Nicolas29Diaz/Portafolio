import React, { useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loading.css";
function LoadingScreen() {
  const { progress } = useProgress();
  useEffect(() => {
    console.log("LoadingScreen");
  }, []);
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold mb-4">Loading...</div>
        <div className="w-64 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-2">{Math.round(progress)}%</div>
      </div>
    </Html>
  );
}

export default LoadingScreen;
