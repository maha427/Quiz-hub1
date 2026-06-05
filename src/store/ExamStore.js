// import { create } from "zustand";

// export const useExamStore = create((set) => ({
//   showExam: false,

//   toggleExam: () =>
//     set((state) => ({
//       showExam: !state.showExam,
//     })),
// }));

import { create } from "zustand";

export const useExamStore = create((set) => ({
  exam: null,

  setExam: (examData) =>
    set({
      exam: examData,
    }),
}));