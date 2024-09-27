import React from "react";
import styles from "./MenuButtons.module.css";
import useStore from "../../../Store/Store";
import MenuSvg from "../../SVG/MenuSvg";
import SwitchThemeSvg from "../../SVG/SwitchThemeSvg";

function MenuButtons({ isMenuButtonVisible, setMenuView }) {
  const { setSceneTheme, sceneTheme } = useStore();

  return (
    <>
      {isMenuButtonVisible && (
        <header className={styles.container} aria-label="Floating navigation menu">
          <ul>
            {/* Botón para cambiar el tema */}
            <li>
              <button
                onClick={() =>
                  setSceneTheme(sceneTheme === "Dark" ? "Light" : "Dark")
                }
                aria-label="Switch Theme"
              >
                <SwitchThemeSvg
                  color={sceneTheme === "Dark" ? "#000" : "#fff"}
                  theme={sceneTheme}
                />
              </button>
            </li>

            {/* Botón para abrir el menú */}
            <li>
              <button onClick={() => setMenuView(true)} aria-label="Open Menu">
                <MenuSvg color={sceneTheme === "Dark" ? "#000" : "#fff"} />
              </button>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}

export default MenuButtons;
