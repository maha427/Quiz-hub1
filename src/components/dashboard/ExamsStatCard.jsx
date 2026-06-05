import { useTranslation } from "react-i18next";

import { StatCard } from "./StatCard";

import { useExamsStats } from "../../hooks/useDashboard";

export function ExamsStatCard() {
  const { t } = useTranslation("dashboard");

  const {
    data,
    isLoading,
  } = useExamsStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StatCard
      title={t("exams")}
      value={data?.length || 0}
      subtitle={t("examsSubtitle")}
      progress={60}
      color="bg-violet-500"
      textColor="orange"
      showProgress={false}
    />
  );
}