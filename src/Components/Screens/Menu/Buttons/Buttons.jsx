// React
import React, { useEffect, useState } from "react";

// State Management
import useStore from "../../../../Store/Store";

// Local Components
import Button from "./Button";

// Styles
import styles from "./Buttons.module.css";

function Buttons({ isMenuOptionsVisible, canPressButton }) {
  const { setMenuOption } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    console.log("isHovered", isHovered);
  }, [isHovered]);

  return (
    <>
      <div className={styles.coverButtonsContainer}>
        <div className={styles.coverButtons}></div>
      </div>
      
      <Button
        canPressButton={canPressButton}
        positionY={57}
        text={"SKILLS"}
        onClick={() => setMenuOption("SKILLS")}
      ></Button>
      <Button
        canPressButton={canPressButton}
        positionY={114}
        text={"ABOUT"}
        onClick={() => setMenuOption("ABOUT")}
      ></Button>
      <Button
        canPressButton={canPressButton}
        positionY={171}
        text={"PROJECTS"}
        onClick={() => setMenuOption("PROJECTS")}
      ></Button>
      <Button
        canPressButton={canPressButton}
        positionY={228}
        text={"CONTACT"}
        onClick={() => setMenuOption("CONTACT")}
      ></Button>
    </>
  );
}

export default Buttons;
