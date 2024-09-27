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

  return (
    <>
      <div className={styles.coverButtonsContainer}>
        <div className={styles.coverButtons}></div>
      </div>

      <nav aria-label="Menu options" className={styles.navContainer}>
        <ul className={styles.menuOptionsList}>
          <li>
            <Button
              canPressButton={canPressButton}
              positionY={57}
              text={"SKILLS"}
              onClick={() => setMenuOption("SKILLS")}
            />
          </li>
          <li>
            <Button
              canPressButton={canPressButton}
              positionY={114}
              text={"ABOUT"}
              onClick={() => setMenuOption("ABOUT")}
            />
          </li>
          <li>
            <Button
              canPressButton={canPressButton}
              positionY={171}
              text={"PROJECTS"}
              onClick={() => setMenuOption("PROJECTS")}
            />
          </li>
          <li>
            <Button
              canPressButton={canPressButton}
              positionY={228}
              text={"CONTACT"}
              onClick={() => setMenuOption("CONTACT")}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Buttons;
