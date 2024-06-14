import { create } from "zustand";

export const views = {
  TV: "TV",
  CHARACTER: "CHARACTER",
  PC: "PC",
  INITIAL: "INITIAL",
  SKILLS: "SKILLS",
  CONTACT: "CONTACT",
  ABOUT: "ABOUT",
  PROJECTS: "PROJECTS",
};

const useStore = create((set) => ({
  showCancelButton: false,
  showButtonStart: true,
  showFloatButtons: false,

  cameraFocus: views.INITIAL,
  gpuTier: 1,

  setGpuTier: (value) => set({ gpuTier: value }),
  setShowCancelButton: (value) => set({ showCancelButton: value }),
  setShowButtonStart: (value) => set({ showButtonStart: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
  setShowFloatButtons: (value) => set({ showFloatButtons: value }),
}));

export default useStore;
