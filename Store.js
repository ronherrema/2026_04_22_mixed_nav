import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

// export const useStore = create((set) => ({
//   bgc: "white",
//   setBgc: (color) => set({ bgc: color }),
// }))

export const useStore = create(
  persist(
    (set) => ({
      bgc: "white",
      setBgc: (color) => set({ bgc: color }),

      selectedItems: [],
      addSelectedItem: (item) =>
        set((state) => ({ selectedItems: [...state.selectedItems, item] })),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
