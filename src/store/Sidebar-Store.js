import { create } from "zustand"

export const useSidebarStore = create((set) => ({
  active: "dashboard",

  language: "ar",

  setActive: (value) =>
    set({ active: value }),

  toggleLanguage: () =>
    set((state) => ({
      language:
        state.language === "ar"
          ? "en"
          : "ar",
    })),
}))