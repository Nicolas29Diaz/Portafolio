import { Box, CameraControls, Html, Text } from "@react-three/drei";
import { useState, useRef, useEffect, useMemo } from "react";
import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";
import { Scene3D } from "./3D_Components/3D_Scene.jsx";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
export function SceneOp2() {
  // const camera = useThree().camera;

  // const [characterDist, setCharacterDist] = useState(
  //   window.innerWidth <= 768 ? 6 : 4
  // );

  // const cameraControls = {
  //   SKILLS: {
  //     maxDist: 8, //Max distance dolly to the object focused
  //     minDist: 2, //Min distance dolly to the object focused
  //     currentDist: 1,
  //     currentDistMobile: 6,
  //     minAngle: Math.PI / 4,
  //     maxAngle: Math.PI / 2,
  //     minAzimuthAngle: -Math.PI / 2,
  //     maxAzimuthAngle: Math.PI / 2,
  //     coordCamera: { x: -5, y: 3.96, z: -1.6 }, //Coordinates to posisionate the camera view
  //     speed: 0, //Enable/Disable (1 or 0) orbits controls
  //     dollySpeed: 0.5,
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: [-7.87, 3.96, -2.85], //Mesh fit position
  //       size: [1, 2, 4], //Mesh fit size
  //       layer: 0, //Mesh fit layer
  //       rotation: [0, (-24 * Math.PI) / 180, 0],
  //     },
  //   },
  //   CHARACTER: {
  //     maxDist: characterDist, //Max distance dolly to the object focused
  //     minDist: characterDist, //Min distance dolly to the object focused
  //     currentDist: characterDist,
  //     minAngle: Math.PI / 3,
  //     maxAngle: Math.PI / 2,
  //     coordCamera: { x: 0, y: 0, z: 5 }, //Coordinates to posisionate the camera view
  //     speed: 0.7, //Enable/Disable (1 or 0) orbits controls
  //     dollySpeed: 0,
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: [0.5, 1, 0], //Mesh fit position
  //       size: [2, 2, 1], //Mesh fit size
  //       layer: 1, //Mesh fit layer
  //     },
  //   },
  //   INITIAL: {
  //     maxDist: 5000, //Max distance dolly to the object focused
  //     minDist: 0, //Min distance dolly to the object focused
  //     currentDist: 80,
  //     minAngle: Math.PI / 3,
  //     maxAngle: Math.PI / 2,
  //     coordCamera:
  //       window.innerWidth <= 768
  //         ? { x: 0, y: 3.5, z: 7 }
  //         : { x: 1, y: 3.5, z: 7 }, //Coordinates to posisionate the camera view
  //     speed: 0, //Enable/Disable (1 or 0) orbits controls
  //     dollySpeed: 0,
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: window.innerWidth <= 768 ? [0, 3, 0] : [3, 0, 0], //Mesh fit position
  //       rotation: [0, 0, 0],
  //       size: [2, 2, 2], //Mesh fit size
  //       layer: 1, //Mesh fit layer
  //     },
  //   },
  //   CONTACT: {
  //     maxDist: 12, //Max distance dolly to the object focused
  //     minDist: 1, //Min distance dolly to the object focused
  //     currentDist: 3,
  //     currentDistMobile: 6,
  //     minAngle: Math.PI / 4,
  //     maxAngle: Math.PI / 2,
  //     coordCamera: { x: -5, y: 3.6, z: 3 }, //Coordinates to posisionate the camera view
  //     speed: 0, //Enable/Disable (1 or 0) orbits controls
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: [5.8, 2, -10], //Mesh fit position
  //       size: [4, 4, 4], //Mesh fit size
  //       layer: 1, //Mesh fit layer
  //       rotation: [0, 0, 0],
  //     },
  //   },
  //   PROJECTS: {
  //     maxDist: 11, //Max distance dolly to the object focused
  //     minDist: 4, //Min distance dolly to the object focused
  //     currentDist: 0,
  //     currentDistMobile: 4,
  //     minAngle: Math.PI / 4,
  //     maxAngle: Math.PI / 2,
  //     coordCamera: { x: 0.7, y: 2.55, z: 3 }, //Coordinates to posisionate the camera view
  //     speed: 0, //Enable/Disable (1 or 0) orbits controls
  //     dollySpeed: 0.5,
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: [0.9, 2.55, 7.86], //Mesh fit position
  //       size: [5.5, 4, 1], //Mesh fit size
  //       layer: 1, //Mesh fit layer
  //       rotation: [0, 0, 0],
  //     },
  //   },
  //   ABOUT: {
  //     maxDist: 8, //Max distance dolly to the object focused
  //     minDist: 3, //Min distance dolly to the object focused
  //     currentDist: 5,
  //     currentDistMobile: 4,
  //     minAngle: Math.PI / 4,
  //     maxAngle: Math.PI / 2,
  //     coordCamera:
  //       window.innerWidth <= 768
  //         ? { x: 1, y: 2.78, z: 0.5 }
  //         : { x: 6, y: 2.78, z: 0.5 }, //Coordinates to posisionate the camera view
  //     speed: 0, //Enable/Disable (1 or 0) orbits controls
  //     dollySpeed: 0.5,
  //     mesh: {
  //       ref: useRef(), //Mesh to center the camera view
  //       position: [8.93, 2.78, 0.55], //Mesh fit position
  //       size: [1, 2, 4], //Mesh fit size
  //       layer: 1, //Mesh fit layer
  //       rotation: [0, 0, 0],
  //     },
  //   },
  // };
  // const {
  //   showCancelButton,
  //   setShowCancelButton,
  //   showButtonStart,
  //   setCameraFocus,
  //   setShowButtonStart,
  //   showFloatButtons,
  //   setShowFloatButtons,
  // } = useStore();

  // // const [showFloatButtons, setShowFloatButtons] = useState(false);

  // const [currentView, setCurrentView] = useState(views.INITIAL);

  // let firstFit = true;
  // const [initialView, setInitialView] = useState(true);

  // const [minPolarAngle, setMinPolarAngle] = useState();
  // const [maxPolarAngle, setMaxPolarAngle] = useState();

  // const [minAzimuthAngle, setMinAzimuthAngle] = useState();
  // const [maxAzimuthAngle, setMaxAzimuthAngle] = useState();
  // const cameraControlRef = useRef();

  // //Controls
  // const [speed, setSpeed] = useState();
  // const [dollySpeed, setDollySpeed] = useState();
  // const [distMax, setDistMax] = useState();
  // const [distMin, setDistMin] = useState();

  // // function initialConfig() {
  // //   setMinPolarAngle(cameraControls.INITIAL.minAngle);
  // //   setMaxPolarAngle(cameraControls.INITIAL.maxAngle);
  // //   setDistMax(cameraControls.INITIAL.maxDist);
  // //   setDistMin(cameraControls.INITIAL.minDist);
  // //   setSpeed(cameraControls.INITIAL.speed);
  // //   cameraControlRef.current.distance = cameraControls.INITIAL.currentDist;
  // //   console.log("InitialConfig");
  // //   console.log(cameraControlRef.current.distance);
  // // }

  // const fitCamera = () => {
  //   console.log("FitCamera");
  //   const {
  //     maxDist,
  //     minDist,
  //     speed,
  //     maxAngle,
  //     minAngle,
  //     dollySpeed,
  //     maxAzimuthAngle,
  //     minAzimuthAngle,
  //   } = cameraControls[currentView];

  //   cameraControlRef.current.smoothTime = 0.3;
  //   cameraControlRef.current.fitToSphere(
  //     cameraControls[currentView].mesh.ref.current,
  //     true
  //   );

  //   setDistMax(maxDist);
  //   setDistMin(minDist);
  //   setMaxPolarAngle(maxAngle);
  //   setMinPolarAngle(minAngle);
  //   setMaxAzimuthAngle(maxAzimuthAngle);
  //   setMinAzimuthAngle(minAzimuthAngle);
  //   setSpeed(speed);
  //   setDollySpeed(dollySpeed);

  //   // if (firstFit) {
  //   //   // console.log("FirstFit");
  //   //   const { currentDist } = cameraControls[currentView];
  //   //   cameraControlRef.current.distance = currentDist;
  //   //   firstFit = false;
  //   // }

  //   if (window.innerWidth <= 768 && currentView === views.CHARACTER) {
  //     cameraControlRef.current.distance = 6;
  //   } else {
  //     cameraControlRef.current.distance = 4;
  //   }
  // };

  // // useEffect(() => {
  // //   // setShowButtonStart(true);
  // //   initialConfig();
  // //   // console.log(cameraControlRef.current);
  // // }, []);

  // useEffect(() => {
  //   if (!initialView) {
  //     if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
  //       // console.log("CHARACTER");
  //       const intervalId = setInterval(movCameraToObject, 1);
  //       setTimeout(() => {
  //         clearInterval(intervalId);
  //         setShowCancelButton(true);
  //       }, 1500);
  //     }

  //     fitCamera();
  //     window.addEventListener("resize", fitCamera);
  //     return () => window.removeEventListener("resize", fitCamera);
  //   } else {
  //     movCameraToObject();
  //     const move = () => {
  //       if (window.innerWidth <= 1000) {
  //         cameraControlRef.current.setLookAt(0, 3.5, 7, 0, 3, 0, true);
  //       } else {
  //         cameraControlRef.current.setLookAt(1, 3.5, 7, 3, 0, 0, true);
  //       }
  //     };
  //     window.addEventListener("resize", move);
  //     return () => window.removeEventListener("resize", move);
  //   }
  // }, [currentView]);

  // function movCameraToObject() {
  //   const currentCoordCamera = cameraControls[currentView].coordCamera;
  //   const currentMesh = cameraControls[currentView].mesh.ref.current.position;
  //   // const { currentDist } = cameraControls[currentView];

  //   cameraControlRef.current.setLookAt(
  //     currentCoordCamera.x,
  //     currentCoordCamera.y,
  //     currentCoordCamera.z,
  //     currentMesh.x,
  //     currentMesh.y,
  //     currentMesh.z,
  //     true
  //   );

  //   // cameraControlRef.current.distance = currentDist;
  //   !initialView ?? fitCamera();
  // }

  // useEffect(() => {
  //   if (!showCancelButton && !showButtonStart) {
  //     setCameraFocus(views.CHARACTER);
  //     setCurrentView(views.CHARACTER);
  //     setShowFloatButtons(true);
  //   }
  // }, [showCancelButton]);

  // useEffect(() => {
  //   if (showButtonStart) {
  //     setCameraFocus(views.INITIAL);
  //     // setCurrentView(views.INITIAL);
  //     // fitCamera();
  //   } else {
  //     setInitialView(false);
  //     setCameraFocus(views.CHARACTER);
  //     setCurrentView(views.CHARACTER);
  //     setTimeout(() => {
  //       setShowFloatButtons(true);
  //     }, 1000);
  //   }
  // }, [showButtonStart]);

  // const changeView = (view) => {
  //   setCameraFocus(view);
  //   setCurrentView(view);

  //   setShowFloatButtons(false);
  // };

  // //Para mapear el cameraViews y mostrarlos
  // const meshFitComponents = Object.entries(cameraControls).map(
  //   ([view, data]) => (
  //     <MeshFit
  //       key={view} // Asegúrate de tener una clave única
  //       ref={data.mesh.ref}
  //       position={data.mesh.position}
  //       rotation={data.mesh?.rotation}
  //       size={data.mesh.size}
  //       layer={data.mesh.layer}
  //     />
  //   )
  // );

  // return (
  //   <>
  //     {/* Camera configuration */}
  //     <CameraControls
  //       ref={cameraControlRef}
  //       minPolarAngle={minPolarAngle}
  //       maxPolarAngle={maxPolarAngle}
  //       // minAzimuthAngle={minAzimuthAngle ? minAzimuthAngle : -Infinity}
  //       // maxAzimuthAngle={maxAzimuthAngle ? maxAzimuthAngle : Infinity}
  //       maxDistance={distMax ? distMax : 200}
  //       minDistance={distMin ? distMin : 0.1}
  //       // infinityDolly={false}
  //       truckSpeed={0}
  //       dollySpeed={dollySpeed ? dollySpeed : 0}
  //       polarRotateSpeed={speed ? speed : 0}
  //       azimuthRotateSpeed={speed ? speed : 0}
  //       // enabled={false}
  //       // zoom={false}
  //     ></CameraControls>

  //     {/* Mesh fit camera targets */}
  //     <>{meshFitComponents}</>

  //     <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
  //       {/* <Escena></Escena> */}
  //       <Scene3D></Scene3D>
  //       {/* <Scene3D_2></Scene3D_2> */}
  //       {/* <mesh>
  //         <boxGeometry args={[1, 1, 1]}></boxGeometry>
  //       </mesh> */}
  //     </group>

  //     {/* {!showButtonStart && ( */}
  //     <>
  //       <FloatButton
  //         view={views.CONTACT}
  //         changeView={changeView}
  //         position={[5, 2.53, -7.668]}
  //         rotation={[0, -Math.PI / 5, Math.PI / 4]}
  //       />
  //       <FloatButton
  //         view={views.SKILLS}
  //         changeView={changeView}
  //         position={[-6.85, 4, -2.37]}
  //         rotation={[0, 1, Math.PI / 4]}
  //       />
  //       <FloatButton
  //         view={views.PROJECTS}
  //         changeView={changeView}
  //         position={[0.5, 2.53, 6]}
  //         rotation={[0, 0, Math.PI / 4]}
  //       />
  //       <FloatButton
  //         view={views.ABOUT}
  //         changeView={changeView}
  //         position={[8, 2.8, 0.65]}
  //         rotation={[0, Math.PI / 2, Math.PI / 4]}
  //       />
  //     </>
  //     {/* )} */}

  //   </>
  // );
  const textRef = useRef();
  const boxRef = useRef();
  const lightRef = useRef();

  return (
    <>
      <Text
        ref={textRef}
        position={[1, 0, 0]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
        // layers={0}
      >
        RESALTADO
      </Text>
      <Box ref={boxRef} args={[1, 1, 1]} position={[-3, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <Box args={[1, 1, 1]} position={[-3, 2, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <pointLight ref={lightRef} position={[0,0, 0]} intensity={100} />
      <EffectComposer>
        <SelectiveBloom
          lights={lightRef} // No necesitamos luces específicas para el bloom
          selection={[textRef, boxRef]}
          intensity={8}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  );
}
