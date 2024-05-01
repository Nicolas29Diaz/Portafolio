import { Environment, Stars, Stage } from "@react-three/drei";
import { SpotLight, MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";

export function SceneConf() {
  return (
    <>
      <color attach="background" args={["#000000"]}></color>
      <Environment preset="city"></Environment>
      <EffectComposer>
        <Vignette eskil={false} offset={0} darkness={0.6} />
      </EffectComposer>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={0}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024} //CAMBIAR SEGÚN EL CELULAR
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
      {/*
      <spotLight
        color={[4, 4, 4]}
        intensity={10}
        position={[5, 5, 2]}
        angle={0.6}
        castShadow
        penumbra={0.5}
      ></spotLight> */}
      <Stars
        radius={100}
        depth={10}
        count={700}
        factor={10}
        saturation={0}
        fade
        speed={1.2}
      />
    </>
  );
}
