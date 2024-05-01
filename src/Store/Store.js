import { create } from "zustand";

export const views = {
  TV: "TV",
  CHARACTER: "CHARACTER",
  PC: "PC",
  INITIAL: "INITIAL",
  SKILLS: "SKILLS",
  CONTACT: "CONTACT",
};

const useStore = create((set) => ({
  showButton: false,
  showButtonStart: true,

  cameraFocus: views.INITIAL,

  setShowButton: (value) => set({ showButton: value }),
  setShowButtonStart: (value) => set({ showButtonStart: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
}));

export default useStore;
