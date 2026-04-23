import { create } from "zustand"

export const useStore = create((set) => ({
  bgc: "white",
  setBgc: (color) => set({ bgc: color }),
}))
