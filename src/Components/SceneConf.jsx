import { Environment, Stars, Stage } from "@react-three/drei";
import { SpotLight, MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { useEffect, useState } from "react";
import useStore from "../Store/Store";

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
    </>
  );
}
