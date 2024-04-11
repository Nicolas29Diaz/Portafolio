import { Canvas } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { Scene } from "./Components/Scene.jsx";
import { Suspense } from "react";
import LoadingScreen from "./Components/LoadingScreen.jsx";
import { PerspectiveCamera } from "@react-three/drei";
function App() {
  const { showButton, setShowButton } = useStore();
  const { showButtonStart, setShowButtonStart } = useStore();

  return (
    <>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [5, 20, 80], fov: 50 }}
      >
        {/* <PerspectiveCamera position={[-5, 5, 5]} makeDefault /> */}
        <Suspense fallback={null} />
        <Scene></Scene>
      </Canvas>
      <LoadingScreen />
      {showButton && (
        <button className="cancelButtons" onClick={() => setShowButton(false)}>
          X
        </button>
      )}

      {!showButtonStart && (
        <button
          className="cancelButtons"
          onClick={() => setShowButtonStart(true)}
        >
          Start
        </button>
      )}
    </>
  );
}

export default App;
