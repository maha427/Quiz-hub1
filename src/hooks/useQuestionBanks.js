// import { useQuery } from "@tanstack/react-query";

// import { fetchQuestionBanks } from "@/services/QuestionBanksApi";

// export const useQuestionBanks = () => {
//   return useQuery({
//     queryKey: ["questionBanks"],

//     queryFn: fetchQuestionBanks,
//   });
// };



import { useQuery } from "@tanstack/react-query";

import {
  fetchQuestionBanks,
} from "@/services/QuestionBanksApi";

export const useQuestionBanks = () => {
  return useQuery({
    queryKey: ["question-banks"],

    queryFn: fetchQuestionBanks,
  });
};

