import { useQuestionBanksStore } from "@/store/QuestionBanksStore";

import { useTranslation } from "react-i18next";

export default function QuestionBanksTabs() {
  

  const { activeTab, setActiveTab } =useQuestionBanksStore();
  
    const { t } = useTranslation("questionBank");

  return (
    <div className="flex items-center gap-6 border-b pb-3 ">
      
      <button
        onClick={() => setActiveTab("myBanks")}
        className={`
          relative pb-2 text-sm font-semibold transition-all
          
          ${
            activeTab === "myBanks"
              ? "text-cyan-600"
              : "text-slate-400"
          }
        `}
      >
        {t("tabs.myBanks")}

        {activeTab === "myBanks" && (
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 rounded-full" />
        )}
      </button>

      <button
        onClick={() => setActiveTab("community")}
        className={`
          relative pb-2 text-sm font-semibold transition-all
          
          ${
            activeTab === "community"
              ? "text-cyan-600"
              : "text-slate-400"
          }
        `}
      >
        {t("tabs.community")}

        {activeTab === "community" && (
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-500 rounded-full" />
        )}
      </button>
    </div>
  );
}