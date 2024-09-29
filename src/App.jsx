// React & React Three Fiber core imports
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

// External libraries and utilities
import { getGPUTier } from "detect-gpu"; // GPU detection library
import { Preload, useGLTF, useProgress } from "@react-three/drei"; // Drei utilities for R3F

// Store (Global State Management)
import useStore from "./Store/Store.js";
import { introAnimateCamera } from "./Constants/Times.js"; // Custom store for managing scene times

// Components
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx"; // Loading screen component
import { SceneConf } from "./Components/SceneConfiguration/SceneConf.jsx"; // Scene configuration component
import { Scene } from "./Components/Scene.jsx"; // Main scene component
import { Scene3D } from "./Components/3D_Models/Scene3D.jsx"; // 3D Models for the scene
import { FloatObjects } from "./Components/Floats/FloatObjects.jsx"; // Floating objects component
import ZoomDisabler from "./Components/ZoomDisabler/ZoomDisabler.jsx"; // Disables zoom feature in the scene
import ZoomDisablerWrapper from "./Components/ZoomDisabler/ZoomDisablerWrapper.jsx"; // Wrapper for zoom disabler

//Styles
import "./StylesVariables/Screens/Skills.css";

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
  const [moveInitialCamera, setMoveInitialCamera] = useState(false);

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

      // console.log("gpuInfo.tier", gpuInfo.tier);

      const charging = await detectBattery(); // Espera el resultado de detectBattery
      // console.log("charging", charging);

      if (!charging) {
        if (gpuInfo.tier === 3) {
          // console.log("Dispositivo sin cargar, ajustando tier a 2.");
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
      setMoveInitialCamera(true);
    }, introAnimateCamera);
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
          camera={{ position: [0.9, 3.5, 4], fov: 60 }}
          onCreated={({ gl, camera }) => {
            camera.lookAt(1.9, 1.2, 0);
            camera.updateProjectionMatrix();
          }}
          ref={refCanvas}
          //REVISAR ESTO, por ahora lo dejo en 1
          dpr={gpuTier === 3 ? 2 : 1}
        >
          <Suspense fallback={null}>
            <Scene3D></Scene3D>
            {/* <Character introAnimation={true}></Character> */}
            <SceneConf></SceneConf>
            <Scene moveInitialCamera={moveInitialCamera}></Scene>

            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <FloatObjects
        isCancelButtonVisible={isCancelButtonVisible}
        isStartButtonPressed={isStartButtonPressed}
        isMenuButtonVisible={isMenuButtonVisible}
        setCancelButtonPressed={setCancelButtonPressed}
        setCancelButtonVisibility={setCancelButtonVisibility}
        setMenuView={setMenuView}
      />
      {/* </ZoomDisablerWrapper> */}
    </>
  );
}

useGLTF.preload("./Fonts/Suse/SUSE-ExtraBold.ttf");
export default App;
