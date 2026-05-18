// stores/language-store.ts

// import { create } from "zustand"

// type Language = "ar" | "en"

// type LanguageStore = {
//   language: Language
//   setLanguage: (lang: Language) => void
// }

// export const useLanguageStore = create<LanguageStore>((set) => ({
//   language: "ar",

//   setLanguage: (lang) =>
//     set({
//       language: lang,
//     }),
// }))
import i18n from "../lib/i18n"
import { create } from "zustand"

type LanguageStore = {

  language: "ar" | "en"

  changeLanguage:
  (lang: "ar" | "en") => void
}

export const useLanguageStore =
create<LanguageStore>((set) => ({

  language: "ar",

  changeLanguage: (lang) => {

    i18n.changeLanguage(lang)

    document.documentElement.dir =
      lang === "ar"
        ? "rtl"
        : "ltr"

    set({ language: lang })
  },

}))