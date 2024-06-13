import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { getGPUTier } from "detect-gpu";
import { Loader, useProgress } from "@react-three/drei";

import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import "./Syles/FloatButton.css";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";

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
        <Canvas shadows camera={{ position: [5, 20, 80], fov: 60 }}>
          <Suspense fallback={null}>
            {editMode ? <EditScene></EditScene> : <Scene></Scene>}
          </Suspense>
        </Canvas>
        <Loader></Loader>
        {/* <LoadingScreen /> */}
      </div>
      {showButton && (
        <div className="contentCancelButton">
          <div onClick={() => setShowButton(false)}>+</div>
          <i></i>
          <i></i>
        </div>
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
