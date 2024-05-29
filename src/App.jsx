import { Canvas, useFrame } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { Suspense, useEffect, useRef } from "react";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";
import "./Syles/FloatButton.css";
import { getGPUTier } from "detect-gpu";
import { useState } from "react";
import { Loader, useProgress } from "@react-three/drei";
import { SceneOrbits } from "./Components/SceneOrbits.jsx";
import { OrbitControls, Html } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { ScrollControls } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";
import { EditScene } from "./Components/EditScene.jsx";
function App() {
  const { showButton, setShowButton } = useStore();
  const { showButtonStart, setShowButtonStart, setGpuTier } = useStore();
  const { progress } = useProgress();
  const editMode = false;
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
        <Canvas shadows camera={{ position: [5, 20, 80], fov: 40}}>
          <Suspense fallback={null}>
            {editMode ? <EditScene></EditScene> : <Scene></Scene>}

            {/* <SceneOrbits></SceneOrbits> */}
            {/* <CameraControls ref={cameraControlsRef}></CameraControls> */}
            {/* <OrbitControls enableZoom={false}></OrbitControls> */}
          </Suspense>
        </Canvas>
        <Loader></Loader>

        {/* <LoadingScreen /> */}
      </div>
      {showButton && (
        // <div className="cancelButtons">
        <div className="contentCancelButton">
          <div onClick={() => setShowButton(false)}>+</div>
          <i></i>
          <i></i>
        </div>
        // </div>

        // <button className="cancelButtons" onClick={() => setShowButton(false)}>
        //   X
        // </button>
      )}
      {progress >= 100 && showButtonStart && (
        <button
          className="contentStartButton"
          onClick={() => setShowButtonStart(false)}
        >
          Start
        </button>
      )}
      {editMode && (
        <button className="contentStartButton" onClick={() => console.log(pos)}>
          GetPos
        </button>
      )}
    </>
  );
}

export default App;
