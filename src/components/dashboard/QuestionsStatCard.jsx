import { useTranslation } from "react-i18next";

import { StatCard } from "./StatCard";

import { useQuestionsStats } from "../../hooks/useDashboard";
import { COLORS } from "@/Constant/Colors";

export function QuestionsStatCard() {
  const { t } = useTranslation("dashboard");

  const {
    data,
    isLoading,
  } = useQuestionsStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StatCard
    
      title={t("questions")}
      value={data?.length || 0}
      subtitle={t("questionsSubtitle")}
      progress={75}
      color="bg-teal-500"
      textColor={COLORS.primary}
      showProgress={false}
    />
  );
}