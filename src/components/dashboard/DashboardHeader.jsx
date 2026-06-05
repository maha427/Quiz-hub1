import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/store/LanguageStore" 

export function DashboardHeader() {
  const { t } = useTranslation("dashboard");

const { language} = useLanguageStore()
const isArabic = language === "ar"
  return (
    <div 
    dir={isArabic ? "rtl" : "ltr"}
    className="  text-start leading-tight ">
      <h1 className=" !m-2 !text-2xl !text-black text-foreground leading-tight  " >
        {t("welcome")}
      </h1>

      <p className=" !m-2 text-sm text-muted-foreground leading-tight">
        {t("subtitle")}
      </p>
    </div>
  );
}