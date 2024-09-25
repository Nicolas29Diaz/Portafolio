import { CameraControls } from "@react-three/drei";
import { create } from "zustand";

export const views = {
  CHARACTER: "CHARACTER",
  MENU: "MENU",
  INITIAL: "INITIAL",
  SKILLS: "SKILLS",
  CONTACT: "CONTACT",
  ABOUT: "ABOUT",
  PROJECTS: "PROJECTS",
};

const useStore = create((set) => ({
  // Control de animación del personaje
  isCharacterAnimStarted: false, // Indica si la animación del personaje ha comenzado
  setCharacterAnimStarted: (value) => set({ isCharacterAnimStarted: value }),

  // Control del botón de cancelación
  isCancelButtonVisible: false, // Visibilidad del botón de cancelación
  setCancelButtonVisibility: (value) => set({ isCancelButtonVisible: value }),

  isCancelButtonPressed: false, // Indica si el botón de cancelación fue presionado
  setCancelButtonPressed: (value) => set({ isCancelButtonPressed: value }),

  // Control del botón de inicio
  isStartButtonPressed: false, // Indica si el botón de inicio fue presionado
  setStartButtonPressed: (value) => set({ isStartButtonPressed: value }),

  isStartButtonVisible: false, // Visibilidad del botón de inicio
  setStartButtonVisibility: (value) => set({ isStartButtonVisible: value }),

  // Control de botones flotantes
  showFloatButtons: false, // Indica si los botones flotantes están visibles
  setShowFloatButtons: (value) => set({ showFloatButtons: value }),

  // Control del menú
  isMenuView: false, // Indica si el menú está visible
  setMenuView: (value) => set({ isMenuView: value }),

  menuOption: "", // Opción seleccionada en el menú
  setMenuOption: (value) => set({ menuOption: value }),

  isMenuButtonVisible: false, // Visibilidad del botón del menú
  setMenuButtonVisible: (value) => set({ isMenuButtonVisible: value }),

  // Control de la cámara
  cameraFocus: views.INITIAL, // Foco actual de la cámara
  setCameraFocus: (focus) => set({ cameraFocus: focus }),

  // Información sobre la GPU
  gpuTier: 1, // Nivel de capacidad de la GPU detectado
  setGpuTier: (value) => set({ gpuTier: value }),

  // Configuración del tema de la escena
  sceneTheme: "Dark", // Tema de la escena
  setSceneTheme: (value) => set({ sceneTheme: value }),
}));

export default useStore;
