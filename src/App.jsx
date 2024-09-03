import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import {
  Environment,
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
/*

TAREAS:
- Cuando desaparece y vuelve y aparece la silla, el casco aparece levantado
- En blender hacer otros cables verdes pero que sigan derecho, no hasta la silla, para que cuando
  esté en la pantalla de projects se vean los cables abajo pero no tapen la pantalla
- Terminar pantalla Skills ponienido imagenes y el modelo
- Terminar pantalla About ponienido la foto y el texto, ademas animar las lineas
- Hacer la pantalla de Contacto
- Poner los proyectos
- Pulir código
- En la vista desde celular se ve el boton de proyects mientras se ve el charact, ajustar ya sea el boton o la camara
- Verificar el tamaño de los botones que sea responsive, no por pixels
- Arreglar cosas en Safari o simpelemente no soportarlo y poner un mensaje de que no es soportado en Safari
IDEAS:
- No dejar mover la camara hasta que se cierre el casco de analisis
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
  return (
    <>
      <div className="canvas-container" style={{ opacity: isLoaded ? 0 : 1 }}>
        <Canvas
          shadows
          camera={{ position: [5, 20, 80], fov: 60 }}
          ref={refCanvas}
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
                    intensity={0.3} // Aumenta o disminuye para ajustar el brillo
                    luminanceThreshold={0.5} // Ajusta el umbral de luminancia
                    luminanceSmoothing={0.9} // Suaviza el efecto
                  />
                </EffectComposer>
              </Text>
            </group>
          )}
        </Canvas>

        {/* <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={["#000"]} />
          <ambientLight intensity={0.1} />
         
          <SceneOp2 />
          <OrbitControls />
        </Canvas> */}
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

      {/* <div className="vintage-overlay2"></div> */}
    </>
  );
}

export default App;
