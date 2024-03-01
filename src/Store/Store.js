import { create } from 'zustand';

export const cameraFocus = {
  TV: 'TV',
  CHARACTER: 'CHARACTER',
  PC: 'PC',
};

const useStore = create((set) => ({
  showButton: false,
  cameraFocus: cameraFocus.CHARACTER,
  setShowButton: (value) => set({ showButton: value }),
  setCameraFocus: (focus) => set({ cameraFocus: focus }),
}));

export default useStore;
