/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useScaleAnimation } from "../../../Animation/useScaleAnimation";

export function Scenario({ props, show }) {
  const { nodes, materials } = useGLTF("/Models/Scenario.glb");
  const scale = useScaleAnimation(show, 1, 400);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Palanca.geometry}
        material={materials.Button}
        position={[-6.334, 2.538, -3.157]}
        rotation={[1.071, 0.848, -2.512]}
        scale={1.345}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BasePalanca001.geometry}
          material={materials["MetalSilla.001"]}
          position={[0.153, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </mesh>
      <group
        position={[-4.579, 1.474, 5.334]}
        rotation={[0.029, -1.534, 0.029]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials.Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Manga.001"]}
          position={[0, -1.131, 0]}
          rotation={[0, 0.921, 0]}
          scale={[1, 0.902, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseAbout003.geometry}
          material={materials.White}
          position={[-0.772, 0.033, 0.762]}
          rotation={[Math.PI, -1.197, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials.Teclas}
            position={[0.011, 0.024, -0.166]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.03, 0.009, 0.03]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TecladoProjects001.geometry}
          material={materials.Teclado}
          position={[0.174, 0.047, -0.254]}
          rotation={[3.057, -0.805, 3.081]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Teclas}
            position={[0.001, 0.004, -0.009]}
          />
        </mesh>
      </group>
      <group position={[8.164, 1.465, 0.573]} rotation={[0, -1.564, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.Table}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve010.geometry}
          material={materials.Cable1}
          position={[-4.077, -0.961, -0.976]}
          rotation={[0, -0.797, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve011.geometry}
          material={materials.Cable2}
          position={[-4.167, -0.961, -0.975]}
          rotation={[0, -0.797, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseAbout002.geometry}
          material={materials.White}
          position={[1.456, 0.025, 0.627]}
          rotation={[0, 0.469, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials.Teclas}
            position={[0.011, 0.024, -0.166]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials["Fade1.001"]}
            position={[0, -0.035, 0]}
            rotation={[0, -0.492, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PatasMesaAbout001.geometry}
          material={materials["Medias.001"]}
          position={[0, -1.465, 0]}
        />
        <group position={[-4.591, -0.468, 0.222]} rotation={[0, 0.056, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042.geometry}
            material={materials.PC_Torre}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_1.geometry}
            material={materials.PC_TOrre2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TecladoAbout001.geometry}
          material={materials.Teclado}
          position={[-0.281, 0.051, 0.639]}
          rotation={[0.049, -0.165, 0.008]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.Teclas}
            position={[0.001, 0.004, -0.009]}
          />
        </mesh>
      </group>
      <group
        position={[-6.957, 0.423, -2.503]}
        rotation={[0, 1.171, 0]}
        scale={[1.044, 0.981, 0.709]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials["SkillsBase.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_1.geometry}
          material={materials.SkillsBaseBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_2.geometry}
          material={materials.SkillsBase2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teclado2001.geometry}
          material={materials.SkillsBaseBorder}
          position={[-0.414, 1.751, 0.394]}
          scale={[0.616, 0.206, 0.286]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials["SkillsBase2.001"]}
            position={[-0.008, 0.459, -0.301]}
            rotation={[0.629, 0.032, -0.012]}
            scale={[0.07, 0.194, 0.197]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TvSkillsBase.geometry}
          material={materials["MetalSilla.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhoneBox.geometry}
        material={nodes.PhoneBox.material}
        position={[0, 0.784, -6.755]}
        scale={[0.747, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ContactText.geometry}
          material={materials.BoxPhone}
          position={[0, 4.02, 0.969]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.344, 0.257, 0.257]}
        />
        <group scale={[1.339, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials.BoxTop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_1.geometry}
            material={materials.BoxTop2}
          />
        </group>
        <group scale={0.939}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials.Box1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials.BoxPhone}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.Box1}
          position={[0, 0.31, -0.555]}
          scale={[4.296, 0.445, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["MetalSilla.001"]}
          position={[0, -0.515, -1.205]}
          scale={[0.325, 0.177, 0.177]}
        />
        <group position={[-0.343, 2.178, -0.566]} scale={[1.339, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials.BoxPhone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_1.geometry}
            material={materials["MetalSilla.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.45, -0.184, 0.494]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.Phone}
            position={[-0.45, 0.048, 0.504]}
            scale={[0.411, 0.36, 0.36]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.45, 0.292, 0.408]}
            scale={[0.235, 0.066, 0.066]}
          />
        </group>
      </mesh>
      <group
        position={[7.507, 1.59, 3.802]}
        rotation={[Math.PI, -0.933, Math.PI]}
        scale={0.124}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials.Cube}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_1.geometry}
          material={materials.CubeFace2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_2.geometry}
          material={materials.CubeFace3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_3.geometry}
          material={materials.CubeFace4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_4.geometry}
          material={materials.CubeFace5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_5.geometry}
          material={materials.CubeFace6}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant001.geometry}
        material={materials["None.001"]}
        position={[-5.821, 1.798, 5.003]}
        scale={0.458}
      />
      <group
        position={[-3.798, 0, -5.808]}
        rotation={[0, -1.536, 0]}
        scale={0.012}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh001"].geometry}
          material={materials["795548.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh001_1"].geometry}
          material={materials["8BC34A.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh001_2"].geometry}
          material={materials["F8BBD0.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh001_3"].geometry}
          material={materials["455A64.001"]}
        />
      </group>
      <group
        position={[-4.52, 0, -5.291]}
        rotation={[Math.PI, -0.68, Math.PI]}
        scale={0.008}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh002"].geometry}
          material={materials["795548.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh002_1"].geometry}
          material={materials["8BC34A.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh002_2"].geometry}
          material={materials["F8BBD0.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["plant_01_Cube006-Mesh002_3"].geometry}
          material={materials["455A64.001"]}
        />
      </group>
      <group
        position={[5.949, 0, -6.348]}
        rotation={[Math.PI, -0.866, Math.PI]}
        scale={1.439}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["DogBed_Cube001-Mesh"].geometry}
          material={materials.Material1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["DogBed_Cube001-Mesh_1"].geometry}
          material={materials.Material2}
        />
      </group>
      <group
        position={[0, 7.483, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={260.31}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Ceiling2_1.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Ceiling2_2.geometry}
          material={materials.LightMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Ceiling2_3.geometry}
          material={materials.Light}
        />
      </group>
      <group
        position={[8.856, 1.467, 3.513]}
        rotation={[-Math.PI / 2, 0, 2.656]}
        scale={[23.812, 34.496, 0.75]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_1.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[8.663, 2.475, -2.413]}
        rotation={[-Math.PI / 2, 0, 2.192]}
        scale={[36288.902, 36288.898, 36288.891]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Desk001_1.geometry}
          material={materials["Black.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Desk001_2.geometry}
          material={materials["LightMetal.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Light_Desk001_3.geometry}
          material={materials["White.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials["MetalSilla.001"]}
        position={[6.746, 1.277, -2.782]}
        rotation={[Math.PI / 2, 0, 1.529]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["MetalSilla.001"]}
        position={[6.751, 1.277, -2.663]}
        rotation={[Math.PI / 2, 0, 1.529]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasePC.geometry}
        material={materials["MetalSilla.001"]}
        position={[8.987, 1.465, 0.568]}
        rotation={[Math.PI, -0.78, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BasePC2.geometry}
          material={materials["MetalSilla.001"]}
          rotation={[Math.PI, -0.862, Math.PI]}
          scale={[0.8, 1, 1]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["MetalSilla.001"]}
        position={[0.579, -0.007, 7.405]}
        rotation={[-Math.PI, 0.003, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/Models/Scenario.glb");