/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import useStore from "../../Store/Store";
import * as THREE from "three";

import Skills from "../Interfaces/Skills/Skills";
import Projects from "../Interfaces/Projects/Projects";
import About from "../Interfaces/About/About";

export function Scene3D_2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../public/Models/Scene3D_2.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  const { showButtonStart, cameraFocus } = useStore();
  const [showGroup, setShowGroup] = useState(false);
  
  useEffect(() => {
    console.log(names);
    if (showButtonStart) {
      introAnimation();
    } else {
      showProjects();
      sitAnimation();
    }

    return () => {
      actions[names[1]].fadeOut(0.5);
    };
  }, [showButtonStart]);

  const showProjects = () => {
    setTimeout(() => {
      setShowGroup(true);
    }, 1000);
  };

  const introAnimation = () => {
    actions[names[1]].reset().fadeIn(0.5).play();
  };

  const sitAnimation = () => {
    const sit = actions[names[0]];
    sit.reset().fadeIn(0.5).play();
    sit.setLoop(THREE.LoopOnce);
    sit.clampWhenFinished = true;
  };

  // }

  // if (showButtonStart) {
  //   const sit = actions[names[1]];
  //   const helmet = actions[names[2]];

  //   sit.reset().fadeIn(0.5).play();
  //   sit.time = 2;

  //   helmet.reset().fadeIn(0.5).play();

  //   helmet.setLoop(THREE.LoopOnce);
  //   sit.setLoop(THREE.LoopOnce);
  //   helmet.clampWhenFinished = true;
  //   sit.clampWhenFinished = true;
  // } else {
  //   actions[names[3]].reset().fadeIn(0.5).play();
  // }
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          visible={
            cameraFocus === "CHARACTER" || cameraFocus === "INITIAL"
              ? true
              : false
          }
          name="Armature002"
          position={[0, 0, 0.786]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Brazo1001">
            <skinnedMesh
              name="Cube020"
              geometry={nodes.Cube020.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube020.skeleton}
            />
            <skinnedMesh
              name="Cube020_1"
              geometry={nodes.Cube020_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube020_1.skeleton}
            />
            <skinnedMesh
              name="Cube020_2"
              geometry={nodes.Cube020_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube020_2.skeleton}
            />
          </group>
          <group name="Brazo2001">
            <skinnedMesh
              name="Cube022"
              geometry={nodes.Cube022.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube022.skeleton}
            />
            <skinnedMesh
              name="Cube022_1"
              geometry={nodes.Cube022_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube022_1.skeleton}
            />
            <skinnedMesh
              name="Cube022_2"
              geometry={nodes.Cube022_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube022_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Cabeza001"
            geometry={nodes.Cabeza001.geometry}
            material={materials["Piel.001"]}
            skeleton={nodes.Cabeza001.skeleton}
          />
          <skinnedMesh
            name="Cejas001"
            geometry={nodes.Cejas001.geometry}
            material={materials["Fade2.001"]}
            skeleton={nodes.Cejas001.skeleton}
          />
          <skinnedMesh
            name="Ojos001"
            geometry={nodes.Ojos001.geometry}
            material={materials["Fade2.001"]}
            skeleton={nodes.Ojos001.skeleton}
          />
          <group name="Pelo001">
            <skinnedMesh
              name="Sphere009"
              geometry={nodes.Sphere009.geometry}
              material={materials["Fade1.001"]}
              skeleton={nodes.Sphere009.skeleton}
            />
            <skinnedMesh
              name="Sphere009_1"
              geometry={nodes.Sphere009_1.geometry}
              material={materials["Fade2.001"]}
              skeleton={nodes.Sphere009_1.skeleton}
            />
            <skinnedMesh
              name="Sphere009_2"
              geometry={nodes.Sphere009_2.geometry}
              material={materials["Fade3.001"]}
              skeleton={nodes.Sphere009_2.skeleton}
            />
          </group>
          <group name="Piernas001">
            <skinnedMesh
              name="Cube023"
              geometry={nodes.Cube023.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube023.skeleton}
            />
            <skinnedMesh
              name="Cube023_1"
              geometry={nodes.Cube023_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube023_1.skeleton}
            />
            <skinnedMesh
              name="Cube023_2"
              geometry={nodes.Cube023_2.geometry}
              material={materials["Medias.001"]}
              skeleton={nodes.Cube023_2.skeleton}
            />
          </group>
          <group name="Tenis001">
            <skinnedMesh
              name="Cube025"
              geometry={nodes.Cube025.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube025.skeleton}
            />
            <skinnedMesh
              name="Cube025_1"
              geometry={nodes.Cube025_1.geometry}
              material={materials["Cordones.001"]}
              skeleton={nodes.Cube025_1.skeleton}
            />
            <skinnedMesh
              name="Cube025_2"
              geometry={nodes.Cube025_2.geometry}
              material={materials["TenisBase.001"]}
              skeleton={nodes.Cube025_2.skeleton}
            />
            <skinnedMesh
              name="Cube025_3"
              geometry={nodes.Cube025_3.geometry}
              material={materials["Tenis2.001"]}
              skeleton={nodes.Cube025_3.skeleton}
            />
            <skinnedMesh
              name="Cube025_4"
              geometry={nodes.Cube025_4.geometry}
              material={materials["Tenis3.001"]}
              skeleton={nodes.Cube025_4.skeleton}
            />
          </group>
          <group name="Torzo2002">
            <skinnedMesh
              name="Cube031"
              geometry={nodes.Cube031.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube031.skeleton}
            />
            <skinnedMesh
              name="Cube031_1"
              geometry={nodes.Cube031_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube031_1.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>

        <group
          name="Menu001"
          position={[1.502, 0.344, -0.009]}
          scale={[0.489, 0.325, 0.429]}
        >
          <mesh
            name="Cube034"
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials.SkillsBase2}
          />
          <mesh
            name="Cube034_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube034_1.geometry}
            material={materials["MetalSilla.001"]}
          />
        </group>
        <mesh
          name="Silla003"
          castShadow
          receiveShadow
          geometry={nodes.Silla003.geometry}
          material={materials["Silla2.001"]}
          position={[0, 0.344, -0.009]}
          scale={[0.758, 0.751, 0.489]}
        >
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -0.151, -0.065]}
            rotation={[-0.032, 0, 0]}
            scale={[0.468, 0.769, 0.931]}
          >
            <mesh
              name="Cylinder026"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder026.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.458, 0.066, -0.664]}
              rotation={[1.603, 0, 0]}
              scale={[0.096, 0.062, 0.059]}
            >
              <mesh
                name="Cable2_About001"
                castShadow
                receiveShadow
                geometry={nodes.Cable2_About001.geometry}
                material={materials.Cable2Skills}
                position={[4.749, -55.455, 17.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.248, 29.248, 35.317]}
              />
              <mesh
                name="Cable2_About002"
                castShadow
                receiveShadow
                geometry={nodes.Cable2_About002.geometry}
                material={materials.Cable2Projects}
                position={[0.309, -55.455, 17.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.248, 29.248, 35.317]}
              />
            </mesh>
          </mesh>
          <group
            name="Plane006"
            position={[0.002, 1.261, -1.161]}
            rotation={[1.485, 0, 0]}
            scale={[1.058, 0.921, 0.864]}
          >
            <mesh
              name="Mesh004"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Mesh004_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004_1.geometry}
              material={materials["Silla1.001"]}
            />
            <mesh
              name="Almohada001"
              castShadow
              receiveShadow
              geometry={nodes.Almohada001.geometry}
              material={materials["Silla2.001"]}
              position={[0, -0.145, -0.543]}
              rotation={[-1.468, 0, 0]}
              scale={[0.669, 0.203, 0.353]}
            />
            <mesh
              name="Cylinder022"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.018, -0.197, 0.303]}
              rotation={[0.086, 0, 0]}
              scale={[0.081, 0.12, 0.1]}
            >
              <mesh
                name="Cable1_About001"
                castShadow
                receiveShadow
                geometry={nodes.Cable1_About001.geometry}
                material={materials.Cable1Skills}
                position={[0.197, -23.322, 11.728]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[15.331, 15.331, 18.513]}
              />
              <mesh
                name="Cable1_About002"
                castShadow
                receiveShadow
                geometry={nodes.Cable1_About002.geometry}
                material={materials.Cable1Projects}
                position={[-3.436, -23.322, 11.728]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[15.331, 15.331, 18.513]}
              />
            </mesh>
            <mesh
              name="SoporteCasco001"
              castShadow
              receiveShadow
              geometry={nodes.SoporteCasco001.geometry}
              material={materials["Casco1.001"]}
              position={[0.015, 1.367, -1.346]}
              rotation={[-1.403, 0, 0]}
              scale={[0.862, 1.082, 1.522]}
            >
              <mesh
                name="CilindroCasco001"
                castShadow
                receiveShadow
                geometry={nodes.CilindroCasco001.geometry}
                material={nodes.CilindroCasco001.material}
                position={[0, -0.161, -0.909]}
                rotation={[-0.078, 0, -Math.PI / 2]}
                scale={[0.102, 0.409, 0.102]}
              >
                <group
                  name="Sphere003"
                  position={[-1.6, 0, 8.932]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[2.448, 9.774, 9.774]}
                >
                  <mesh
                    name="Sphere015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015.geometry}
                    material={materials["Casco1.001"]}
                  />
                  <mesh
                    name="Sphere015_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015_1.geometry}
                    material={materials["Casco2.001"]}
                  />
                </group>
              </mesh>
            </mesh>
          </group>
          <group
            name="Silla004"
            position={[-0.993, 0.308, 0]}
            scale={[0.136, 1, 1]}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials["Silla1.001"]}
            />
          </group>
        </mesh>
        <mesh
          name="Palanca001"
          castShadow
          receiveShadow
          geometry={nodes.Palanca001.geometry}
          material={materials.Button}
          position={[-6.334, 2.538, -3.157]}
          rotation={[1.071, 0.848, -2.512]}
          scale={1.345}
        >
          <mesh
            name="BasePalanca001"
            castShadow
            receiveShadow
            geometry={nodes.BasePalanca001.geometry}
            material={materials["MetalSilla.001"]}
            position={[0.153, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </mesh>
        <group
          name="Tv001"
          position={[-7.46, 3.935, -2.716]}
          rotation={[Math.PI / 2, 0, -1.171]}
        >
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials["MetalSilla.001"]}
          />
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials["SkillsBase.001"]}
          >
            <Skills></Skills>
          </mesh>
          <mesh
            name="Plane014_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials.TV_Projects}
          />
        </group>
        {showGroup && (
          <group
            name="PantallaProjects001"
            position={[0.58, 2.478, 7.26]}
            rotation={[Math.PI / 2, 0, -3.138]}
          >
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials["MetalSilla.001"]}
            />
            <mesh
              name="Plane016_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_1.geometry}
              material={materials.SkillsBase2}
            >
              <Projects></Projects>
            </mesh>
            <mesh
              name="Plane016_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane016_2.geometry}
              material={materials.TV_Projects}
            />
            <mesh
              name="Cube006"
              castShadow
              receiveShadow
              geometry={nodes.Cube006.geometry}
              material={materials["MetalSilla.001"]}
              position={[0, -0.145, 2.485]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        )}

        <group
          name="MesaProjects001"
          position={[-4.579, 1.474, 5.334]}
          rotation={[0.029, -1.534, 0.029]}
        >
          <mesh
            name="Plane017"
            castShadow
            receiveShadow
            geometry={nodes.Plane017.geometry}
            material={materials.Table}
          />
          <mesh
            name="Plane017_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_1.geometry}
            material={materials.White}
          />
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials["Manga.001"]}
            position={[0, -1.179, 0]}
            rotation={[0, 0.921, 0]}
          />
          <mesh
            name="MouseAbout003"
            castShadow
            receiveShadow
            geometry={nodes.MouseAbout003.geometry}
            material={materials.White}
            position={[-0.772, 0.033, 0.762]}
            rotation={[Math.PI, -1.197, Math.PI]}
          >
            <mesh
              name="Cylinder019"
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
            name="TecladoProjects001"
            castShadow
            receiveShadow
            geometry={nodes.TecladoProjects001.geometry}
            material={materials.Teclado}
            position={[0.174, 0.047, -0.254]}
            rotation={[3.057, -0.805, 3.081]}
          >
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials.Teclas}
              position={[0.001, 0.004, -0.009]}
            />
          </mesh>
        </group>

        <group
          name="MesaAbout001"
          position={[8.164, 1.465, 0.573]}
          rotation={[0, -1.564, 0]}
          scale={[1.314, 1, 1]}
        >
          <mesh
            name="Plane024"
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials.Table}
          />
          <mesh
            name="Plane024_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials.White}
          />
          <mesh
            name="BezierCurve010"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve010.geometry}
            material={materials.Cable1}
            position={[-3.103, -0.961, -0.976]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          />
          <mesh
            name="BezierCurve011"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve011.geometry}
            material={materials.Cable2}
            position={[-3.172, -0.961, -0.975]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          />
          <mesh
            name="Cylinder028"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials["MetalSilla.001"]}
            position={[-2.595, -0.187, 1.391]}
            rotation={[1.57, -0.01, -0.037]}
            scale={[0.05, 0.054, 0.065]}
          />
          <mesh
            name="Cylinder029"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials["MetalSilla.001"]}
            position={[-2.685, -0.187, 1.395]}
            rotation={[1.57, -0.01, -0.037]}
            scale={[0.027, 0.029, 0.036]}
          />
          <mesh
            name="MouseAbout002"
            castShadow
            receiveShadow
            geometry={nodes.MouseAbout002.geometry}
            material={materials.White}
            position={[1.109, 0.025, 0.627]}
            rotation={[0, 0.476, 0]}
            scale={[0.117, 0.184, 0.138]}
          >
            <mesh
              name="Cylinder018"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder018.geometry}
              material={materials.Teclas}
              position={[0.074, 0.129, -1.152]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.209, 0.065, 0.163]}
            />
            <mesh
              name="Plane010"
              castShadow
              receiveShadow
              geometry={nodes.Plane010.geometry}
              material={materials["Fade1.001"]}
              position={[0, -0.19, 0]}
              rotation={[0, -0.492, 0]}
              scale={[3.045, 2.007, 3.045]}
            />
          </mesh>
          <group
            name="PantallaAbout1001"
            position={[-0.013, 1.406, -0.395]}
            rotation={[0, -0.793, 0]}
            scale={[0.892, 1, 0.886]}
          >
            <mesh
              name="Plane021"
              castShadow
              receiveShadow
              geometry={nodes.Plane021.geometry}
              material={materials.PC}
            />
            <mesh
              name="Plane021_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane021_1.geometry}
              material={materials.ScreenPC}
            >
              <About></About>
            </mesh>
            <mesh
              name="BezierCurve001"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve001.geometry}
              material={materials.Cable1}
              position={[0.295, -1.406, 0.264]}
            >
              <mesh
                name="Cylinder035"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder035.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.35, 0.005, 0.19]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve008"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve008.geometry}
              material={materials.Cable2}
              position={[0.244, -1.406, 0.358]}
            >
              <mesh
                name="Cylinder034"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder034.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.377, 0.005, 0.191]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve009"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve009.geometry}
              material={materials["Material.001"]}
              position={[0.189, -1.406, 0.453]}
            >
              <mesh
                name="Cylinder033"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder033.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.402, 0.005, 0.202]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.04, 0.033, 0.04]}
              />
            </mesh>
            <mesh
              name="BezierCurve012"
              castShadow
              receiveShadow
              geometry={nodes.BezierCurve012.geometry}
              material={materials.Material}
              position={[-0.036, -1.406, 0.89]}
            >
              <mesh
                name="Cylinder032"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder032.geometry}
                material={materials["MetalSilla.001"]}
                position={[-1.383, 0.017, 0.209]}
                rotation={[-Math.PI, -0.833, 0]}
                scale={[0.051, 0.043, 0.051]}
              />
            </mesh>
            <mesh
              name="Circle004"
              castShadow
              receiveShadow
              geometry={nodes.Circle004.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.295, -1.406, -0.311]}
            />
            <mesh
              name="Cube007"
              castShadow
              receiveShadow
              geometry={nodes.Cube007.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.295, -1.406, -0.311]}
              rotation={[Math.PI, -0.862, Math.PI]}
            />
          </group>
          <mesh
            name="PatasMesaAbout001"
            castShadow
            receiveShadow
            geometry={nodes.PatasMesaAbout001.geometry}
            material={materials["Medias.001"]}
            position={[0, -1.465, 0]}
            scale={[0.112, 0.147, 0.147]}
          />
          <group
            name="PcAbout001"
            position={[-3.495, -0.468, 0.222]}
            rotation={[0, 0.058, 0]}
            scale={[0.352, 1, 0.999]}
          >
            <mesh
              name="Cube042"
              castShadow
              receiveShadow
              geometry={nodes.Cube042.geometry}
              material={materials.PC_Torre}
            />
            <mesh
              name="Cube042_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube042_1.geometry}
              material={materials.PC_TOrre2}
            />
          </group>
          <mesh
            name="TecladoAbout001"
            castShadow
            receiveShadow
            geometry={nodes.TecladoAbout001.geometry}
            material={materials.Teclado}
            position={[-0.214, 0.051, 0.639]}
            rotation={[0.049, -0.171, 0.007]}
            scale={[0.769, 1, 0.994]}
          >
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials.Teclas}
              position={[0.001, 0.004, -0.009]}
              scale={0.039}
            />
          </mesh>
        </group>
        <group
          name="Cube009"
          position={[0.152, 2.349, -8.535]}
          rotation={[0.005, 0.019, -0.001]}
        >
          <mesh
            name="Cube044"
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials.Pared}
          />
          <mesh
            name="Cube044_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube044_1.geometry}
            material={materials.Puerta}
          />
          <group name="Cube008" position={[-2.559, 0.663, 1.116]}>
            <mesh
              name="Cube043"
              castShadow
              receiveShadow
              geometry={nodes.Cube043.geometry}
              material={materials["SkillsBase.001"]}
            />
            <mesh
              name="Cube043_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube043_1.geometry}
              material={materials.SkillsBase2}
            />
            <mesh
              name="Telephone1001"
              castShadow
              receiveShadow
              geometry={nodes.Telephone1001.geometry}
              material={materials.SkillsBaseBorder}
              position={[-0.609, -0.006, 0.245]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.205, 0.171, 0.166]}
            />
          </group>
        </group>
        <mesh
          name="Cable1_Projects001"
          castShadow
          receiveShadow
          geometry={nodes.Cable1_Projects001.geometry}
          material={materials.Cable1About}
          position={[1.192, 1.091, -0.584]}
        >
          <mesh
            name="Cylinder024"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024.geometry}
            material={materials["MetalSilla.001"]}
            position={[-0.961, -0.006, -0.07]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.065, 0.054, 0.065]}
          />
        </mesh>
        <mesh
          name="Cable2_Projects001"
          castShadow
          receiveShadow
          geometry={nodes.Cable2_Projects001.geometry}
          material={materials.Cable2About}
          position={[1.192, 0.886, -0.584]}
        >
          <mesh
            name="Cylinder027"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027.geometry}
            material={materials["MetalSilla.001"]}
            position={[-1.214, -0.632, 0.241]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.034, 0.028, 0.034]}
          />
        </mesh>
        <group
          name="Cube010"
          position={[-6.957, 0.423, -2.503]}
          rotation={[0, 1.171, 0]}
          scale={[1.044, 0.981, 0.709]}
        >
          <mesh
            name="Cube045"
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials["SkillsBase.001"]}
          />
          <mesh
            name="Cube045_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube045_1.geometry}
            material={materials.SkillsBaseBorder}
          />
          <mesh
            name="Cube045_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube045_2.geometry}
            material={materials.SkillsBase2}
          />
          <mesh
            name="Teclado2001"
            castShadow
            receiveShadow
            geometry={nodes.Teclado2001.geometry}
            material={materials.SkillsBaseBorder}
            position={[-0.414, 1.751, 0.394]}
            scale={[0.616, 0.206, 0.286]}
          >
            <mesh
              name="Plane009"
              castShadow
              receiveShadow
              geometry={nodes.Plane009.geometry}
              material={materials["SkillsBase2.001"]}
              position={[-0.008, 0.459, -0.301]}
              rotation={[0.629, 0.032, -0.012]}
              scale={[0.07, 0.194, 0.197]}
            />
          </mesh>
        </group>
        <mesh
          name="Cylinder020"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials["MetalSilla.001"]}
          position={[-5.866, 0.229, -3.278]}
          rotation={[Math.PI / 2, 0, -1.171]}
          scale={[0.065, 0.029, 0.065]}
        />
        <mesh
          name="Cylinder021"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials["MetalSilla.001"]}
          position={[-5.9, 0.234, -3.17]}
          rotation={[Math.PI / 2, 0, -1.171]}
          scale={[0.032, 0.014, 0.032]}
        />
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={materials["MetalSilla.001"]}
          position={[-0.249, 1.079, -0.654]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.071, 0.059, 0.071]}
        />
        <mesh
          name="Cylinder025"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials["MetalSilla.001"]}
          position={[-0.311, 0.254, -0.343]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.034, 0.028, 0.034]}
        />
        <mesh
          name="Cylinder030"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={materials["MetalSilla.001"]}
          position={[-2.963, 0.835, 7.175]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.065, 0.054, 0.065]}
        />
        <mesh
          name="Cylinder031"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials["MetalSilla.001"]}
          position={[-2.983, 0.63, 7.175]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.038, 0.032, 0.038]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["MetalSilla.001"]}
          position={[-6.957, 0.423, -2.503]}
          rotation={[0, 1.171, 0]}
          scale={[1.044, 0.981, 0.709]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../public/Models/Scene3D_2.glb");
