import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import { Preload, Text, useProgress } from "@react-three/drei";
import useStore from "./Store/Store.js";
import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import { SceneConf } from "./Components/SceneConf.jsx";
import { Scene } from "./Components/Scene.jsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";


//Styles
import "./Syles/FloatButton.css";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";
import "./Syles/GlobalStyles.css";

/*
QUEDÉ EN SUBTITLE, TOCA CAMBIAR EL MASK POR EL PATH Y PONER EL TEXTO AFUERA DEL SVG, Y VER SI FUNCIONA
LA ANIMACION O ARREGLARLA PARA HACERLA DESDE CSS Y HTML NORMAL, NO SVG

TAREAS:
MUY IMPORTANTE:
- En safari la pantalla de contact no sirveeeee el hover
- Solucionar problemas con IOS (Textos, tamaños, etc)
- Averiguar y poner en vez de font size, poner el tipo de fuente que ya viene bold
- Verificar tamaño fuente uniforme IOS y Android y Windows.. Poner una fuente de respaldo
- Terminar pantalla Skills ponienido el modelo
- Poner los proyectos
- Hacer la pantalla de caraga
- Posicionar bien los textos en skills

IMPORTANTE:
- Usar WebP para las imagenes 
- Verificar el tamaño de los botones que sea responsive, no por pixels


NO IMPORTA TANTO:
- Animar svg about y projects y menu y contact
- Cambiar el icono del cursor, puede ser una bolita o algo así
- Quitar la lampara arriba mio


IDEAS:
- Icono para mostrar al usuario que puede deslizar la pantalla
- Sonido de ambiente y en general
- Night Mode, poner la escena oscura y con las estrellas, tambien puede ser cambiar las pantallas
*/

function App() {
  const {
    isCancelButtonVisible,
    setCancelButtonVisibility,
    setCancelButtonPressed,
    showButtonStart,
    setShowButtonStart,
    setGpuTier,
    setMenuView,
    isMenuButtonVisible,
  } = useStore();
  const editMode = false;

  const { progress } = useProgress();
  const refCanvas = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width:
      window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
    height:
      window.innerHeight % 2 === 0
        ? window.innerHeight
        : window.innerHeight + 1,
  });

  useEffect(() => {
    const getGPUInfo = async () => {
      const gpuInfo = await getGPUTier();
      setGpuTier(gpuInfo.tier);
      console.log("gpuInfo.tier", gpuInfo.tier);
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

  // Listener para el evento resize, ajusta el tamaño del canvas a valores pares
  useEffect(() => {
    const handleResize = () => {
      const canv = {
        width:
          window.innerWidth % 2 === 0
            ? window.innerWidth
            : window.innerWidth + 1,
        height:
          window.innerHeight % 2 === 0
            ? window.innerHeight
            : window.innerHeight + 1,
      };
      setCanvasSize(canv);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className="canvas-container"
        style={{
          opacity: isLoaded ? 0 : 1,
          height: canvasSize.height,
          width: canvasSize.width,
        }}
      >
        <Canvas
          shadows
          camera={{ position: [1, 4, 7], fov: 60 }}
          ref={refCanvas}
          dpr={2}
        >
          <Suspense fallback={<LoadingScreen />}>
            <SceneConf></SceneConf>
            {editMode ? <EditScene></EditScene> : <Scene></Scene>}
            <Preload all onLoad={() => setIsLoaded(true)} />
          </Suspense>

          {showButtonStart && (
            <group
              position={windowWidth > 1000 ? [2, 2, 2] : [-1.35, 5, 1]}
              rotation={windowWidth > 1000 ? [-0.3, -0.4, -0.1] : [0, 0, -0.01]}
            >
              <Text
                lineHeight={1}
                anchorX="left"
                anchorY="middle"
                fontSize={windowWidth > 1000 ? 0.7 : 0.45}
                maxWidth={6}
                font="./Fonts/Poppins-Black.ttf"
              >
                {`Hi! I'm \nNicolas Diaz`}
                {/* ACA SE PUEDE MEJORAR ESTO PARA MAYOR FLUIDEZ */}
                {/* <meshStandardMaterial
                  emissive="white"
                  emissiveIntensity={0.5}
                />
                <EffectComposer>
                  <Bloom
                    intensity={0.3}
                    luminanceThreshold={0.5}
                    luminanceSmoothing={0.9}
                  />
                </EffectComposer> */}
              </Text>
            </group>
          )}
        </Canvas>
      </div>

      {isCancelButtonVisible && (
        <div className="contentCancelButton">
          <div
            onClick={() => {
              setCancelButtonPressed(true);
              setCancelButtonVisibility(false);
            }}
          >
            +
          </div>
          <i></i>
          <i></i>
        </div>
      )}

      {progress >= 100 && showButtonStart && (
        <div className="containerStartButton">
          <button
            onClick={() => {
              setShowButtonStart(false);
            }}
          >
            Start
          </button>
        </div>
      )}

      {/* {showButtonStart && (
        <div
          className={
            windowWidth > 1000 ? "vintage-overlay-1" : "vintage-overlay-2"
          }
        ></div>
      )} */}

      {isMenuButtonVisible && (
        <div
          className="menu-button-container"
          onClick={() => setMenuView(true)}
        >
          <img src="./Images/Icons/Menu3.png" alt="MenuIcon" />
          {/* <button onClick={() => setMenuView(true)}>Menu</button> */}
        </div>
      )}
    </>
  );
}

export default App;
