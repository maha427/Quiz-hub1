
import { StudentsStatCard } from "./StudentsStatCard";

import { ExamsStatCard } from "./ExamsStatCard";
import { QuestionsStatCard } from "./QuestionsStatCard";

import { useLanguageStore } from "@/store/LanguageStore"

export function StatsGrid() {
 
const { language} = useLanguageStore()
const isArabic = language === "ar"
  return (
    <div 
    dir={isArabic ? "rtl" : "ltr"}>
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-7 ">
        <QuestionsStatCard />
        <StudentsStatCard />
         <ExamsStatCard />
         
    </section>
    </div>
  );
}