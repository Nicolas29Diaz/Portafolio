import { create } from "zustand";

// export const cameraFocus = {
//   TV: 'TV',
//   CHARACTER: 'CHARACTER',
//   PC: 'PC',
// };

const useStore = create((set) => ({
  showButton: false,
  showButtonStart: false,
  // cameraFocus: cameraFocus.CHARACTER,
  setShowButton: (value) => set({ showButton: value }),
  setShowButtonStart: (value) => set({ showButtonStart: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
}));

export default useStore;
