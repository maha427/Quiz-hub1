import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import LowerSection from "../components/dashboard/LowerSection"
import RecentExamsSection from "../components/dashboard/RecentExamsSection";
import { useLanguageStore } from "@/store/LanguageStore" 

export default function DashboardPage() {

 
const { language } = useLanguageStore();
  

  const isArabic = language === "ar";

  return (
    <main className=" -translate-y-17 "
                >
      
       <div
  className="min-h-screen bg-white pe-6"
  dir={isArabic ? "rtl" : "ltr"}
>
  <DashboardHeader />
  <StatsGrid />
  <LowerSection />
  <RecentExamsSection />
</div>
     </main>
  );
}