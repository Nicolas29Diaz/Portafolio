import { ThreeScene } from "./Components/ThreeScene";
import { Canvas } from "@react-three/fiber";
import useStore from "./Store/Store.js";
import { useEffect } from "react";

function App() {
  const { showButton, setShowButton } = useStore();

  return (
    <>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [0, 0, 80], fov: 15 }}
      >
        <ThreeScene></ThreeScene>
      </Canvas>
      {showButton && (
        <button className="cancelButtons" onClick={() => setShowButton(false)}>
          X
        </button>
      )}
    </>
  );
}

export default App;
