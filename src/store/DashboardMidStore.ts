// import { create } from "zustand";

// interface DashboardStore {
//   selectedClassroom: string | null;

//   setSelectedClassroom: (id: string) => void;
// }

// export const useDashboardStore = create<DashboardStore>((set) => ({
//   selectedClassroom: null,

//   setSelectedClassroom: (id) =>
//     set({
//       selectedClassroom: id,
//     }),
// }));
import { create } from "zustand";

interface DashboardStore {
  showAnalytics: boolean;

  toggleAnalytics: () => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  showAnalytics: false,

  toggleAnalytics: () =>
    set((state) => ({
      showAnalytics: !state.showAnalytics,
    })),
}));