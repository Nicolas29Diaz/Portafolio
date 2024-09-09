import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import {
  Environment,
  Html,
  Loader,
  OrbitControls,
  Preload,
  RenderTexture,
  Text,
  useProgress,
} from "@react-three/drei";

import useStore from "./Store/Store.js";

import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import "./Syles/FloatButton.css";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";
import { SceneConf } from "./Components/SceneConf.jsx";

import { Scene } from "./Components/Scene.jsx";
import { SceneOp2 } from "./Components/SceneOp2.jsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import BackGround from "./Components/Interfaces/Skills/SvgItems/BackGround.jsx";
import Skills from "./Components/Interfaces/Skills/Skills.jsx";
/*

TAREAS:
- Verificar tamaño fuente uniforme IOS y Android y Windows.. Poner una fuente de respaldo
- Animar svg about y projects y menu y contact
- Terminar pantalla Skills ponienido el modelo
- Hacer la pantalla de Contacto
- Poner los proyectos
- En la vista desde celular se ve el boton de proyects mientras se ve el charact, ajustar ya sea el boton o la camara
- Verificar el tamaño de los botones que sea responsive, no por pixels
- Arreglar cosas en Safari/IPhone o simpelemente no soportarlo y poner un mensaje de que no es soportado en Safari
- No dejar mover la camara hasta que se cierre el casco de analisis

IDEAS:
- Icono para mostrar al usuario que puede deslizar la pantalla
- Sonido de ambiente y en general
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

  
  const [canvasSize, setCanvasSize] = useState({
    width:
      window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
    height:
      window.innerHeight % 2 === 0
        ? window.innerHeight
        : window.innerHeight + 1,
  });

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
      console.log("canvasSize");
      console.log(canv);
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
        // ref={canvasRef}
      >
        <Canvas
          shadows
          camera={{ position: [5, 20, 80], fov: 60 }}
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
                <meshStandardMaterial
                  emissive="white"
                  emissiveIntensity={0.5}
                />
                <EffectComposer>
                  <Bloom
                    intensity={0.3}
                    luminanceThreshold={0.5}
                    luminanceSmoothing={0.9}
                  />
                </EffectComposer>
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
        <div className="containerStartButton">
          <button onClick={() => setShowButtonStart(false)}>Start</button>
        </div>
      )}

      {showButtonStart && (
        <div
          className={
            windowWidth > 1000 ? "vintage-overlay-1" : "vintage-overlay-2"
          }
        ></div>
      )}
    </>
  );
}

export default App;
