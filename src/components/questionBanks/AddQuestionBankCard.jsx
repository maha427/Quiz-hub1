

import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AddQuestionBankCard({ setOpen }) {

  const { t } = useTranslation("questionBank");

  return (
    <Card
      onClick={() => setOpen(true)}
      className="
        rounded-2xl
        border-2
        border-dashed
        flex
        flex-col
        items-center
        justify-center
        min-h-[260px]
        cursor-pointer
        hover:border-cyan-400
        hover:bg-cyan-50
        transition-all
      "
    >

      <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center">
        <Plus className="w-7 h-7 text-cyan-600" />
      </div>

      <h2 className="mt-3 !text-slate-500 leading-7 text-sm !font-semibold">
        {t("add.title")}
      </h2>

      <p className="text-slate-500 text-sm mt-2">
        {t("add.desc")}
      </p>

    </Card>
  );
}
