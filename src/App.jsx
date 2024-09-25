import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { getGPUTier } from "detect-gpu";
import {
  Center,
  Preload,
  Text,
  Text3D,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import useStore from "./Store/Store.js";
import { EditScene } from "./Components/EditScene.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

import { SceneConf } from "./Components/SceneConfiguration/SceneConf.jsx";
import { Scene } from "./Components/Scene.jsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

//Styles
import "./StylesVariables/FloatButton.css";
import "./StylesVariables/CancelButton.css";
import "./StylesVariables/GlobalStyles.css";
import { Scene3D } from "./Components/3D_Models/Scene3D.jsx";

import { FloatObjects } from "./Components/FloatObjects.jsx";

import * as THREE from "three";
import ZoomDisabler from "./Components/ZoomDisabler.jsx";
import ZoomDisablerWrapper from "./Components/ZoomDisablerWrapper.jsx";
import { sceneControlsTime } from "./Store/Times.js";

/*

TAREAS:
- ENTENDER LO DEL ZOOM, Y VER SI SE PUEDE HACER DESDE CSS O JS APENAS SE CARGA LA PAGINA

MUY IMPORTANTE:
- Poner el ALT a las imagenes
- Ver por qué a veces sale charging true y otras false
- En iphone deja hacer zoom, quitarlo
- En safari la pantalla de contact no sirveeeee el hover
- Terminar pantalla Skills ponienido el modelo o quitando esa parte para mejorar la visibilidad
- Poner los proyectos
- Ver porqué apenas carga la pagina en moviles, hace un zoom raro, toca hacer un toque y se arregla


IMPORTANTE:
- GLOBALIZAR TIEMPOS DE ANIMACIONES Y DELAYS
- Usar WebP para las imagenes 
- Verificar el tamaño de los botones que sea responsive, no por pixels
- Poner todo eso de seo, etiquetas, etc (guiarse pagina david)


NO IMPORTA TANTO:
- Ver si meto scroll para continuar en la intro
- Animar svg about y projects y menu y contact
- Cambiar el icono del cursor, puede ser una bolita o algo así
- Quitar la lampara arriba mio
- Ver lo del riectionLight helper en drei pa poner lucess
- Poner luz en las lamparas (lava, mesa de about, PC, etc)
- Hacer el movimiento manual sin setLookAt de drei para personalizar la velocidad de movimiento
IDEAS:
 - EN VEZ DE ESTAR REPITIENDO LA FUNCIOPN DE SETLOOKAT OSEA MOVER LA CAMARA VARIAS VECES PARA EVITAR PROBLEMAS DE QUE EL USUARIO LA MUEVA, PUEDO INTENTAR EJECUTARLA UNA UNICA VEZ DESPUES DE UN DETERMINADO TIEMPO
 
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
    isStartButtonPressed,
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

  let gpuInfo = 0;

  const detectBattery = async () => {
    let charging = true;

    if ("getBattery" in navigator) {
      try {
        const battery = await navigator.getBattery();
        // console.log("battery", battery);
        const isPluggedIn = battery.charging;

        if (!isPluggedIn) {
          // console.log("Not charging");
          charging = false;
        }
        return charging;
      } catch (error) {
        // console.error("Error al obtener el estado de la batería: ", error);
        return charging;
      }
    } else {
      // console.log("API de batería no disponible.");
      return charging;
    }
  };

  useEffect(() => {
    const getGPUInfo = async () => {
      gpuInfo = await getGPUTier();

      console.log("gpuInfo.tier", gpuInfo.tier);

      const charging = await detectBattery(); // Espera el resultado de detectBattery
      console.log("charging", charging);

      if (!charging) {
        if (gpuInfo.tier === 3) {
          console.log("Dispositivo sin cargar, ajustando tier a 2.");
          setGpuTier(2);
        } else if (gpuInfo.tier === 2) {
          setGpuTier(1);
        }
      } else {
        setGpuTier(gpuInfo.tier);
      }
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

  useEffect(() => {
    setTimeout(() => {
      setShowScene(true);
    }, sceneControlsTime);
  }, []);

  return (
    <>
      {/* <ZoomDisablerWrapper> */}
      <LoadingScreen
        progress={progress}
        isStartButtonPressed={isStartButtonPressed}
        isStartButtonVisible={isStartButtonVisible}
        setStartButtonPressed={setStartButtonPressed}
        setStartButtonVisibility={setStartButtonVisibility}
      ></LoadingScreen>
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
          camera={{ position: [0, 5, 5], fov: 60 }}
          ref={refCanvas}
          //REVISAR ESTO, por ahora lo dejo en 1
          dpr={gpuTier === 3 ? 2 : 1}
        >
          <Suspense fallback={null}>
            <Scene3D></Scene3D>
            {/* <Character introAnimation={true}></Character> */}
            <SceneConf></SceneConf>
            {showScene && <Scene></Scene>}

            <Preload all />
          </Suspense>
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
        isStartButtonPressed={isStartButtonPressed}
      />
      {/* </ZoomDisablerWrapper> */}
    </>
  );
}

useGLTF.preload("./Fonts/Suse/SUSE-ExtraBold.ttf");
export default App;
