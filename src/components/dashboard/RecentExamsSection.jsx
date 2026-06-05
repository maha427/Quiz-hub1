import { Card } from "../../components/ui/card";

import { Button } from "../../components/ui/button";

import { useRecentExams } from "../../hooks/useRecentExams";

import { useTranslation } from "react-i18next";

import { useLanguageStore } from "../../store/LanguageStore";

export default function RecentExamsSection() {
  const { t } = useTranslation("dashboard");

  const { language } = useLanguageStore();

  const isArabic = language === "ar";

  const { data, isLoading } = useRecentExams();

  return (
    <div
      className="mt-10"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-between ">
        <h1 className="!text-sm font-bold  !text-black">
          {t("recentExams.title")}
        </h1>

        <Button variant="link">
          {t("recentExams.viewAll")}
        </Button>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <p>{t("recentExams.loading")}</p>
        ) : (
          data?.map((exam) => (
            <Card
              key={exam.id}
              className="px-2 py-2 rounded-xl border bg-white flex items-start h-[70px] overflow-hidden "
            >
              {/* Left */}

              <div className="flex items-start gap-2 flex-1 ">
                <div className="w-7 h-7 rounded-lg bg-cyan-50 flex items-center justify-center text-xs shrink-0">
                  🧪
                </div>

                <div>
                  <h2 className="font-semibold !text-sm !text-black leading-4">
                    {exam.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 ">
                    <span>{exam.date}</span>

                    <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs">
                      {exam.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}

              <div className={` min-w-[90px]
                             ${isArabic ?  "text-left mr-auto": "text-right ml-auto" }
                              -translate-y-15
                             `}>
               
                <h3 className="font-bold ">
               {exam.students  ? `${exam.students} 
               ${t("recentExams.student")}` : `-- ${t("recentExams.student")}`}
               </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {exam.successRate}
                </p>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}