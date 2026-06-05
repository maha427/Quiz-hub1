import { Card } from "@/components/ui/card";

import { useTranslation } from "react-i18next";

export default function QuestionBanksStats({
  totalBanks,
}) {
  const { t } = useTranslation("questionBank");

  return (
    <Card className="mt-6 rounded-2xl  bg-white h-20  text-start  pr-10  w-full">
      
  
             <p className="text-slate-400" >
            {t("stats.totalBanks")}
              </p>  

    <h1 className="-translate-y-8  pr-4  !text-black  !text-xl">
    {totalBanks}
  </h1>

  

  

    </Card>
  );
}