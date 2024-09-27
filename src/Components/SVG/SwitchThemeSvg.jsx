import React, { useState } from "react";

function SwitchThemeSvg({ color = "#000", theme }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`${
          theme === "Dark"
            ? "M135.438 62.812C133.573 70.7262 128.827 104.842 128.827 104.842C128.827 104.842 129.13 131.342 128.827 148.288C128.697 155.528 126.37 159.389 118.909 159.389C106.353 159.389 85.562 160.5 73.4173 160.5C65.7302 160.5 63.5043 154.121 63.5 146.069C63.4972 141.894 64.1141 40.6115 64.1141 40.6115L118.909 39.5C118.909 39.5 125.45 44.6213 131.031 50.6009C134.143 53.9383 137.315 54.8472 135.438 62.812ZM99.2091 145.908C119.351 145.908 119.224 115.663 99.5531 115.663C78.0156 115.663 78.9907 145.908 99.2091 145.908ZM108.728 72.0107L98.7556 71.2847L95.33 93.0783H104.568L108.728 72.0107ZM115.649 47.6491L72.5744 49.0294L72.2958 103.121L74.2289 103.324L78.0838 59.7926L127.304 58.9048L115.649 47.6491ZM99.2915 123.021C109.388 123.021 109.452 138.543 99.1138 138.543C88.7388 138.543 88.2385 123.021 99.2915 123.021Z"
            : "M118.909 160.5L64.1155 159.39C64.1155 159.39 63.4958 58.1071 63.5 53.9312C63.5057 45.8792 65.7316 39.5 73.4185 39.5C85.5615 39.5 106.355 40.6115 118.909 40.6115C126.368 40.6115 128.698 44.4722 128.827 51.7124C129.132 68.6579 128.827 98.3361 128.827 98.3361C128.827 98.3361 133.575 129.274 135.438 137.189C137.314 145.156 134.145 146.063 131.03 149.4C125.449 155.379 118.909 160.5 118.909 160.5ZM118.909 100.556L120.01 50.9006L73.727 49.7891L74.034 102.775L79.5433 139.408L125.523 140.52L118.909 100.556ZM98.5999 106.145C118.262 106.145 121.719 133.751 102.516 133.751C81.4906 133.751 78.8639 106.145 98.5999 106.145ZM101.211 125.959C109.569 125.959 108.065 113.944 99.5068 113.944C90.9145 113.944 92.0587 125.959 101.211 125.959ZM91.9521 83.877L91.5839 59.9446L102.622 60.1852L102.283 84.2063L91.9521 83.877Z"
        }`}
        fill={color}
      />
    </svg>
  );
}

export default SwitchThemeSvg;
