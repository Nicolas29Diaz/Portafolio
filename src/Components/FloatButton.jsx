import { useEffect, useRef, useState } from "react";
import "../Syles/FloatButton.css";
import { Html } from "@react-three/drei";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import useStore from "../Store/Store.js";

export function FloatButton({ view, changeView, ...props }) {
  const { showFloatButtons } = useStore();
  const [scale, setScale] = useState(showFloatButtons ? 1 : 0);
  const [animationScale, setAnimationScale] = useState(false);

  const isMounted = useRef(false);

  // useEffect(() => {
  //   setAnimationScale(false);
  //   setTimeout(() => {
  //     setAnimationScale(true);
  //   }, 100);
  // }, []);

  useEffect(() => {
    // if (!animationScale) return;
    if (!isMounted.current) {
      // Si el componente está en fase de montaje, no ejecutar la animación
      isMounted.current = true;
      return;
    }
    console.log("show: ", showFloatButtons);
    let animationFrame;
    const duration = 200; // Duración de la animación en milisegundos
    const startTime = performance.now();

    const animate = (time) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      if (showFloatButtons) {
        setScale(progress);
      } else {
        setScale(1 - progress);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [showFloatButtons]);
  return (
    <Html
      // distanceFactor={1}
      {...props}
      transform
      occlude="blending"
      className={`
        
      contentFloatButton `}
      // visible={show}
      scale={scale}
    >
      <div onClick={() => changeView(view)}>+</div>
      <i></i>
      <i></i>
    </Html>
  );
}
