import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import "./Menu.css";
import Background from "./SVG/Background";
function Menu() {
  const { cameraFocus } = useStore();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cameraFocus === "MENU") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);
  return (
    <>
      <Html
        className={`menu-html ${animate ? "" : "menu-no-pointer"}`}
        distanceFactor={1.72}
        transform
        occlude="blending"
        position={[0, 1.57, 0]}
        rotation={[-Math.PI / 3, 0, 0]}
        // scale={[2, 2, 2]}
      >
        {/* <div className="menu-container">
          <button style={{ backgroundColor: "#00326c" }}>Skills</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div> */}

        {/* <div className="menu">
          <button>MENU</button>
        </div> */}
        <Background animate={animate} />
      </Html>
    </>
  );
}

export default Menu;
