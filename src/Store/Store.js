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
  isCancelButtonVisible: false,
  isCancelButtonPressed: false,

  showButtonStart: true,
  showFloatButtons: false,

  isMenuView: false,
  menuOption: "",
  isMenuButtonVisible: false,

  cameraFocus: views.INITIAL,
  gpuTier: 1,

  setGpuTier: (value) => set({ gpuTier: value }),
  setShowButtonStart: (value) => set({ showButtonStart: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
  setShowFloatButtons: (value) => set({ showFloatButtons: value }),
  setMenuView: (value) => set({ isMenuView: value }),
  setMenuOption: (value) => set({ menuOption: value }),
  setMenuButtonVisible: (value) => set({ isMenuButtonVisible: value }),

  setCancelButtonVisibility: (value) => set({ isCancelButtonVisible: value }),
  setCancelButtonPressed: (value) => set({ isCancelButtonPressed: value }),
}));

export default useStore;
