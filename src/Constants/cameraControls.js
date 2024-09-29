const relativeDistance = (
  width,
  maxDist,
  minDist,
  maxWidth = 1440,
  minWidth = 320
) => {
  let m = (maxDist - minDist) / (maxWidth - minWidth);

  let b = -m * minWidth + minDist;

  let y = width * m + b;

  if (maxDist > minDist) {
    return (y = Math.max(minDist, Math.min(maxDist, y)));
  } else {
    return (y = Math.min(minDist, Math.max(maxDist, y)));
  }
};
export const truckSpeed = 0;

const getCoords = (width, breakpoints) => {
  const { extralarge, large, medium, small } = breakpoints;

  if (width >= 1440) return extralarge;
  if (width >= 1024) return large;
  if (width >= 768) return medium;
  return small;
};

const breakpointsPosition = {
  extralarge: { x: 1.5, y: 2.5, z: 5 },
  large: { x: 1.2, y: 2.5, z: 5 },
  medium: { x: 1.2, y: 2.5, z: 5.5 },
  small: { x: 1, y: 2.8, z: 7 },
};

const breakpointsLook = {
  extralarge: { x: 2.5, y: 1.2, z: 0 },
  large: { x: 2.2, y: 1.2, z: 0 },
  medium: { x: 1.9, y: 1.2, z: 0 },
  small: { x: 0, y: 2.8, z: 0 },
};

export const getCameraControls = () => {
  const width = window.innerWidth;

  const x_distanceAbout = relativeDistance(width, 6.33, 3.64);

  const z_positionProjects = relativeDistance(width, 3.5, 2.32);

  //En skills cambia tanto X como Z entonces se aplica la función relativeDistance a ambas
  const x_positionSkills = relativeDistance(width, -5.52, -2.04);
  const z_positionSkills = relativeDistance(width, -1.91, -0.61);

  //Acá como la rotacion es 360 se hace con la distancia y no una coordenada
  // const distanceCharacter = relativeDistance(width, 3.8, 5.7);
  const x_positionCharacter = relativeDistance(width, 2.66, 2.95);
  const y_positionCharacter = relativeDistance(width, 1.62, 2.26);
  const z_positionCharacter = relativeDistance(width, 3.07, 4.99);

  //En Menu cambia tanto Y como Z como X entonces se aplica la función relativeDistance a todas
  const x_positionMenu = relativeDistance(width, 1.31, 1.5, 1024);
  const y_positionMenu = relativeDistance(width, 1.48, 2.32, 1024);
  const z_positionMenu = relativeDistance(width, 0.81, 1.21, 1024);

  //Contacts
  const y_positionContact = relativeDistance(width, 3.5, 3.59);
  const z_positionContact = relativeDistance(width, -5.45, -4.72);

  //Inital
  const positionInitial = getCoords(width, breakpointsPosition);
  const lookInitial = getCoords(width, breakpointsLook);

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
        speed: 0.8, //Enable/Disable (1 or 0) dolly
        min: 2,
        max: 8,
      },
      coordCamera: { x: x_positionSkills, y: 3.95, z: z_positionSkills }, //Coordinates to posisionate the camera view
      coordLook: { x: -7.87, y: 3.96, z: -2.85 }, //Coordinates to look at
    },
    CHARACTER: {
      rotation: {
        polar: {
          speed: 1, //Enable/Disable (1 or 0) polar rotation
          min: Math.PI / 3,
          max: Math.PI / 2,
        },
        azimuth: {
          speed: 1, //Enable/Disable (1 or 0) azimuth rotation
          min: -Infinity,
          max: Infinity,
        },
      },
      dolly: {
        speed: 0, //Enable/Disable (1 or 0) dolly
        min: 0,
        max: 10,
        // distance: distanceCharacter,
      },
      coordCamera: {
        x: x_positionCharacter,
        y: y_positionCharacter,
        z: z_positionCharacter,
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
        max: 15,
      },
      coordCamera: positionInitial,
      coordLook: lookInitial,
    },
    CONTACT: {
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
        min: 2,
        max: 6,
      },
      coordCamera: { x: 0.18, y: y_positionContact, z: z_positionContact }, //Coordinates to posisionate the camera view
      coordLook: { x: 0.275, y: 3, z: -8 }, //Coordinates to look at
    },
    PROJECTS: {
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
        min: 3,
        max: 11,
      },
      coordCamera: { x: 0.6, y: 2.55, z: z_positionProjects }, //Coordinates to posisionate the camera view
      coordLook: { x: 0.6, y: 2.55, z: 7 }, //Coordinates to look at
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
        min: 2.6,
        max: 7.7,
      },
      coordCamera: {
        x: x_distanceAbout,
        y: 2.78,
        z: 0.5,
      }, //Coordinates to posisionate the camera view
      coordLook: { x: 8.93, y: 2.78, z: 0.55 }, //Coordinates to look at
    },
    MENU: {
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
        min: 0,
        max: 10,
      },
      coordCamera: { x: x_positionMenu, y: y_positionMenu, z: z_positionMenu }, //Coordinates to posisionate the camera view
      coordLook: { x: 1.5, y: 0.5, z: 0 }, //Coordinates to look at
    },
  };
};

// coordCamera:
// width >= 1024 ? { x: 1, y: 4, z: 7 } : { x: 0.9, y: 2.5, z: 4.5 },
// coordLook:
// width >= 1024 ? { x: 0, y: 3, z: 0 } : { x: 1.9, y: 1.2, z: 0 },
