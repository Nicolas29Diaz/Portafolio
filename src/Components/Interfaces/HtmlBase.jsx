import React, { useRef } from "react";
import { Html } from "@react-three/drei";

function HtmlBase({
  position = [0, 0, 0],
  sizeScreen = ["500px", "500px"],
  borderRadius = "10px",
  backgroundColor,
  children,
  rotation,
}) {
  const htmlRef = useRef();
  const handleWheel = () => {
    // Enfocar el contenedor HTML para que la rueda del mouse funcione
    htmlRef.current.focus();
  };

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
        alignContent: "center",
      }}
      position={position}
      rotation={rotation}
      tabIndex={0}
      ref={htmlRef}
    >
      {children}
    </Html>
  );
}

export default HtmlBase;
