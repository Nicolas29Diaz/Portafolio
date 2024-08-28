import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import { Loader, Preload, Text, useProgress } from "@react-three/drei";

import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import "./Syles/FloatButton.css";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";
import { SceneConf } from "./Components/SceneConf.jsx";

import SceneCopy from "./Components/SceneCopy.jsx";
import { Scene2 } from "./Components/Scene2.jsx";

function App() {
  const {
    showCancelButton,
    setShowCancelButton,
    showButtonStart,
    setShowButtonStart,
    setGpuTier,
  } = useStore();
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div className="canvas-container" style={{ opacity: isLoaded ? 0 : 1 }}>
        {/* QUITAR SOMBRAS PARA DISPOSITIVOS PAILAS */}
        <Canvas
          shadows
          camera={{ position: [5, 20, 80], fov: 60 }}
          // frameloop="demand"
        >
          <Suspense fallback={<LoadingScreen />}>
            {/* Scene configuration */}
            <SceneConf></SceneConf>

            {editMode ? <EditScene></EditScene> : <Scene2></Scene2>}
            <Preload all onLoad={() => setIsLoaded(true)} />
          </Suspense>
          {showButtonStart && (
            <group
              position={windowWidth > 1000 ? [2, 2, 2] : [-1.5, 5, 0]}
              rotation={windowWidth > 1000 ? [-0.3, -0.4, -0.1] : [0, 0, 0]}
            >
              <Text
                color="black"
                anchorX="left"
                anchorY="middle"
                fontSize={windowWidth > 1000 ? 0.8 : 0.5}
                maxWidth={6}
                font="./Fonts/Electrolize-Regular.ttf"
              >
                {`Hi! I'm \nNicolas Diaz`}
              </Text>
            </group>
          )}
        </Canvas>
      </div>

      {showCancelButton && (
        <div className="contentCancelButton">
          <div onClick={() => setShowCancelButton(false)}>+</div>
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
