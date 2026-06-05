import {LayoutGrid,List,} from "lucide-react";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { useQuestionBanksStore } from "@/store/QuestionBanksStore";

import { useTranslation } from "react-i18next";

import { useQuestionBanks } from "@/hooks/useQuestionBanks";

export default function QuestionBanksControls() {
  const { data } = useQuestionBanks();

  const subjects = [
  ...new Set(
    (data || []).map((bank) => bank.subject)
  ),
];


  const { t } = useTranslation("questionBank");

  const { viewMode, setViewMode,selectedSubject, setSelectedSubject, sortBy, setSortBy,} = useQuestionBanksStore();

  return (
    <div className="flex flex-col gap-5 mt-8 bg-slate-50 rounded-2xl p-2 border border-slate-200 ">
      
      {/* Controls */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        {/* View */}

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("list")}
            className={
              viewMode === "list"
                ? "bg-cyan-50 text-cyan-600"
                : ""
            }
          >
            <List className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={
              viewMode === "grid"
                ? "bg-cyan-50 text-cyan-600"
                : ""
            }
          >
            <LayoutGrid className="w-5 h-5" />
          </Button>
        </div>

        {/* Filters */}

        <div className="flex flex-col sm:flex-row gap-3">
          
          <Select
            value={selectedSubject}
            onValueChange={setSelectedSubject}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                {t("subjects.all")}
              </SelectItem>

             {subjects.map((subject) => (
  <SelectItem
    key={subject}
    value={subject}
  >
    {subject}
  </SelectItem>
))}
            </SelectContent>
          </Select>

          <Select
            value={sortBy}
            onValueChange={setSortBy}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="latest">
                {t("sort.latest")}
              </SelectItem>

              <SelectItem value="oldest">
                {t("sort.oldest")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}