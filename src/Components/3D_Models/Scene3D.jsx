import React, { useEffect, useState } from "react";
import { About3D } from "./Screens/About3D";
import { Contact3D } from "./Screens/Contact3D";
import { Menu3D } from "./Screens/Menu3D";
import { Projects3D } from "./Screens/Projects3D";
import { Skills3D } from "./Screens/Skills3D";
import { Scenario } from "./Scenario";
import { Shelf } from "./Shelf";
import { Character } from "./Character";
import { Chair } from "./Chair";

import Skills from "../Interfaces/Skills/Skills";
import Projects from "../Interfaces/Projects/Projects";
import About from "../Interfaces/About/About";
import useStore from "../../Store/Store";
import { Cables } from "./Cables";
import Menu from "../Interfaces/Menu/Menu";
import Contact from "../Interfaces/Contact/Contact";

export function Scene3D() {
  const { isStartButtonPressed, isStartButtonVisible, cameraFocus } =
    useStore();

  //Screens visibility
  const [showScreens, setShowScreens] = useState(false);

  // Character
  ////Animations
  const [characterIntroAnim, setCharacterIntroAnim] = useState(true);
  const [characterSitAnim, setCharacterSitAnim] = useState(false);
  const [characterDissolveEyes, setCharacterDissolveEyes] = useState(false);
  ////Visibility
  const [showCharacter, setShowCharacter] = useState(true);

  // Chair
  ////Animations
  const [chairHelmetAnim, setChairHelmetAnim] = useState(false);

  ////Visibility
  const [showChair, setShowChair] = useState(true);

  //Projects
  ////Visibility
  const [showProjects, setShowProjects] = useState(false);

  //Cables
  ////Visibility
  const [showCables, setShowCables] = useState(false);

  //Menu
  ////Visibility
  const [showMenu, setShowMenu] = useState(true);

  const introAnimation = () => {
    setCharacterIntroAnim(true);
    // console.log("Intro Animation");
  };

  const startAnimation = () => {
    setCharacterIntroAnim(false);
    setCharacterSitAnim(true);
    setTimeout(() => {
      setShowProjects(true);
    }, 500);

    setTimeout(() => {
      setChairHelmetAnim(true);
    }, 1500);

    setTimeout(() => {
      setCharacterDissolveEyes(true);
    }, 3500);
  };

  useEffect(() => {
    if (isStartButtonPressed) {
      setShowScreens(true);
      startAnimation();
    } else {
      introAnimation();
    }
  }, [isStartButtonPressed]);

  useEffect(() => {
    if (cameraFocus === "PROJECTS") {
      setShowCables(true);
      setShowChair(false);
      setShowCharacter(false);
      setShowMenu(false);
    } else {
      setShowCables(false);
      setShowChair(true);
      setShowCharacter(true);
      setShowMenu(true);
    }
  }, [cameraFocus]);

  return (
    <>
      {/* SCREENS */}
      <About3D>
        <About showScreen={showScreens} />
      </About3D>

      <Contact3D>
        <Contact showScreen={showScreens} />
      </Contact3D>

      <Menu3D visible={showMenu}>
        <Menu showScreen={showScreens} />
      </Menu3D>

      <Projects3D visible={showProjects}>
        {showScreens && <Projects />}
      </Projects3D>

      <Skills3D>{showScreens && <Skills />}</Skills3D>

      {/* Scenario */}
      <Character
        introAnimation={characterIntroAnim}
        sitAnimation={characterSitAnim}
        visible={showCharacter}
        dissolveEyes={characterDissolveEyes}
      />

      <Chair startAnimation={chairHelmetAnim} visible={showChair} />

      {/* Verificar si es mejor con esto o sin esto */}
      <Cables visible={showCables} />

      <Scenario />
      <Shelf />
    </>
  );
}
