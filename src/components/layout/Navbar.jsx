"use client"

// import { useTranslation } from "react-i18next"
// import { useLanguage } from "@/hooks/useLanguage"
import {Bell,CircleHelp } from "lucide-react"

import { useTranslation }from "react-i18next"

import { useLanguageStore }from "../../store/LanguageStore"
import { COLORS } from "@/Constant/Colors"
import SearchBar from "./SearchBar"

export default function Navbar() {

  const { t } =useTranslation("navbar")

  const language =useLanguageStore((state) => state.language )

  const isArabic =language === "ar"

  return (
  //هون المسافة بين البحث والايقونات 
    <header
       dir={isArabic ? "rtl" : "ltr"}

  className={`
    h-[70px]
   
    bg-white
       shadow-sm

    flex
    items-center
    justify-between

    px-6

    ${
      isArabic
        ? "mr-[160px]"
        : "ml-[160px]"
    }
  `}
     
    >


    <SearchBar/>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-10">

        <button>

          <CircleHelp
            className="
              h-5
              w-5
              text-slate-500
            "
          />

        </button>

        <button className="relative">

          <Bell
            className="
              h-5
              w-5
              text-slate-500
            "
          />
 
          {/* <span
            className="
              absolute
              -top-1
              -right-1
              h-2
              w-2
              rounded-full
              bg-red-
            "
          /> */}



   
        </button>

         
            <div className="flex items-center gap-5">
            
 
           <div  >
          <h2 className="text-sm font-semibold" style={{color:COLORS.primary}}>
            محمد حسين
          </h2>

          <p className="text-xs text-slate-500">
            {t("student")}
          </p>

  </div>  

         <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />
      </div>
      </div>

    </header>
  )
}









// \\الان لدي مشروع منصة اختبارات الكترونية واستخدم
//  فيه tanstack query and shadcn and zustand and i18next 
//   والمشروع لغتين انكلش وعربي  وقمت ببناء الnavbar and sidebar  وريد بناء المحتوى الذي بالمنتصف 