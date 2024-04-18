import React from "react";
import HtmlBase from "./HtmlBase";
import { Html } from "@react-three/drei";
function Skills() {
  return (
    <HtmlBase
      backgroundColor="red"
      sizeScreen={["795px", "450px"]}
      borderRadius="100px"
      position={[0, 0.04, 0.1]}
    >
      <h1 style={{ fontSize: "40px", margin: "0px", padding: "100px" }}>
        SKILLS
      </h1>
    </HtmlBase>
  );
}

export default Skills;
