"use client"
import { useNavigate } from "react-router-dom"
import { useSidebarStore } from "../../store/Sidebar-Store"

//import { useLanguage } from "@/hooks/useLanguage"
import { useTranslation } from "react-i18next"
import { useLanguageStore } from "@/store/LanguageStore" 


import { LayoutDashboard, FileQuestion, ClipboardList, BarChart3, Settings,} from "lucide-react"

import { COLORS } from "../../Constant/Colors"


const sidebarItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "questions",
    icon: FileQuestion,
  },

  {
    id: "exams",
    icon: ClipboardList,
  },

  {
    id: "analytics",
    icon: BarChart3,
  },

  {
    id: "settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const { t } = useTranslation("sidebar")
  //const { language, changeLanguage } = useLanguage()
  

const navigate = useNavigate()

const { language,changeLanguage } = useLanguageStore()

  const { active,setActive,} = useSidebarStore()

  const isArabic = language === "ar"

  return (
    
   <aside
  dir={isArabic ? "rtl" : "ltr"}
  className={`
    fixed top-0
    w-[240px]
    min-h-screen
    bg-white
    p-2
    transition-all
    duration-300
    shadow-sm

    ${isArabic ? "right-0 " : "left-0 "}
  `}
>
      {/* Logo */}

      <div className=" text-center" style={{paddingLeft:"70px"}}>
        <h1 className=" text-3xl font-bold text-cyan-500" style={{color:COLORS.primary , fontSize:"35px",}}>
          QuizHub
           
        </h1>
         <p className="mt-2 text-sm text-slate-500"  >
          {isArabic
            ? "الملاذ الأكاديمي"
            : "Academic Platform"}
         </p>

       
        <button
         onClick={() =>
         changeLanguage(
          language === "ar"
      ? "en"
      : "ar"
  )
}
          className="mt-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-100"
        >
          {isArabic ? "English" : "العربية"}
        </button>
      </div>

      {/* Menu */}

      <nav >
        {sidebarItems.map((item) => {
          const Icon = item.icon

          const isActive =
            active === item.id

          return (
            <button
              key={item.id}
              onClick={() => {

      setActive(item.id)
        navigate(`/${item.id}`)

  
}}
              className={`flex w-full items-center justify-between rounded-xl
                 px-4 py-3 text-sm font-smole transition-all 
                 ${
                isActive
                  ? "border-r-4 border-cyan-500 bg-cyan-50 text-cyan-600"
                  : "text-slate-600 hover:bg-slate-100"
                  }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />

                <span>
                  {t(item.id)}
                </span>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}