import React from "react";
import styles from "./LoadingIcon.module.css";
function LoadingLogo({ progress, hideLoadinLogo }) {
  return (
    <div className={`${styles.container} ${hideLoadinLogo && styles.scaleOut}`}>
      <div className={styles.fillContainer}>
        <div className={styles.fill} style={{ height: `${progress}%` }}></div>
      </div>
      <svg
        className={styles.logo}
        width="80"
        height="80"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_744_3)">
          <circle cx="100" cy="100" r="92.5" stroke="white" strokeWidth="15" />
          <mask
            id="path-2-outside-1_744_3"
            maskUnits="userSpaceOnUse"
            x="24"
            y="44"
            width="149"
            height="115"
            fill="black"
          >
            <rect fill="white" x="24" y="44" width="149" height="115" />
            <path d="M134.27 143.53L72.7797 81.16L75.8597 81.93L76.0797 141H65.4097V59.05H65.9597L126.79 121.64L124.26 121.09L124.04 61.47H134.6V143.53H134.27Z" />
          </mask>
          <path
            d="M134.27 143.53L123.588 154.061L127.994 158.53H134.27V143.53ZM72.7797 81.16L76.4178 66.6079L24.5962 53.6524L62.098 91.691L72.7797 81.16ZM75.8597 81.93L90.8596 81.8741L90.8162 70.2075L79.4978 67.3779L75.8597 81.93ZM76.0797 141V156H91.1357L91.0796 140.944L76.0797 141ZM65.4097 141H50.4097V156H65.4097V141ZM65.4097 59.05V44.05H50.4097V59.05H65.4097ZM65.9597 59.05L76.7165 48.5957L72.2986 44.05H65.9597V59.05ZM126.79 121.64L123.603 136.298L172.225 146.868L137.546 111.186L126.79 121.64ZM124.26 121.09L109.26 121.145L109.304 133.189L121.073 135.748L124.26 121.09ZM124.04 61.47V46.47H108.984L109.04 61.5253L124.04 61.47ZM134.6 61.47H149.6V46.47H134.6V61.47ZM134.6 143.53V158.53H149.6V143.53H134.6ZM144.951 132.999L83.4614 70.629L62.098 91.691L123.588 154.061L144.951 132.999ZM69.1417 95.7121L72.2217 96.4821L79.4978 67.3779L76.4178 66.6079L69.1417 95.7121ZM60.8598 81.9859L61.0798 141.056L91.0796 140.944L90.8596 81.8741L60.8598 81.9859ZM76.0797 126H65.4097V156H76.0797V126ZM80.4097 141V59.05H50.4097V141H80.4097ZM65.4097 74.05H65.9597V44.05H65.4097V74.05ZM55.203 69.5043L116.033 132.094L137.546 111.186L76.7165 48.5957L55.203 69.5043ZM129.976 106.982L127.446 106.432L121.073 135.748L123.603 136.298L129.976 106.982ZM139.26 121.035L139.04 61.4146L109.04 61.5253L109.26 121.145L139.26 121.035ZM124.04 76.47H134.6V46.47H124.04V76.47ZM119.6 61.47V143.53H149.6V61.47H119.6ZM134.6 128.53H134.27V158.53H134.6V128.53Z"
            fill="white"
            mask="url(#path-2-outside-1_744_3)"
          />
        </g>
        <defs>
          <clipPath id="clip0_744_3">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default LoadingLogo;
