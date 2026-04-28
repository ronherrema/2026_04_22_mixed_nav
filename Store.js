import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useStore = create(
  persist(
    (set) => ({
      bgc: "white",
      setBgc: (color) => set({ bgc: color }),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
