import { useTranslation } from "react-i18next";

import { StatCard } from "./StatCard";

import { useStudentsStats } from "../../hooks/useDashboard";

export function StudentsStatCard() {
  const { t } = useTranslation("dashboard");

  const {
    data,
    isLoading,
  } = useStudentsStats();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StatCard
      title={t("students")}
      value={data?.length || 0}
      subtitle={t("studentsSubtitle")}
      progress={88}
      color="bg-cyan-500"
      textColor="black"
      showProgress={true}

    />
  );
}