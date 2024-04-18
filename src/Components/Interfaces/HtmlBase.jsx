import React from "react";
import { Html } from "@react-three/drei";

function HtmlBase({
  position = [0, 0, 0],
  sizeScreen = ["500px", "500px"],
  borderRadius = "10px",
  backgroundColor,
  children,
}) {
  return (
    <Html
      distanceFactor={1}
      transform
      occlude="blending"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "",
        width: sizeScreen[0],
        height: sizeScreen[1],
        borderRadius: borderRadius,
      }}
      position={position}
    >
      {children}
    </Html>
  );
}

export default HtmlBase;
