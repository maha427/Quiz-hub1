import { useQuery } from "@tanstack/react-query";

import {
  getStudentsStats,
  getExamsStats,
  getQuestionsStats,
} from "../services/Dashboard-service";

export function useStudentsStats() {
  return useQuery({
    queryKey: ["students-stats"],

    queryFn: getStudentsStats,
  });
}

export function useExamsStats() {
  return useQuery({
    queryKey: ["exams-stats"],

    queryFn: getExamsStats,
  });
}

export function useQuestionsStats() {
  return useQuery({
    queryKey: ["questions-stats"],

    queryFn: getQuestionsStats,
  });
}