import {useMutation,useQueryClient,} from "@tanstack/react-query";

import {createQuestionBank,} from "@/services/QuestionBanksApi";

export const useCreateQuestionBank =
  () => {

     const queryClient =
      useQueryClient();

     return useMutation({

      mutationFn:
        createQuestionBank,

      // 🔥 بعد الإنشاء
      onSuccess: () => {

        // 🔥 إعادة تحميل البنوك
        queryClient.invalidateQueries({
          queryKey: ["question-banks"],
        });
      },
    });
  };