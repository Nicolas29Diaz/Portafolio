import { Canvas, useFrame } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { Suspense, useEffect, useRef } from "react";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";
import "./Syles/FloatButton.css";
import { getGPUTier } from "detect-gpu";
import { useState } from "react";
import { Loader } from "@react-three/drei";
import { SceneOrbits } from "./Components/SceneOrbits.jsx";
import { OrbitControls, Html } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { ScrollControls } from "@react-three/drei";
function App() {
  const { showButton, setShowButton } = useStore();
  const { showButtonStart, setShowButtonStart, setGpuTier } = useStore();

  const cameraControlsRef = useRef();
  useEffect(() => {
    const getGPUInfo = async () => {
      const gpuInfo = await getGPUTier();
      setGpuTier(gpuInfo.tier);
      console.log(gpuInfo.tier);
    };
    getGPUInfo();
  }, [cameraControlsRef]);

  return (
    <>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [5, 20, 80], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene></Scene>
            {/* <SceneOrbits></SceneOrbits> */}
            {/* <CameraControls ref={cameraControlsRef}></CameraControls> */}
            {/* <OrbitControls enableZoom={false}></OrbitControls> */}
          </Suspense>
        </Canvas>
        <Loader></Loader>

        
        {/* <LoadingScreen /> */}
      </div>
      {showButton && (
        <button className="cancelButtons" onClick={() => setShowButton(false)}>
          X
        </button>
      )}
      {showButtonStart && (
        <button
          className="cancelButtons"
          onClick={() => setShowButtonStart(false)}
        >
          Start
        </button>
      )}
    </>
  );
}

export default App;
