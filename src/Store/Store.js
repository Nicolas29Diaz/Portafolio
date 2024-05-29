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
  showButton: false,
  showButtonStart: true,

  cameraFocus: views.INITIAL,
  gpuTier: 1,

  setGpuTier: (value) => set({ gpuTier: value }),
  setShowButton: (value) => set({ showButton: value }),
  setShowButtonStart: (value) => set({ showButtonStart: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
}));

export default useStore;
