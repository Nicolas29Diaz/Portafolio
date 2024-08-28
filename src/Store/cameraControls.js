export const getCameraControls = () => {
  const isMobileInitial = window.innerWidth <= 1000;
  const isTabletInitial = window.innerWidth <= 1024;
  const isPCInitial = window.innerWidth <= 1440;

  const isMobileCharacter = window.innerWidth <= 768;
  const isTabletCharacter = window.innerWidth <= 1024;
  const isPCCharacter = window.innerWidth <= 1440;

  // console.log("isMobile: ", isMobile);
  // Si es mobile, retornar los controles de cámara para mobile

  // if (isMobile) {
  //   return mobileCameraControls;
  // } else {
  //   return pcCameraControls;
  // }

  return {
    SKILLS: {
      rotation: {
        polar: {
          speed: 1, //Enable/Disable (1 or 0) polar rotation
          min: 0.1,
          max: Math.PI,
        },
        azimuth: {
          speed: 0.1, //Enable/Disable (1 or 0) azimuth rotation
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
    ABOUT: {
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
        min: 1,
        max: 10,
      },
      coordCamera: { x: 1, y: 2.78, z: 0.5 }, //Coordinates to posisionate the camera view
      coordLook: { x: 8.93, y: 2.78, z: 0.55 }, //Coordinates to look at
    },
  };
};
