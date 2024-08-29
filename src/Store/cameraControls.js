const relativeWidth = (width, m = 0.004, b = 0) => {
  const y = width * m + b;
  return y;
};

export const getCameraControls = () => {
  const width = window.innerWidth;

  const y = relativeWidth(width);

  const isMobileInitial = width <= 1000;
  const isTabletInitial = width <= 1024;
  const isPCInitial = width <= 1440;

  const isMobileCharacter = width <= 500;
  const isTabletCharacter = width <= 1024;
  const isPCCharacter = width <= 1440;

  const isMobileAbout = width <= 768;
  const isTabletAbout = width <= 1024;
  const isPCAbout = width <= 1440;

  return {
    SKILLS: {
      rotation: {
        polar: {
          speed: 0, //Enable/Disable (1 or 0) polar rotation
          min: 0,
          max: Math.PI,
        },
        azimuth: {
          speed: 0, //Enable/Disable (1 or 0) azimuth rotation
          min: -Infinity,
          max: Infinity,
        },
      },
      dolly: {
        speed: 1, //Enable/Disable (1 or 0) dolly
        min: 2,
        max: 8,
      },
      coordCamera: { x: -5, y: 3.96, z: -1.6 }, //Coordinates to posisionate the camera view
      coordLook: { x: -7.87, y: 3.96, z: -2.85 }, //Coordinates to look at
    },
    CHARACTER: {
      rotation: {
        polar: {
          speed: 0.7, //Enable/Disable (1 or 0) polar rotation
          min: Math.PI / 3,
          max: Math.PI / 2,
        },
        azimuth: {
          speed: 0.7, //Enable/Disable (1 or 0) azimuth rotation
          min: -Infinity,
          max: Infinity,
        },
      },
      dolly: {
        speed: 0, //Enable/Disable (1 or 0) dolly
        min: 0,
        max: 100,
      },
      coordCamera: {
        x: 0,
        y: 3,
        z: isMobileCharacter ? 6 : isTabletCharacter ? 3.5 : 3,
      }, //Coordinates to posisionate the camera view
      coordLook: { x: 0.5, y: 1, z: 0 }, //Coordinates to look at
    },
    INITIAL: {
      rotation: {
        polar: {
          speed: 0, //Enable/Disable (1 or 0) polar rotation
          min: 0,
          max: Math.PI,
        },
        azimuth: {
          speed: 0, //Enable/Disable (1 or 0) azimuth rotation
          min: -Infinity,
          max: Infinity,
        },
      },
      dolly: {
        speed: 0, //Enable/Disable (1 or 0) dolly
        min: 1,
        max: 10,
      },
      coordCamera: isMobileInitial
        ? { x: 1, y: 4, z: 7 }
        : isTabletInitial
        ? { x: 1, y: 3.5, z: 7 }
        : { x: 1, y: 3.5, z: 7 }, //Coordinates to posisionate the camera view
      coordLook: isMobileInitial
        ? { x: 0, y: 3, z: 0 }
        : isTabletInitial
        ? { x: 3, y: 0, z: 0 }
        : { x: 3, y: 0, z: 0 }, //Coordinates to look at
    },
    CONTACT: {
      rotation: {
        polar: {
          speed: 1, //Enable/Disable (1 or 0) polar rotation
          min: Math.PI / 4,
          max: Math.PI / 2,
        },
        azimuth: {
          speed: 1, //Enable/Disable (1 or 0) azimuth rotation
          min: Math.PI / 2,
          max: Math.PI / 2,
        },
      },
      dolly: {
        speed: 1, //Enable/Disable (1 or 0) dolly
        min: 4,
        max: 11,
      },
      coordCamera: { x: 0.7, y: 2.55, z: 3 }, //Coordinates to posisionate the camera view
      coordLook: { x: 0.9, y: 2.55, z: 7.86 }, //Coordinates to look at
    },
    PROJECTS: {
      rotation: {
        polar: {
          speed: 1, //Enable/Disable (1 or 0) polar rotation
          min: 0,
          max: Math.PI,
        },
        azimuth: {
          speed: 1, //Enable/Disable (1 or 0) azimuth rotation
          min: -Infinity,
          max: Infinity,
        },
      },
      dolly: {
        speed: 1, //Enable/Disable (1 or 0) dolly
        min: 4,
        max: 11,
      },
      coordCamera: { x: 0.7, y: 2.55, z: 3 }, //Coordinates to posisionate the camera view
      coordLook: { x: 0.9, y: 2.55, z: 7.86 }, //Coordinates to look at
    },
    ABOUT: {
      rotation: {
        polar: {
          speed: 1, //Enable/Disable (1 or 0) polar rotation
          min: 1.15,
          max: 1.7,
        },
        azimuth: {
          speed: 1, //Enable/Disable (1 or 0) azimuth rotation
          min: 3.6,
          max: 5.6,
        },
      },
      dolly: {
        speed: 0.5, //Enable/Disable (1 or 0) dolly
        min: 2.3,
        max: 7.7,
      },
      coordCamera: {
        x: y,
        y: 2.78,
        z: 0.5,
      }, //Coordinates to posisionate the camera view
      coordLook: { x: 8.93, y: 2.78, z: 0.55 }, //Coordinates to look at
    },
  };
};
