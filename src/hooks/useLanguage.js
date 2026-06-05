// // hooks/use-language.ts

// import i18n from "@/lib/i18n"
// import { useLanguageStore}from"../store/LanguageStore"

// export const useLanguage = () => {
//   const { language, setLanguage } = useLanguageStore()

//   const changeLanguage = (lang: "ar" | "en") => {
//     i18n.changeLanguage(lang)

//     document.documentElement.dir =
//       lang === "ar" ? "rtl" : "ltr"

//     document.documentElement.lang = lang

//     setLanguage(lang)
//   }

//   return {
//     language,
//     changeLanguage,
//   }
// }