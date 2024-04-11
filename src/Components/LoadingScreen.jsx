import React from "react";
import { useProgress } from "@react-three/drei";
function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <div>
      <p>CARAGANDO: {progress}</p>
    </div>
  );
}

export default LoadingScreen;
