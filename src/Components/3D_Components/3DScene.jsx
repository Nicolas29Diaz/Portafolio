/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Scene3D(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../public/Models/3DScene.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature001"
          position={[0, 0, 0.786]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Brazo1002">
            <skinnedMesh
              name="Cube012"
              geometry={nodes.Cube012.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube012.skeleton}
            />
            <skinnedMesh
              name="Cube012_1"
              geometry={nodes.Cube012_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube012_1.skeleton}
            />
            <skinnedMesh
              name="Cube012_2"
              geometry={nodes.Cube012_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube012_2.skeleton}
            />
          </group>
          <group name="Brazo2002">
            <skinnedMesh
              name="Cube016"
              geometry={nodes.Cube016.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube016.skeleton}
            />
            <skinnedMesh
              name="Cube016_1"
              geometry={nodes.Cube016_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube016_1.skeleton}
            />
            <skinnedMesh
              name="Cube016_2"
              geometry={nodes.Cube016_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube016_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Cabeza002"
            geometry={nodes.Cabeza002.geometry}
            material={materials["Piel.001"]}
            skeleton={nodes.Cabeza002.skeleton}
          />
          <skinnedMesh
            name="Cejas002"
            geometry={nodes.Cejas002.geometry}
            material={materials["Fade2.001"]}
            skeleton={nodes.Cejas002.skeleton}
          />
          <skinnedMesh
            name="Ojos002"
            geometry={nodes.Ojos002.geometry}
            material={materials["Fade2.001"]}
            skeleton={nodes.Ojos002.skeleton}
          />
          <group name="Pelo002">
            <skinnedMesh
              name="Sphere014"
              geometry={nodes.Sphere014.geometry}
              material={materials["Fade1.001"]}
              skeleton={nodes.Sphere014.skeleton}
            />
            <skinnedMesh
              name="Sphere014_1"
              geometry={nodes.Sphere014_1.geometry}
              material={materials["Fade2.001"]}
              skeleton={nodes.Sphere014_1.skeleton}
            />
            <skinnedMesh
              name="Sphere014_2"
              geometry={nodes.Sphere014_2.geometry}
              material={materials["Fade3.001"]}
              skeleton={nodes.Sphere014_2.skeleton}
            />
          </group>
          <group name="Piernas002">
            <skinnedMesh
              name="Cube015"
              geometry={nodes.Cube015.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube015.skeleton}
            />
            <skinnedMesh
              name="Cube015_1"
              geometry={nodes.Cube015_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube015_1.skeleton}
            />
            <skinnedMesh
              name="Cube015_2"
              geometry={nodes.Cube015_2.geometry}
              material={materials["Medias.001"]}
              skeleton={nodes.Cube015_2.skeleton}
            />
          </group>
          <group name="Tenis002">
            <skinnedMesh
              name="Cube017"
              geometry={nodes.Cube017.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube017.skeleton}
            />
            <skinnedMesh
              name="Cube017_1"
              geometry={nodes.Cube017_1.geometry}
              material={materials["Cordones.001"]}
              skeleton={nodes.Cube017_1.skeleton}
            />
            <skinnedMesh
              name="Cube017_2"
              geometry={nodes.Cube017_2.geometry}
              material={materials["TenisBase.001"]}
              skeleton={nodes.Cube017_2.skeleton}
            />
            <skinnedMesh
              name="Cube017_3"
              geometry={nodes.Cube017_3.geometry}
              material={materials["Tenis2.001"]}
              skeleton={nodes.Cube017_3.skeleton}
            />
            <skinnedMesh
              name="Cube017_4"
              geometry={nodes.Cube017_4.geometry}
              material={materials["Tenis3.001"]}
              skeleton={nodes.Cube017_4.skeleton}
            />
          </group>
          <group name="Torzo2001">
            <skinnedMesh
              name="Cube018"
              geometry={nodes.Cube018.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube018.skeleton}
            />
            <skinnedMesh
              name="Cube018_1"
              geometry={nodes.Cube018_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube018_1.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <mesh
          name="Cable2_Skills"
          castShadow
          receiveShadow
          geometry={nodes.Cable2_Skills.geometry}
          material={materials.Cable2}
          position={[-6.843, 0.066, 4.481]}
        >
          <mesh
            name="Cylinder003"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["MetalSilla.001"]}
            position={[-2.083, 0.326, 0.595]}
            rotation={[Math.PI / 2, 0, -2.138]}
            scale={[0.032, 0.014, 0.032]}
          />
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials["MetalSilla.001"]}
            position={[6.532, 0.188, -4.824]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.034, 0.028, 0.034]}
          />
        </mesh>
        <mesh
          name="Cable1_Skills"
          castShadow
          receiveShadow
          geometry={nodes.Cable1_Skills.geometry}
          material={materials.Cable1}
          position={[-6.898, 0.055, 4.316]}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["MetalSilla.001"]}
            position={[-2.117, 0.332, 0.619]}
            rotation={[Math.PI / 2, 0, -2.138]}
            scale={[0.065, 0.029, 0.065]}
          />
          <mesh
            name="Cylinder005"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials["MetalSilla.001"]}
            position={[6.649, 1.024, -4.97]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.071, 0.059, 0.071]}
          />
        </mesh>
       
        <group
          name="Menu"
          position={[1.502, 0.344, -0.009]}
          scale={[0.489, 0.325, 0.429]}
        >
          <mesh
            name="Cube032"
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials["SkillsBase2.001"]}
          />
          <mesh
            name="Cube032_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube032_1.geometry}
            material={materials.SkillsBase2}
          />
        </group>
        <mesh
          name="Silla"
          castShadow
          receiveShadow
          geometry={nodes.Silla.geometry}
          material={materials["Silla2.001"]}
          position={[0, 0.344, -0.009]}
          scale={[0.758, 0.751, 0.489]}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -0.088, -0.065]}
            scale={[0.468, 0.606, 0.931]}
          />
          <group
            name="Plane002"
            position={[0.002, 1.261, -1.161]}
            rotation={[1.485, 0, 0]}
            scale={[1.058, 0.921, 0.864]}
          >
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Mesh001_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001_1.geometry}
              material={materials["Silla1.001"]}
            />
            <mesh
              name="Almohada"
              castShadow
              receiveShadow
              geometry={nodes.Almohada.geometry}
              material={materials["Silla2.001"]}
              position={[0, -0.145, -0.543]}
              rotation={[-1.468, 0, 0]}
              scale={[0.669, 0.203, 0.353]}
            />
            <mesh
              name="SoporteCasco"
              castShadow
              receiveShadow
              geometry={nodes.SoporteCasco.geometry}
              material={materials["Casco1.001"]}
              position={[0.015, 1.367, -1.346]}
              rotation={[-1.403, 0, 0]}
              scale={[0.862, 1.082, 1.522]}
            >
              <mesh
                name="CilindroCasco"
                castShadow
                receiveShadow
                geometry={nodes.CilindroCasco.geometry}
                material={nodes.CilindroCasco.material}
                position={[0, -0.161, -0.909]}
                rotation={[-1.391, 0, -Math.PI / 2]}
                scale={[0.102, 0.409, 0.102]}
              >
                <group
                  name="Sphere"
                  position={[-1.6, 0, 8.932]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[2.448, 9.774, 9.774]}
                >
                  <mesh
                    name="Sphere019"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere019.geometry}
                    material={materials["Casco1.001"]}
                  />
                  <mesh
                    name="Sphere019_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere019_1.geometry}
                    material={materials["Casco2.001"]}
                  />
                </group>
              </mesh>
            </mesh>
          </group>
          <group
            name="Silla002"
            position={[-0.993, 0.308, 0]}
            scale={[0.136, 1, 1]}
          >
            <mesh
              name="Plane005"
              castShadow
              receiveShadow
              geometry={nodes.Plane005.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Plane005_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane005_1.geometry}
              material={materials["Silla1.001"]}
            />
          </group>
        </mesh>
        <mesh
          name="Palanca"
          castShadow
          receiveShadow
          geometry={nodes.Palanca.geometry}
          material={materials.Button}
          position={[-9.262, 2.487, 5.375]}
          rotation={[2.217, 0.757, 2.31]}
        >
          <mesh
            name="BasePalanca"
            castShadow
            receiveShadow
            geometry={nodes.BasePalanca.geometry}
            material={materials["MetalSilla.001"]}
            position={[0.153, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </mesh>
        <group
          name="PantallaProjects"
          position={[10.806, 2.478, 3.039]}
          rotation={[Math.PI / 2, 0, 1.817]}
        >
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials["MetalSilla.001"]}
          />
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials.SkillsBase2}
          />
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -0.145, 2.485]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="MesaProjects" position={[7.268, 1.513, 7.332]}>
          <mesh
            name="Plane029"
            castShadow
            receiveShadow
            geometry={nodes.Plane029.geometry}
            material={materials.Table}
          />
          <mesh
            name="Plane029_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane029_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Circle002"
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -1.179, 0]}
            rotation={[0, 0.921, 0]}
          />
          <mesh
            name="MouseAbout001"
            castShadow
            receiveShadow
            geometry={nodes.MouseAbout001.geometry}
            material={materials.White}
            position={[-0.772, 0.033, 0.762]}
            rotation={[Math.PI, -1.197, Math.PI]}
          >
            <mesh
              name="Cylinder001"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001.geometry}
              material={materials.Teclas}
              position={[0.011, 0.024, -0.166]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.03, 0.009, 0.03]}
            />
          </mesh>
          <mesh
            name="TecladoProjects"
            castShadow
            receiveShadow
            geometry={nodes.TecladoProjects.geometry}
            material={materials.Teclado}
            position={[0.174, 0.047, -0.254]}
            rotation={[3.057, -0.805, 3.081]}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials.Teclas}
              position={[0.001, 0.004, -0.009]}
            />
          </mesh>
        </group>
        <group
          name="MesaAbout"
          position={[-7.686, 1.465, -7.563]}
          rotation={[0, 0.797, 0]}
          scale={[1.314, 1, 1]}
        >
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Table}
          />
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials.White}
          />
          <mesh
            name="BezierCurve005"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve005.geometry}
            material={materials.Cable1}
            position={[-3.103, -0.961, -0.976]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          />
          <mesh
            name="BezierCurve006"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve006.geometry}
            material={materials.Cable2}
            position={[-3.172, -0.961, -0.975]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          />
          <mesh
            name="MouseAbout"
            castShadow
            receiveShadow
            geometry={nodes.MouseAbout.geometry}
            material={materials.White}
            position={[1.109, 0.035, 0.627]}
            rotation={[0, 0.476, 0]}
            scale={[0.117, 0.184, 0.138]}
          >
            <mesh
              name="Cylinder"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={materials.Teclas}
              position={[0.074, 0.129, -1.152]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.209, 0.065, 0.163]}
            />
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["Fade1.001"]}
              position={[0, -0.19, 0]}
              rotation={[0, -0.492, 0]}
              scale={[3.045, 2.007, 3.045]}
            />
          </mesh>
          <group
            name="PantallaAbout1"
            position={[-0.013, 1.406, -0.395]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          >
            <mesh
              name="Plane006"
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.PC}
            />
            <mesh
              name="Plane006_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.ScreenPC}
            />
            <mesh
              name="BezierCurve002"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve002.geometry}
              material={materials.Cable1}
              position={[0.295, -1.406, 0.264]}
            >
              <mesh
                name="Cylinder017"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder017.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.35, 0.005, 0.19]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve003"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve003.geometry}
              material={materials.Cable2}
              position={[0.244, -1.406, 0.358]}
            >
              <mesh
                name="Cylinder016"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder016.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.377, 0.005, 0.191]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve004"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve004.geometry}
              material={materials.Cable2}
              position={[0.189, -1.406, 0.453]}
            >
              <mesh
                name="Cylinder015"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder015.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.402, 0.005, 0.202]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve007"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve007.geometry}
              material={materials.Cable1}
              position={[-0.036, -1.406, 0.89]}
            >
              <mesh
                name="Cylinder014"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder014.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.383, 0.017, 0.209]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.051, 0.043, 0.051]}
              />
            </mesh>
            <mesh
              name="Circle001"
              castShadow
              receiveShadow
              geometry={nodes.Circle001.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.295, -1.406, -0.311]}
            />
            <mesh
              name="Cube001"
              castShadow
              receiveShadow
              geometry={nodes.Cube001.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.295, -1.406, -0.311]}
            />
          </group>
          <mesh
            name="PatasMesaAbout"
            castShadow
            receiveShadow
            geometry={nodes.PatasMesaAbout.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -1.465, 0]}
            scale={[0.112, 0.147, 0.147]}
          />
          <group
            name="PcAbout"
            position={[-3.444, -0.468, 0.03]}
            rotation={[0, 0.015, 0]}
            scale={[0.351, 1, 1]}
          >
            <mesh
              name="Cube011"
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials["MetalSilla.001"]}
            />
            <mesh
              name="Cube011_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube011_1.geometry}
              material={materials.PC_Torre}
            />
          </group>
          <mesh
            name="TecladoAbout"
            castShadow
            receiveShadow
            geometry={nodes.TecladoAbout.geometry}
            material={materials.Teclado}
            position={[-0.214, 0.051, 0.639]}
            rotation={[0.049, -0.171, 0.007]}
            scale={[0.769, 1, 0.994]}
          >
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials.Teclas}
              position={[0.001, 0.004, -0.009]}
              scale={0.039}
            />
          </mesh>
        </group>
        <group
          name="Cube004"
          position={[6.666, 2.358, -8.579]}
          rotation={[0, -0.367, 0]}
        >
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.Pared}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials.Puerta}
          />
          <group name="Cube003" position={[-2.559, 0.663, 1.116]}>
            <mesh
              name="Cube009"
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials["SkillsBase.001"]}
            />
            <mesh
              name="Cube009_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube009_1.geometry}
              material={materials.SkillsBase2}
            />
            <mesh
              name="Telephone1"
              castShadow
              receiveShadow
              geometry={nodes.Telephone1.geometry}
              material={materials.SkillsBaseBorder}
              position={[-0.609, -0.006, 0.245]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.205, 0.171, 0.166]}
            />
          </group>
        </group>
        <mesh
          name="Cable1_Projects"
          castShadow
          receiveShadow
          geometry={nodes.Cable1_Projects.geometry}
          material={materials.Cable1}
          position={[1.192, 1.091, -0.584]}
        >
          <mesh
            name="Cylinder006"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.961, -0.006, -0.07]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.065, 0.054, 0.065]}
          />
        </mesh>
        <mesh
          name="Cable2_Projects"
          castShadow
          receiveShadow
          geometry={nodes.Cable2_Projects.geometry}
          material={materials.Cable2}
          position={[1.192, 0.886, -0.584]}
        >
          <mesh
            name="Cylinder009"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials["MetalSilla.001"]}
            position={[-1.214, -0.632, 0.241]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.034, 0.028, 0.034]}
          />
        </mesh>
        <group
          name="Cube005"
          position={[-9.158, 0.423, 6.052]}
          rotation={[-Math.PI, 1.004, -Math.PI]}
          scale={[1.044, 0.981, 0.709]}
        >
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials["SkillsBase.001"]}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.SkillsBaseBorder}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials.SkillsBase2}
          />
          <mesh
            name="BaseTv"
            castShadow
            receiveShadow
            geometry={nodes.BaseTv.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.522, 2.22, -0.706]}
            scale={[0.123, 0.175, 0.041]}
          >
            <group
              name="Tv"
              position={[4.257, 5.06, -1.593]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[7.809, 34.594, 5.842]}
            >
              <mesh
                name="Plane034"
                castShadow
                receiveShadow
                geometry={nodes.Plane034.geometry}
                material={materials["MetalSilla.001"]}
              />
              <mesh
                name="Plane034_1"
                castShadow
                receiveShadow
                geometry={nodes.Plane034_1.geometry}
                material={materials["SkillsBase.001"]}
              />
            </group>
          </mesh>
          <mesh
            name="Teclado2"
            castShadow
            receiveShadow
            geometry={nodes.Teclado2.geometry}
            material={materials.SkillsBaseBorder}
            position={[-0.252, 1.751, 0.394]}
            scale={[0.484, 0.162, 0.225]}
          >
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["SkillsBase2.001"]}
              position={[-0.008, 0.459, -0.301]}
              rotation={[0.629, 0.032, -0.012]}
              scale={[0.07, 0.194, 0.197]}
            />
          </mesh>
        </group>
        <mesh
          name="Cable1_About"
          castShadow
          receiveShadow
          geometry={nodes.Cable1_About.geometry}
          material={materials.Cable1}
          position={[0, 0.32, -1.914]}
        >
          <mesh
            name="Cylinder004"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.013, 0.765, 1.26]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.065, 0.054, 0.065]}
          />
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials["MetalSilla.001"]}
            position={[-9.072, 1.01, -2.239]}
            rotation={[Math.PI / 2, 0, -0.833]}
            scale={[0.065, 0.054, 0.065]}
          />
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["MetalSilla.001"]}
            position={[11.6, 0.613, 1.493]}
            rotation={[Math.PI / 2, 0, 0.231]}
            scale={[0.065, 0.054, 0.065]}
          />
          <mesh
            name="Cylinder013"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials["MetalSilla.001"]}
            position={[11.6, 0.407, 1.493]}
            rotation={[Math.PI / 2, 0, 0.231]}
            scale={[0.038, 0.032, 0.038]}
          />
        </mesh>
        <mesh
          name="Cable2_About"
          castShadow
          receiveShadow
          geometry={nodes.Cable2_About.geometry}
          material={materials.Cable2}
          position={[0, -0.357, -1.914]}
        >
          <mesh
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.162, 0.611, 1.57]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.034, 0.028, 0.034]}
          />
          <mesh
            name="Cylinder011"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials["MetalSilla.001"]}
            position={[-9.152, 1.687, -2.151]}
            rotation={[Math.PI / 2, 0, -0.833]}
            scale={[0.036, 0.029, 0.036]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("../public/Models/3DScene.glb");
