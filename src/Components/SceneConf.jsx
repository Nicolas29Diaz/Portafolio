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
      {/* <EffectComposer>
        const { viewport } = useThree()<Bloom mipmapBlur luminanceThreshold={2} intensity={0.2} />
        <Vignette eskil={false} offset={0.3} darkness={0.6} />
      </EffectComposer> */}

      {/* <Environment background>
        <mesh scale={100}>
          <sphereGeometry args={[1, 1, 1]} />
          <meshBasicMaterial side={THREE.BackSide}>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["#00316a", "#9cdcfe"]} // Colors for the gradient
              size={1024} // Size of the texture
             
            />
          </meshBasicMaterial>
        </mesh>
      </Environment> */}

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
      <>
       
        {/* <ambientLight intensity={0.01} /> */}
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
        {/* <PerformanceMonitor onDecline={() => degrade(true)} /> */}
        <Environment
          // frames={degraded ? 1 : Infinity}
          resolution={32}
          background
          blur={1}
          preset="sunset"
        ></Environment>
      </>

      {/* OPTION 3 */}
      {/* <>
        <ambientLight intensity={0.2} />
      <Environment preset="city" background blur={1} />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
        <circleGeometry args={[20, 20]} />
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
      <color attach="background" args={["#a6889f"]}></color>
      </> */}

      {/* OPTION 4 */}
      {/* <>
        <Environment preset="sunset" background blur={1} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
          <circleGeometry args={[20, 20]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={floorResolution}
            mixBlur={0.9}
            mixStrength={1}
            roughness={1}
            depthScale={1.5}
            minDepthThreshold={0.6}
            maxDepthThreshold={1}
            color="#a6889f"
            metalness={0.1}
          />
        </mesh>
      </> */}

      {/* OPTION 5 */}
      {/* <>
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={2}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial side={THREE.BackSide} />
          </mesh>
        </Environment>
      </> */}
    </>
  );
}

// <Sphere visible args={[1, 100, 100]}>
//           <MeshDistortMaterial
//             attach="material"
//             color="hotpink"
//             distort={1} // Distorsiona la malla
//             speed={1} // Velocidad de la distorsión
//             roughness={0}
//             gradient={[0, 1]} // Simula un gradiente en el material
//           />
//         </Sphere>
