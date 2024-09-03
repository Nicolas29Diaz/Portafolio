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
import useStore from "../Store/Store";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export function SceneConf() {
  const { gpuTier } = useStore();
  const [floorResolution, setFloorResolution] = useState();
  useEffect(() => {
    switch (gpuTier) {
      case 1:
        setFloorResolution(32);
        break;
      case 2:
        setFloorResolution(128);
        break;
      case 3:
        setFloorResolution(1024);
        break;
      case 4:
        setFloorResolution(1400);
        break;
      default:
        break;
    }
  }, []);
  const { viewport } = useThree();

  return (
    <>
      {/* QUITAR SOMBRAS DISPOSITIVOS PAILAS */}

      {/* OPTION 1 */}
      {/* <>
        <color attach="background" args={["#000000"]}></color>
        <Environment preset="city"></Environment>
        <EffectComposer>
          <Vignette eskil={false} offset={0} darkness={0.6} />
        </EffectComposer>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[400, 400]}
            resolution={floorResolution}
            mixBlur={1}
            mixStrength={50}
            roughness={0.8}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
        <fogExp2 attach="fog" color="black" density={0.05} />

        <Stars
          radius={100}
          depth={100}
          count={1000}
          factor={10}
          saturation={0}
          fade
          speed={1.3}
        />
      </> */}

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
      <ambientLight intensity={0.01} />
      <Environment
        resolution={16}
        background
        blur={1}
        preset="sunset"
      ></Environment>
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={2} intensity={0.8} />
        <Vignette eskil={false} offset={0.3} darkness={1} />
      </EffectComposer> */}
    </>
  );
}
