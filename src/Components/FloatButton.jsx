import "../Syles/FloatButton.css";
import { Html } from "@react-three/drei";

export function FloatButton({ view, changeView, ...props }) {
  return (
    <Html
      // distanceFactor={1}
      {...props}
      transform
      occlude="blending"
      className="contentButton"

    >
      <div onClick={() => changeView(view)}>+</div>
      <i></i>
      <i></i>
    </Html>
  );
}
