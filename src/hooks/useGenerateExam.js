import { useQuery } from "@tanstack/react-query";

import { generateExam } from "../services/Exam-api.js";

export const useGenerateExam = () => {
  return useQuery({
    queryKey: ["generate-exam"],

    queryFn: generateExam,

    enabled: false,
  });
};