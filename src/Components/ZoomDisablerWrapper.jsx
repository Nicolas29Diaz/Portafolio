import React from "react";
import ZoomDisabler from "./ZoomDisabler";

const ZoomDisablerWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      <ZoomDisabler />
      {children}
    </div>
  );
};

export default ZoomDisablerWrapper;
