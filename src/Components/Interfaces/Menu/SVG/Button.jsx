import React from "react";
import "./SVG.css";

const Button = ({
  onClick,
  transform,
  xForeignObject,
  yForeignObject,
  text,
  canPressButton,
}) => (
  <g
    onClick={canPressButton ? onClick : () => {}}
    transform={`translate(0 ${transform})`}
    className={canPressButton ? "menu-button-container" : ""}
  >
    <polyline
      className="menu-button"
      points="0,0 190,0 200,10 200,50 10,50 0,40 0,0"
    ></polyline>
    <polyline
      transform="translate(8 8) scale(1.2)"
      className="menu-decoration-button"
      points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
    ></polyline>
    <polyline
      transform="translate(192 42) scale(1.2) rotate(180 0 0)"
      className="menu-decoration-button"
      points="-10,-10 10,-10 8,-5 -5,-5 -5,12 -10,17 -10,-10"
    ></polyline>
    <foreignObject
      x={xForeignObject}
      y={yForeignObject}
      className="menu-foreignObject"
    >
      <div  className="menu-text-button">
        {text}
      </div>
    </foreignObject>
  </g>
);

export default Button;
