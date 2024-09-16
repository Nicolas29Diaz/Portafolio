import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import { Preload, Text, useGLTF, useProgress } from "@react-three/drei";
import useStore from "./Store/Store.js";
import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import { SceneConf } from "./Components/SceneConfiguration/SceneConf.jsx";
import { Scene } from "./Components/Scene.jsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

//Styles
import "./Syles/FloatButton.css";
import "./Syles/CancelButton.css";
import "./Syles/StartButton.css";
import "./Syles/GlobalStyles.css";
import { Scene3D } from "./Components/3D_Models/Scene3D.jsx";
import { Character } from "./Components/3D_Models/Character.jsx";
import { FloatObjects } from "./Components/FloatObjects.jsx";

import * as THREE from "three";
import ZoomDisabler from "./Components/ZoomDisabler.jsx";
import ZoomDisablerWrapper from "./Components/ZoomDisablerWrapper.jsx";

/*
QUEDÉ EN SUBTITLE, TOCA CAMBIAR EL MASK POR EL PATH Y PONER EL TEXTO AFUERA DEL SVG, Y VER SI FUNCIONA
LA ANIMACION O ARREGLARLA PARA HACERLA DESDE CSS Y HTML NORMAL, NO SVG

TAREAS:
- ENTENDER LO DEL ZOOM, Y VER SI SE PUEDE HACER DESDE CSS O JS APENAS SE CARGA LA PAGINA
MUY IMPORTANTE:
- En iphon deja hacer zoom, quitarlo
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
- Poner todo eso de seo, etiquetas, etc (guiarse pagina david)


NO IMPORTA TANTO:
- Animar svg about y projects y menu y contact
- Cambiar el icono del cursor, puede ser una bolita o algo así
- Quitar la lampara arriba mio
- Ver lo del riectionLight helper en drei pa poner lucess
- Poner luz en las lamparas (lava, mesa de about, PC, etc)

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
    setGpuTier,
    gpuTier,
    setMenuView,
    isMenuButtonVisible,
    isCharacterAnimStarted,
    cameraFocus,

    isStartButtonVisible,
    setStartButtonVisibility,
    setStartButtonPressed,
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
  const [showScene, setShowScene] = useState(false);

  const moveCameraDelay = 500;

  let gpuInfo = 0;

  useEffect(() => {
    const getGPUInfo = async () => {
      gpuInfo = await getGPUTier();
      setGpuTier(gpuInfo.tier);
      console.log("gpuInfo.tier", gpuInfo.tier);
    };
    getGPUInfo();

    setTimeout(() => {
      setShowScene(true);
    }, moveCameraDelay);
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

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);

    if (show) {
      setTimeout(() => {
        setStartButtonVisibility(false);
      }, 2500);
    }
  }, [showScene]);

  return (
    <>
      <ZoomDisablerWrapper>
        <LoadingScreen progress={progress}></LoadingScreen>
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
            camera={{ position: [1, 5, 7], fov: 60 }}
            ref={refCanvas}
            dpr={gpuTier === 3 ? 1 : 1} //REVISAR ESTO, por ahora lo dejo en 1
          >
            <Suspense fallback={null}>
              <SceneConf></SceneConf>
              <Scene3D></Scene3D>
              {show && <Scene></Scene>}

              <Preload all />
            </Suspense>

            {/* {showButtonStart && ( */}

            {cameraFocus === "INITIAL" && (
              <group
                position={windowWidth > 1000 ? [2, 2, 2] : [-1.45, 5, 1]}
                rotation={
                  windowWidth > 1000 ? [-0.3, -0.4, -0.1] : [0, 0, -0.01]
                }
              >
                <Text
                  lineHeight={1}
                  anchorX="left"
                  anchorY="middle"
                  fontSize={windowWidth > 1000 ? 0.8 : 0.55}
                  maxWidth={6}
                  font="./Fonts/Suse/SUSE-ExtraBold.ttf"
                >
                  <meshStandardMaterial color="white" />
                  {`Hi! I'm \nNicolas Diaz`}
                  {/* ACA SE PUEDE MEJORAR ESTO PARA MAYOR FLUIDEZ */}
                  <meshStandardMaterial
                    emissive="white"
                    emissiveIntensity={0.5}
                  />
                </Text>
              </group>
            )}
          </Canvas>
        </div>

        <FloatObjects
          isCancelButtonVisible={isCancelButtonVisible}
          progress={progress}
          windowWidth={windowWidth}
          isMenuButtonVisible={isMenuButtonVisible}
          setCancelButtonPressed={setCancelButtonPressed}
          setCancelButtonVisibility={setCancelButtonVisibility}
          setMenuView={setMenuView}
          isStartButtonVisible={isStartButtonVisible}
          setStartButtonPressed={setStartButtonPressed}
        />
      </ZoomDisablerWrapper>
    </>
  );
}

useGLTF.preload("./Fonts/Suse/SUSE-ExtraBold.ttf");
export default App;
