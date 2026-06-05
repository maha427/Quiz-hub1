import { useQuery }
from "@tanstack/react-query";

import {
  fetchSubjects,
} from "@/services/SubjectsApi";

export const useSubjects = () => {

  return useQuery({

    queryKey: ["subjects"],

    queryFn: fetchSubjects,
  });
};