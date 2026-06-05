// import { Card } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";

// import { useTranslation } from "react-i18next";

// import { useLanguageStore } from "../../store/LanguageStore"

// export default function LowerSection() {
//      const { t } = useTranslation("dashboard");
  
//     const { language} = useLanguageStore()
//     const isArabic = language === "ar"
 

//   return (
//     <div
//       className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10"
//       dir={isArabic ? "rtl" : "ltr"}
//     >
     
//       {/* AI Card */}

//       <div className="lg:col-span-2 text-start rounded-2xl bg-gradient-to-l from-cyan-500 to-teal-400 p-10 text-white flex flex-col justify-center">
//         <h1 className="!text-sm font-bold leading-relaxed  ">
//           {t("ai.title")}
//         </h1>

//         <p className="mt-5 text-white/90 leading-8">
//           {t("ai.description")}
//         </p>

//         <Button className="mt-8 bg-white text-black hover:bg-slate-100 w-fit">
//           ✨ {t("ai.button")}
//         </Button>
//       </div>

//        {/* Analytics Card */}

//       <Card className="p-6 rounded-3xl border shadow-sm flex flex-col items-center justify-between">
//         <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
//           📊
//         </div>

//         <div className="text-center mt-4">
//           <h2 className="font-bold !text-sm !text-black">
//             {t("analytics.title")}
//           </h2>

//           <p className="text-slate-500 mt-2">
//             {t("analytics.description")}
//           </p>
//         </div>

//         <Button variant="link" className="mt-4 ">
//           {t("analytics.button")}
//         </Button>
//       </Card>

//     </div>
//   );
// }

import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

import { useTranslation } from "react-i18next";

import { useLanguageStore } from "../../store/LanguageStore";

import { useDashboardAnalytics } from "../../hooks/useDashboardAnalytics";

import { useDashboardStore } from "../../store/DashboardStore";
import { useGenerateExam } from "../../hooks/useGenerateExam";
import { useExamStore } from "../../store/ExamStore";
import { useNavigate } from "react-router-dom";
export default function LowerSection() {

  const navigate = useNavigate();
  const { t } = useTranslation("dashboard");

  const { language } = useLanguageStore();
  

  const isArabic = language === "ar";

  const { data, isLoading, refetch } = useDashboardAnalytics();
    
  const { showAnalytics, toggleAnalytics } = useDashboardStore();

  

const { setExam } = useExamStore();

  const handleAnalytics = async () => {
  if (!showAnalytics) {
    await refetch();
  }

  toggleAnalytics();
};

const { refetch: refetchExam } = useGenerateExam();
const handleGenerateExam = async () => {
  const response = await refetchExam();

  setExam(response.data);

  navigate("/exam");
};


  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 pt-5   "
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* AI Card */}

      <div className="lg:col-span-2 text-start rounded-2xl bg-gradient-to-l from-cyan-500 to-teal-400 p-10 text-white flex flex-col justify-center">
        <h1 className="!text-sm font-bold leading-relaxed">
          {t("ai.title")}
        </h1>

        <p className="mt-5 text-white/90 leading-8">
          {t("ai.description")}
        </p>

        <Button
  className="mt-8 bg-white text-black hover:bg-slate-100 w-fit"
  onClick={handleGenerateExam}
>
  ✨ {t("ai.button")}
</Button>



      </div>

      {/* Analytics Card */}

      <Card className="p-6 rounded-3xl border shadow-sm flex flex-col items-center justify-between">
        <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-2xl">
          📊
        </div>

        <div className="text-center mt-4">
          <h2 className="font-bold !text-sm !text-black">
            {t("analytics.title")}
          </h2>

          <p className="text-slate-500 mt-2">
            {t("analytics.description")}
          </p>
        </div>

        <Button variant="link" className="mt-4" onClick={handleAnalytics}>
          {showAnalytics
            ? t("analytics.hide")
            : t("analytics.button")}
        </Button>

        {showAnalytics && (
          <div className="mt-5 w-full space-y-3 text-center">
            {isLoading ? (
              <p>{t("analytics.loading")}</p>
            ) : (
              <>
                <div className="rounded-xl bg-cyan-50 p-4">
                  <p className="text-sm text-slate-500">
                    {t("analytics.students")}
                  </p>

                  <h1 className="text-2xl font-bold text-cyan-600">
                    {data?.students}
                  </h1>
                </div>

                <div className="rounded-xl bg-green-50 p-4">
                  <p className="text-sm text-slate-500">
                    {t("analytics.successRate")}
                  </p>

                  <h1 className="text-2xl font-bold text-green-600">
                    %{data?.successRate}
                  </h1>
                </div>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
