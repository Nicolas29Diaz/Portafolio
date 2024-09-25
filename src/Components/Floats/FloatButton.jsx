import { useEffect, useRef, useState } from "react";
import "..//../StylesVariables/Floats/FloatButton.css";
import { Html } from "@react-three/drei";
import useStore from "../../Store/Store.js";
import { useScaleAnimation } from "../../Animation/useScaleAnimation.jsx";

export function FloatButton({ view, changeView, ...props }) {
  const { showFloatButtons } = useStore();
  // const [scale, setScale] = useState(showFloatButtons ? 1 : 0);
  const [animationScale, setAnimationScale] = useState(false);

  const scale = useScaleAnimation(showFloatButtons, 0.8);

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
