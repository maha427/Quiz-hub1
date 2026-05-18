import { useQuery }
from "@tanstack/react-query"

import { searchExams }
from "../services/Search-api"

export const useSearch = (query) => {

  return useQuery({

    queryKey: ["search", query],

    queryFn: () => searchExams(query),

    enabled: query.length > 0,

  })
}