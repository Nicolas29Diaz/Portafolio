import { Environment, Stars } from "@react-three/drei";

export function SceneConf() {
  return (
    <>
      <Environment preset="city"></Environment>
      <ambientLight></ambientLight>
      <color attach="background" args={["#ffffff"]}></color>
      {/* <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={1}
      /> */}
    </>
  );
}
