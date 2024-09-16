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
  isCharacterAnimStarted: false,

  isCancelButtonVisible: false,
  isCancelButtonPressed: false,

  isStartButtonPressed: false,
  isStartButtonVisible: false,

  showFloatButtons: false,

  isMenuView: false,
  menuOption: "",
  isMenuButtonVisible: false,

  cameraFocus: views.INITIAL,
  gpuTier: 1,

  setCharacterAnimStarted: (value) => set({ isCharacterAnimStarted: value }),
  setGpuTier: (value) => set({ gpuTier: value }),

  setStartButtonPressed: (value) => set({ isStartButtonPressed: value }),
  setStartButtonVisibility: (value) => set({ isStartButtonVisible: value }),

  setCameraFocus: (focus) => set({ cameraFocus: focus }),
  setShowFloatButtons: (value) => set({ showFloatButtons: value }),
  setMenuView: (value) => set({ isMenuView: value }),
  setMenuOption: (value) => set({ menuOption: value }),
  setMenuButtonVisible: (value) => set({ isMenuButtonVisible: value }),

  setCancelButtonVisibility: (value) => set({ isCancelButtonVisible: value }),
  setCancelButtonPressed: (value) => set({ isCancelButtonPressed: value }),
}));

export default useStore;
