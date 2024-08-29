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

import { Scene2 } from "./Components/Scene2.jsx";

/*

TAREAS:
- En blender hacer otros cables verdes pero que sigan derecho, no hasta la silla, para que cuendo
  esté en la pantalla de projects se vean los cables abajo pero no tapen la pantalla

- Terminar pantalla Skills ponienido imagenes y el modelo
- Terminar pantalla About ponienido la foto y el texto, ademas animar las lineas
- Hacer la pantalla de Contacto
- Poner los proyectos
- Pulir código
- En la vista desde celular se ve el boton de proyects mientras se ve el charact, ajustar ya sea el boton o la camara
- Verificar el tamaño de los botones que sea responsive, no por pixels
IDEAS:
- Hacer que el botón de start aparezca cuando el progreso sea 100%
- Poner un botón menu que mueva la camara hacía el menu (con la opción de cancelar)
- Disolver los ojos del personaje
- Quitar sombras para dispositivos de gama baja
- En skills palanca animada o boton animado.
- Poner mi foto y poner un texto que diga VirtualSkin o Skin o Game Skin o algo así
- Night Mode, poner la escena oscura y con las estrellas, tambien puede ser cambiar las pantallas
- Para darle vida al personaje al saludar puede alzar las cejas y agrandar los ojos o algo así
- Poner una lampara arriba mio
- Poner materas y cosas lowpoly
*/

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

  const refCanvas = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getGPUInfo = async () => {
      const gpuInfo = await getGPUTier();
      setGpuTier(gpuInfo.tier);
      // console.log(gpuInfo.tier);
    };
    getGPUInfo();
  }, []);

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
        <Canvas
          shadows
          camera={{ position: [5, 20, 80], fov: 60 }}
          ref={refCanvas}
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
