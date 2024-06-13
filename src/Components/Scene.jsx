import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";

import { Escena } from "./3D_Components/Escena.jsx";
import { Scene3D } from "./3D_Components/3DScene.jsx";
import { Scene3D_2 } from "./3D_Components/3DScene_2.jsx";
export function Scene() {
  const cameraControls = {
    SKILLS: {
      maxDist: 8, //Max distance dolly to the object focused
      minDist: 2, //Min distance dolly to the object focused
      currentDist: 1,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      minAzimuthAngle: -Math.PI / 2,
      maxAzimuthAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 3.5, z: 0 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      dollySpeed: 0.5,
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [-9.7, 3.5, 6.4], //Mesh fit position
        size: [0.1, 2, 2], //Mesh fit size
        layer: 1, //Mesh fit layer
        rotation: [0, Math.PI / 5.5, 0],
      },
    },
    CHARACTER: {
      maxDist: 6, //Max distance dolly to the object focused
      minDist: 6, //Min distance dolly to the object focused
      currentDist: 6,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 5 }, //Coordinates to posisionate the camera view
      speed: 0.7, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [0.5, 1, 0], //Mesh fit position
        size: [2, 2, 1], //Mesh fit size
        layer: 1, //Mesh fit layer
      },
    },
    INITIAL: {
      maxDist: 30, //Max distance dolly to the object focused
      minDist: 0, //Min distance dolly to the object focused
      currentDist: 7,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [3, 1, 0], //Mesh fit position
        size: [5, 5, 5], //Mesh fit size
        layer: 1, //Mesh fit layer
      },
    },
    CONTACT: {
      maxDist: 12, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      currentDist: 3,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: -5, y: 3.6, z: 3 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [5.8, 2, -10], //Mesh fit position
        size: [4, 4, 4], //Mesh fit size
        layer: 1, //Mesh fit layer
        rotation: [0, 0, 0],
      },
    },
    PROJECTS: {
      maxDist: 22, //Max distance dolly to the object focused
      minDist: 8, //Min distance dolly to the object focused
      currentDist: 3,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: -5, y: 2.5, z: -1 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      dollySpeed: 0.5,
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [11.5, 2.53, 3], //Mesh fit position
        size: [1, 3, 5.5], //Mesh fit size
        layer: 0, //Mesh fit layer
        rotation: [0, -(14 * Math.PI) / 180, 0],
      },
    },
  };
  const {
    showButton,
    setShowButton,
    showButtonStart,
    setCameraFocus,
    setShowButtonStart,
  } = useStore();

  const [showFloatButtons, setShowFloatButtons] = useState(false);

  const [currentView, setCurrentView] = useState(views.INITIAL);

  let firstFit = true;

  const [minPolarAngle, setMinPolarAngle] = useState();
  const [maxPolarAngle, setMaxPolarAngle] = useState();

  const [minAzimuthAngle, setMinAzimuthAngle] = useState();
  const [maxAzimuthAngle, setMaxAzimuthAngle] = useState();
  const cameraControlRef = useRef();

  //Controls
  const [speed, setSpeed] = useState();
  const [dollySpeed, setDollySpeed] = useState();
  const [distMax, setDistMax] = useState();
  const [distMin, setDistMin] = useState();

  function initialConfig() {
    setMinPolarAngle(cameraControls.INITIAL.minAngle);
    setMaxPolarAngle(cameraControls.INITIAL.maxAngle);
    setDistMax(cameraControls.INITIAL.maxDist);
    setDistMin(cameraControls.INITIAL.minDist);
    setSpeed(cameraControls.INITIAL.speed);
  }

  const fitCamera = () => {
    const {
      maxDist,
      minDist,
      speed,
      maxAngle,
      minAngle,
      dollySpeed,
      maxAzimuthAngle,
      minAzimuthAngle,
    } = cameraControls[currentView];

    cameraControlRef.current.smoothTime = 0.3;
    cameraControlRef.current.fitToSphere(
      cameraControls[currentView].mesh.ref.current,
      true
    );

    setDistMax(maxDist);
    setDistMin(minDist);
    setMaxPolarAngle(maxAngle);
    setMinPolarAngle(minAngle);
    setMaxAzimuthAngle(maxAzimuthAngle);
    setMinAzimuthAngle(minAzimuthAngle);
    setSpeed(speed);
    setDollySpeed(dollySpeed);

    if (firstFit) {
      // console.log("FirstFit");
      const { currentDist } = cameraControls[currentView];
      cameraControlRef.current.distance = currentDist;
      firstFit = false;
    }
  };

  useEffect(() => {
    // setShowButtonStart(true);
    initialConfig();
    // console.log(cameraControlRef.current);
  }, []);

  useEffect(() => {
    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      // console.log("CHARACTER");
      const intervalId = setInterval(movCameraToObject, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowButton(true);
      }, 1500);
    }

    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentView]);

  function movCameraToObject() {
    const currentCoordCamera = cameraControls[currentView].coordCamera;
    const currentMesh = cameraControls[currentView].mesh.ref.current.position;
    // const { currentDist } = cameraControls[currentView];

    cameraControlRef.current.setLookAt(
      currentCoordCamera.x,
      currentCoordCamera.y,
      currentCoordCamera.z,
      currentMesh.x,
      currentMesh.y,
      currentMesh.z,
      true
    );

    // cameraControlRef.current.distance = currentDist;
    fitCamera();
  }

  useEffect(() => {
    // console.log(showButton);
    if (!showButton) {
      setCameraFocus(views.CHARACTER);
      setCurrentView(views.CHARACTER);
      setShowFloatButtons(true);
    }
  }, [showButton]);

  useEffect(() => {
    if (showButtonStart) {
      setCurrentView(views.INITIAL);
      fitCamera();
    } else {
      setCurrentView(views.CHARACTER);
      setShowFloatButtons(true);
    }
  }, [showButtonStart]);

  const changeView = (view) => {
    setCameraFocus(view);
    setCurrentView(view);
    setShowFloatButtons(false);
  };

  //Para mapear el cameraViews y mostrarlos
  const meshFitComponents = Object.entries(cameraControls).map(
    ([view, data]) => (
      <MeshFit
        key={view} // Asegúrate de tener una clave única
        ref={data.mesh.ref}
        position={data.mesh.position}
        rotation={data.mesh?.rotation}
        size={data.mesh.size}
        layer={data.mesh.layer}
      />
    )
  );

  return (
    <>
      {/* Camera configuration */}
      <CameraControls
        ref={cameraControlRef}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        // minAzimuthAngle={minAzimuthAngle ? minAzimuthAngle : -Infinity}
        // maxAzimuthAngle={maxAzimuthAngle ? maxAzimuthAngle : Infinity}
        maxDistance={distMax ? distMax : 200}
        minDistance={distMin ? distMin : 0.1}
        // infinityDolly={false}
        truckSpeed={0}
        dollySpeed={dollySpeed ? dollySpeed : speed}
        polarRotateSpeed={speed ? speed : 0}
        azimuthRotateSpeed={speed ? speed : 0}
        // enabled={false}
        // zoom={false}
      ></CameraControls>

      {/* Scene configuration */}
      <SceneConf></SceneConf>

      {/* Mesh fit camera targets */}
      <>{meshFitComponents}</>

      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        {/* <Escena></Escena> */}
        {/* <Scene3D></Scene3D> */}
        <Scene3D_2></Scene3D_2>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]}></boxGeometry>
        </mesh> */}
      </group>

      {showFloatButtons && !showButtonStart && (
        <>
          <FloatButton
            view={views.CONTACT}
            changeView={changeView}
            position={[5, 2.53, -7.668]}
            rotation={[0, -Math.PI / 5, Math.PI / 4]}
            scale={1}
          />
          <FloatButton
            view={views.SKILLS}
            changeView={changeView}
            position={[-8, 3.5, 5.5]}
            rotation={[-Math.PI, 1.004, Math.PI / 4]}
            scale={0.9}
          />
          <FloatButton
            view={views.PROJECTS}
            changeView={changeView}
            position={[10.5, 2.53, 3]}
            rotation={[0, Math.PI / 2, Math.PI / 4]}
            scale={0.9}
          />
        </>
      )}
    </>
  );
}
