import React, { useEffect, useState } from "react";
import { About3D } from "./Screens/About3D";
import { Contact3D } from "./Screens/Contact3D";
import { Menu3D } from "./Screens/Menu3D";
import { Projects3D } from "./Screens/Projects3D";
import { Skills3D } from "./Screens/Skills3D";
import { Scenario } from "./Scenario/Scenario";
import { Shelf } from "./Scenario/Shelf";
import { Character } from "./Scenario/Character";
import { Chair } from "./Scenario/Chair";

import Skills from "../Screens/Skills/Main/Skills";
import Projects from "../Screens/Projects/Main/Projects";
import About from "../Screens/About/Main/About";
import Menu from "../Screens/Menu/Main/Menu";
import Contact from "../Screens/Contact/Main/Contact";

import useStore from "../../Store/Store";
import { Cables } from "./Scenario/Cables";
import {
  characterEyesDissolveDelay,
  helmetAnimationDelay,
  introAnimationTime,
  showScreensTime,
} from "../../Constants/Times.js";

export function Scene3D() {
  const { isStartButtonPressed, isStartButtonVisible, cameraFocus } =
    useStore();

  //Scenario visibility
  const [showScenario, setShowScenario] = useState(true);

  //Screens visibility
  const [showScreens, setShowScreens] = useState(false);
  const [showAboutScreen, setShowAboutScreen] = useState(false);
  const [showContactScreen, setShowContactScreen] = useState(false);
  const [showMenuScreen, setShowMenuScreen] = useState(false);
  const [showProjectsScreen, setShowProjectsScreen] = useState(false);
  const [showSkillsScreen, setShowSkillsScreen] = useState(false);

  const [chargeSreen, setChargeScreen] = useState(false);

  // Character
  ////Animations
  const [characterIntroAnim, setCharacterIntroAnim] = useState(false);
  const [characterSitAnim, setCharacterSitAnim] = useState(false);
  const [characterDissolveEyes, setCharacterDissolveEyes] = useState(false);
  ////Visibility
  const [showCharacter, setShowCharacter] = useState(true);
  const [chargeCharacter, setChargeCharacter] = useState(false);

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
    setShowProjects(true);
    setTimeout(() => {
      setChairHelmetAnim(true);
    }, helmetAnimationDelay);

    setTimeout(() => {
      setCharacterDissolveEyes(true);
    }, characterEyesDissolveDelay);
  };

  useEffect(() => {
    if (isStartButtonPressed) {
      setTimeout(() => {
        setShowScreens(true);
      }, showScreensTime);
      startAnimation();
    } else {
      setTimeout(() => {
        introAnimation();
      }, introAnimationTime);
    }
  }, [isStartButtonPressed]);

  useEffect(() => {
    if (cameraFocus === "PROJECTS") {
      setShowCables(true);
      setShowChair(false);
      setShowCharacter(false);
      setShowMenu(false);
    } else if (cameraFocus === "INITIAL") {
      setChargeCharacter(true);
      setShowCharacter(true);
    } else {
      setShowCables(false);
      setShowChair(true);
      setShowCharacter(true);
      setShowMenu(true);
      setChargeScreen(true);
      setShowScenario(true);
    }
  }, [cameraFocus]);

  return (
    <>
      {/* SCREENS */}

      <About3D>{chargeSreen && <About showScreen={showScreens} />}</About3D>
      <Contact3D>
        {chargeSreen && <Contact showScreen={showScreens} />}
      </Contact3D>

      <Menu3D visible={showScenario}>
        {chargeSreen && <Menu showScreen={showScreens} />}
      </Menu3D>

      <Projects3D visible={showProjects}>
        {chargeSreen && <Projects showScreen={showScreens} />}
      </Projects3D>

      <Skills3D>{chargeSreen && <Skills showScreen={showScreens} />}</Skills3D>

      {/* Scenario */}
      {chargeCharacter && (
        <Character
          introAnimation={characterIntroAnim}
          sitAnimation={characterSitAnim}
          visible={showCharacter}
          dissolveEyes={characterDissolveEyes}
        />
      )}

      <Chair startAnimation={chairHelmetAnim} visible={showChair} />

      {/* <Cables visible={showCables} /> */}
      {/* Verificar si es mejor con esto o sin esto */}

      <Scenario show={showScenario} />
      {chargeSreen && <Shelf />}
    </>
  );
}
