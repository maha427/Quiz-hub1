import { useQuery } from "@tanstack/react-query";
import { getDashboardAnalytics } from "../services/Dashboard-service.js";

export const useDashboardAnalytics = () => {
  return useQuery({
    queryKey: ["dashboard-analytics"],

    queryFn: getDashboardAnalytics,
     enabled: false,
  });
};