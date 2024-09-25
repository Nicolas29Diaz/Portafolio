import React, { useEffect } from "react";
import styles from "./MenuButtons.module.css";
import useStore from "../../../Store/Store";
function MenuButtons({ isMenuButtonVisible, setMenuView }) {
  const { setSceneTheme, sceneTheme } = useStore();

  return (
    <>
      {isMenuButtonVisible && (
        <div className={styles.container}>
          <div>
            <img
              onClick={() =>
                setSceneTheme(sceneTheme === "Dark" ? "Light" : "Dark")
              }
              src={`./Images/Icons/${sceneTheme}.webp`}
              alt="MenuIcon"
            />
          </div>
          <div>
            <img
              onClick={() => setMenuView(true)}
              src="./Images/Icons/Menu.webp"
              alt="MenuIcon"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MenuButtons;
