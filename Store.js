import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useStore = create(
  persist(
    (set) => ({
      // single key-value pair
      bgc: "white",
      setBgc: (color) => set({ bgc: color }),

      // an array
      selectedItems: [],
      addSelectedItem: (item) =>
        set((state) => ({ selectedItems: [...state.selectedItems, item] })),

      // a JS object
      profile: {
        name: "",
        email: "",
        address: "",
      },
      setProfile: (data) =>
        set((state) => ({ profile: { ...state.profile, ...data } })),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
