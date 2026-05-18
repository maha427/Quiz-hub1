// lib/i18n.ts

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import arNavbar
from "../locales/ar/arNavbar.json"

import enNavbar
from "../locales/en/enNavbar.json"

import arSidebar
from "../locales/ar/arSidebar.json"

import enSidebar
from "../locales/en/enSidebar.json"
// import arCommon from "@/locales/ar/common.json"
// import enCommon from "@/locales/en/common.json"

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      navbar: arNavbar,
    //   common: arCommon,
    sidebar: arSidebar
    },

    en: {
      navbar: enNavbar,
    //   common: enCommon,
      sidebar:enSidebar
    },
  },

  lng: "ar",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n