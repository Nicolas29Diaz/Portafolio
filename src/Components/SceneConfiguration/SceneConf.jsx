import {
  Environment,
  Stars,
  Stage,
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
  PerformanceMonitor,
  MeshDistortMaterial,
  Sphere,
  GradientTexture,
  Lightformer,
} from "@react-three/drei";
import { SpotLight, MeshReflectorMaterial } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useEffect, useState } from "react";
import useStore from "../../Store/Store";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { configurations } from "../../Constants/Config.js";

export function SceneConf() {
  const { gpuTier, sceneTheme } = useStore();
  const [currentSettings, setCurrentSettings] = useState(configurations[2]);

  // useEffect(() => {
  //   switch (gpuTier) {
  //     case 1:
  //       setFloorResolution(512);
  //       break;
  //     case 2:
  //       setFloorResolution(640);
  //       break;
  //     case 3:
  //       setFloorResolution(800);
  //       break;
  //     case 4:
  //       setFloorResolution(1024);
  //       break;
  //     default:
  //       setFloorResolution(800);
  //       break;
  //   }
  // }, []);
  // const { viewport } = useThree();

  useEffect(() => {
    console.log("Scene Theme: ", sceneTheme);
  }, [sceneTheme]);

  useEffect(() => {
    switch (gpuTier) {
      case 1:
        setCurrentSettings(configurations[0]);
        break;
      case 2:
        setCurrentSettings(configurations[1]);
        break;
      case 3:
        setCurrentSettings(configurations[2]);
        break;
      default:
        setCurrentSettings(configurations[1]);
        break;
    }
  }, [gpuTier]);

  return (
    <>
      {sceneTheme === "Dark" ? (
        <>
          <color
            attach="background"
            args={[currentSettings.backgroundColor]}
          ></color>
          <Environment preset="sunset" />
          <EffectComposer>
            <Bloom
              intensity={gpuTier === 3 ? 0.5 : gpuTier === 2 ? 0.3 : 0}
              luminanceThreshold={
                gpuTier === 3 ? 0.5 : gpuTier === 2 ? 0.3 : 0.1
              }
              luminanceSmoothing={
                gpuTier === 3 ? 0.9 : gpuTier === 2 ? 0.3 : 0.1
              }
            />
          </EffectComposer>

          <fogExp2
            attach="fog"
            color={currentSettings.fogColor}
            density={0.08}
          />

          <Stars
            radius={80}
            depth={100}
            count={currentSettings.starsCount}
            factor={currentSettings.starsFactor}
            saturation={0}
            fade
            speed={1.3}
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
            <planeGeometry args={[40, 40]} />
            <MeshReflectorMaterial
              blur={currentSettings.blur}
              resolution={currentSettings.floorResolution}
              mixBlur={0.5}
              mixStrength={currentSettings.mixStrength}
              depthScale={currentSettings.depthScale}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.2}
              color="rgb(15, 15, 15)"
              metalness={0.5}
            />
          </mesh>
        </>
      ) : (
        <>
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={2} intensity={0.2} />
            <Vignette eskil={false} offset={0.3} darkness={0.6} />
          </EffectComposer>

          <ambientLight intensity={0.01} />
          <AccumulativeShadows
            position={[0, 0, 0]}
            frames={120}
            alphaTest={0.9}
            scale={15}
          >
            <RandomizedLight
              amount={1}
              radius={0.1}
              ambient={0.9}
              position={[1, 5, -1]}
            />
          </AccumulativeShadows>

          <Environment
            resolution={32}
            background
            blur={1}
            preset="sunset"
          ></Environment>
        </>
      )}

      {/* OPTION 2 */}
      {/* Se puede poner un modelo 3d de una lapmpara colgando */}
      {/* <color attach="background" args={["#a6889f"]}></color> */}
      {/* <>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={2} intensity={0.2} />
          <Vignette eskil={false} offset={0.3} darkness={0.6} />
        </EffectComposer>

        <ambientLight intensity={0.01} />
        <AccumulativeShadows
          position={[0, 0, 0]}
          frames={120}
          alphaTest={0.9}
          scale={15}
        >
          <RandomizedLight
            amount={1}
            radius={0.1}
            ambient={0.9}
            position={[1, 5, -1]}
          />
        </AccumulativeShadows>

        <Environment
          resolution={32}
          background
          blur={1}
          preset="sunset"
        ></Environment>
      </> */}
      {/* OPTION 3 */}
      {/* Esta opcion es para dispositivos de gama baja */}
      {/* <ambientLight intensity={1} color={"#3499b6"}/> */}

      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={2} intensity={0.8} />
        <Vignette eskil={false} offset={0.3} darkness={1} />
      </EffectComposer> */}
    </>
  );
}
