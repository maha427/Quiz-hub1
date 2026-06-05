import { useQuery } from "@tanstack/react-query";

import { getRecentExams } from "../services/Exam-api.js";

export const useRecentExams = () => {
  return useQuery({
    queryKey: ["recent-exams"],

    queryFn: getRecentExams,
  });
};