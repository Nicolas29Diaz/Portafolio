import { Canvas } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { Suspense, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen.jsx";
import "./Syles/FloatButton.css";
import { getGPUTier } from "detect-gpu";
import { useState } from "react";

function App() {
  const { showButton, setShowButton } = useStore();
  const { showButtonStart, setShowButtonStart } = useStore();

  const [gpuInfo, setGpuInfo] = useState(null);

  useEffect(() => {
    const getGPUInfo = async () => {
      const gpuTier = await getGPUTier();
      setGpuInfo(gpuTier);
      console.log(gpuTier);
    };

    getGPUInfo();
  }, []);

  return (
    <>
      {gpuInfo && (
        <div>
          <p>Device: {gpuInfo.device}</p>
          <p>GPU: {gpuInfo.gpu}</p>
          <p>FPS: {gpuInfo.fps}</p>
          <p>Is Mobile: {gpuInfo.isMobile.toString()}</p>
          <p>Tier: {gpuInfo.tier}</p>
          <p>Type: {gpuInfo.type}</p>
        </div>
      )}

      {/* <Canvas
        className="canvas"
        shadows
        camera={{ position: [5, 20, 80], fov: 50 }}
      >
        <Suspense fallback={null} />
        <Scene></Scene>
      </Canvas> */}
      <LoadingScreen />

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
