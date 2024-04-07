import { ThreeScene } from "./Components/ThreeScene";
import { Canvas } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { useEffect } from "react";
import { Scene } from "./Components/Scene.jsx";
function App() {
  const { showButton, setShowButton } = useStore();
  const { showButtonStart, setShowButtonStart } = useStore();

  return (
    <>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [5, 20, 80], fov: 40 }}
      >
        <Scene></Scene>
      </Canvas>
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
