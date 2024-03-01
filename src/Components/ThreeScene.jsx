import {
  CameraControls,
  Environment,
  Stars,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { useState, useRef, useEffect, Suspense } from "react";
import { FloatButton } from "./FloatButton.jsx";
import useStore from "../Store/Store.js";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ThreeScene() {
  const { showButton, setShowButton } = useStore();

  const [toggle, setToggle] = useState(true);

  //Current view of the camera
  const [currentView, setCurrentView] = useState("character");
  const cameraControlRef = useRef();

  //Orbital controls
  const [speed, setSpeed] = useState(1);
  const [maxDistance, setmaxDistance] = useState(50);
  const [minDistance, setminDistance] = useState(10);

  //Max/Min distance dolly to the object focused
  const maxDistCharacter = 50;
  const minDistCharacter = 10;

  const maxDistTV = 80;
  const minDistTV = 10;

  const maxDistPC = 80;
  const minDistPC = 10;

  //Mesh to center the camera view
  const meshFitCameraCharacter = useRef();
  const meshFitCameraTV = useRef();
  const meshFitCameraPC = useRef();

  //Coordinates to posisionate the camera view
  const coordCameraCharacter = { x: 0, y: 0, z: 0 };
  const coordCameraTV = { x: 1, y: 0, z: 1 };
  const coordCameraPC = { x: 0, y: 0, z: 0 };

  //Function to fitCameraView responsive
  const fitCamera = () => {
    switch (currentView) {
      case "character":
        meshFitCameraCharacter.current.layers.set(1);
        cameraControlRef.current.fitToSphere(
          meshFitCameraCharacter.current,
          true,
          0,
          0,
          0,
          0
        );
        break;
      case "tv":
        meshFitCameraTV.current.layers.set(1);
        cameraControlRef.current.fitToSphere(
          meshFitCameraTV.current,
          true,
          0,
          0,
          0,
          0
        );
        break;
      default:
    }
  };

  function movCamera() {
    switch (currentView) {
      case "tv":
        orbitControls(0, 100, 10);
        cameraControlRef.current.setLookAt(
          coordCameraTV.x,
          coordCameraTV.y,
          coordCameraTV.z,
          meshFitCameraTV.current.position.x,
          meshFitCameraTV.current.position.y,
          meshFitCameraTV.current.position.z,
          true
        );
        break;
      case "pc":
        break;
      case "character":
        break;
      default:
    }
  }

  //Introduction anamiation
  async function Intro() {
    cameraControlRef.current.dolly(-22);
    cameraControlRef.current.smoothTime = 0.5;
    fitCamera();
  }

  //Introduction anamiation
  useEffect(() => {
    // cameraControlRef.current.max; //No recuerdo que es
    Intro();
  }, []);

  useFrame(() => {});

  //Responsive fit camera
  useEffect(() => {
    if (currentView === "tv") {
      const intervalId = setInterval(movCamera, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowButton(true);
      }, 2000);
    }

    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentView]);

  // let timeOut = 0;
  // useFrame(() => {

  //   if (currentView === "tv") {
  //     if (timeOut <= 60) {
  //       movCamera();
  //       setShowButton(true);
  //       console.log(timeOut);

  //       timeOut = timeOut + 1;
  //     }
  //   }
  // }, [currentView]);

  //orbitControls properties
  function orbitControls(speed, max = 50, min = 10) {
    setSpeed(speed);
    setmaxDistance(max);
    setminDistance(min);
  }

  //Cancel button hidde
  useEffect(() => {
    if (!showButton) {
      orbitControls(1);
      setCurrentView("character");
      orbitControls(1);
    }
  }, [showButton]);

  ////////////////////////////////
  return (
    <>
      <CameraControls
        ref={cameraControlRef}
        // onPointerMove={()=>(console.log("Moving"))}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        maxDistance={maxDistance}
        minDistance={minDistance}
        infinityDolly={false}
        truckSpeed={0}
        dollySpeed={speed}
        polarRotateSpeed={speed}
        azimuthRotateSpeed={speed}
      ></CameraControls>

      <mesh position={[0, 0, 0]} ref={meshFitCameraCharacter} visible={true}>
        {/* Para fijar la vista de la camara a un obj y hacer el responsive*/}
        <boxGeometry args={[10, 10, 10]}></boxGeometry>
        <meshStandardMaterial
          color="orange"
          transparent
          opacity={0.5}
        ></meshStandardMaterial>
      </mesh>
      <mesh position={[10, 0, 10]} ref={meshFitCameraTV} visible={true}>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshStandardMaterial
          color="orange"
          transparent
          opacity={0.5}
        ></meshStandardMaterial>
      </mesh>
      <mesh position={[10, 0, 10]}>
        <boxGeometry args={[1, 1, 1]}></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>

      <mesh position={[20, 0, 20]}>
        <boxGeometry args={[1, 5, 1]}></boxGeometry>
        <meshStandardMaterial color={"black"}></meshStandardMaterial>
      </mesh>

      <Environment preset="city"></Environment>
      <ambientLight></ambientLight>
      <color attach="background" args={["#ffffff"]}></color>
      <Suspense>
        <group position={[0, -10, 0]}>
          <mesh>
            <cylinderGeometry args={[30, 30, 10, 64]} />
            <meshStandardMaterial
              color="black"
              roughness={0}
              metalness={0}
              envMapIntensity={0.5}
            ></meshStandardMaterial>
          </mesh>
        </group>
      </Suspense>

      <FloatButton
        position={[10, 1, 10]}
        backgroundColor={"blue"}
        // onClick={(e) => focusCamera("tv")}
        onClick={() => setCurrentView("tv")}
        text={"Move Camera"}
      />
      <FloatButton
        position={[1, 3, 0]}
        backgroundColor={toggle ? "Red" : "Green"}
        // onClick={}
        text={toggle ? "Off Controls" : "On Controls"}
      />
      <FloatButton
        position={[-1, 3, 0]}
        backgroundColor={"White"}
        // onClick={ResetCamera}
        text={"Reset Camera"}
      />
      <FloatButton
        position={[-2, 3, 0]}
        backgroundColor={"Orange"}
        // onClick={toggleButtonVisibility}
        text={"Shake Camera"}
      />

      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}
