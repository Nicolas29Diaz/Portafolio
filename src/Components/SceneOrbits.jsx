import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";
import { Scene3D } from "./3D_Components/Scene3D.jsx";
import { Escena } from "./3D_Components/Escena.jsx";
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
export function SceneOrbits() {
  const [enableControls, setEnableControls] = useState();
  const cameraControls = {
    SKILLS: {
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
        position: [-9.2, 3.6, 6], //Mesh fit position
        size: [1, 1.8, 1], //Mesh fit size
        layer: 1, //Mesh fit layer
        rotation: [0, Math.PI / 5, 0],
      },
    },
    CHARACTER: {
      maxDist: 9, //Max distance dolly to the object focused
      minDist: 7, //Min distance dolly to the object focused
      currentDist: 9,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
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
  };
  const { showButton, setShowButton, showButtonStart, setCameraFocus } =
    useStore();

  const [showFloatButtons, setShowFloatButtons] = useState(false);

  const [currentView, setCurrentView] = useState(views.INITIAL);

  let firstFit = true;

  const [minPolarAngle, setMinPolarAngle] = useState();
  const [maxPolarAngle, setMaxPolarAngle] = useState();
  //   const cameraControlRef = useRef();

  //Orbital controls
  const [speed, setSpeed] = useState();
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
    const { maxDist, minDist, speed, maxAngle, minAngle } =
      cameraControls[currentView];

    // cameraControlRef.current.smoothTime = 0.3;
    // cameraControlRef.current.fitToSphere(
    //   cameraControls[currentView].mesh.ref.current,
    //   true
    // );

    setDistMax(maxDist);
    setDistMin(minDist);
    setMaxPolarAngle(maxAngle);
    setMinPolarAngle(minAngle);
    setSpeed(speed);

    if (firstFit) {
      console.log("FirstFit");
      const { currentDist } = cameraControls[currentView];
      //   cameraControlRef.current.distance = currentDist;
      firstFit = false;
    }
  };

  useEffect(() => {
    initialConfig();
    // console.log(cameraControlRef.current);
  }, []);

  useEffect(() => {
    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      console.log("CHARACTER");
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
    const { currentDist } = cameraControls[currentView];

    // cameraControlRef.current.setLookAt(
    //   currentCoordCamera.x,
    //   currentCoordCamera.y,
    //   currentCoordCamera.z,
    //   currentMesh.x,
    //   currentMesh.y,
    //   currentMesh.z,
    //   true
    // );

    // cameraControlRef.current.distance = currentDist;
    fitCamera();
  }

  useEffect(() => {
    console.log(showButton);
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
      {/* <Html
        transform
        occlude="blending"
        style={{
          backgroundColor: "red",
          width: "200px",
          height: "100px",
          overflowY: "auto",
        }}
      >
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
        <h1>HOLA</h1>
      </Html> */}
      {/* Camera configuration */}
      {/* <OrbitControls
        target={[0, 0, 0]}
        maxDistance={10}
        minDistance={8}
      ></OrbitControls> */}

      {/* <CameraControls
        ref={cameraControlRef}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        maxDistance={distMax}
        minDistance={distMin}
        // infinityDolly={false}
        truckSpeed={0}
        dollySpeed={speed ? speed : 0}
        polarRotateSpeed={speed ? speed : 0}
        azimuthRotateSpeed={speed ? speed : 0}
        // enabled={false}
      ></CameraControls> */}

      {/* Scene configuration */}
      <SceneConf></SceneConf>

      {/* Mesh fit camera targets */}
      <>{meshFitComponents}</>

      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <Escena></Escena>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]}></boxGeometry>
        </mesh> */}
      </group>

      {/* {showFloatButtons && !showButtonStart && (
        <>
          <FloatButton
            view={views.CONTACT}
            changeView={changeView}
            position={[5, 1.802, -7.668]}
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
        </>
      )} */}
    </>
  );
}
