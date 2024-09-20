import React, { useEffect } from "react";
import "./SVG.css";
import useStore from "../../../../Store/Store";
import Button from "./Button";

function Buttons({ isMenuOptionsVisible, canPressButton }) {
  const { setMenuOption } = useStore();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "10",
          left: "10",
        }}
      >
        {/* Buttons */}
        <mask id="button-mask">
          <rect
            x="-20"
            y="-20"
            width="235"
            height="0"
            fill="white"
            className={isMenuOptionsVisible ? "mask-button-animation" : ""}
          />
        </mask>

        <g transform="translate(80 80)" mask="url(#button-mask)">
          <Button
            canPressButton={canPressButton}
            onClick={() => setMenuOption("SKILLS")}
            transform="0"
            xForeignObject={52}
            yForeignObject={7}
            text="SKILLS"
          ></Button>
          <Button
            canPressButton={canPressButton}
            onClick={() => setMenuOption("ABOUT")}
            transform="80"
            xForeignObject={52}
            yForeignObject={7}
            text="ABOUT"
          ></Button>
          <Button
            canPressButton={canPressButton}
            onClick={() => setMenuOption("PROJECTS")}
            transform="160"
            xForeignObject={25}
            yForeignObject={7}
            text="PROJECTS"
          ></Button>
          <Button
            canPressButton={canPressButton}
            onClick={() => setMenuOption("CONTACT")}
            transform="240"
            xForeignObject={32}
            yForeignObject={7}
            text="CONTACT"
          ></Button>
        </g>
      </svg>
    </>
  );
}

export default Buttons;
