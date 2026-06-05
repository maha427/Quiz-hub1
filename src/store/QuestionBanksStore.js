// import { create } from "zustand";

// export const useQuestionBanksStore = create((set) => ({
//   activeTab: "myBanks",

//   setActiveTab: (tab) =>
//     set({ activeTab: tab }),
// }));



import { create } from "zustand";

export const useQuestionBanksStore = create((set) => ({
  activeTab: "myBanks",

  viewMode: "grid",

  selectedSubject: "all",

  sortBy: "latest",

  search: "",

  currentPage: 1,

  setActiveTab: (tab) =>
    set({ activeTab: tab }),

  setViewMode: (mode) =>
    set({ viewMode: mode }),

  setSelectedSubject: (subject) =>
    set({ selectedSubject: subject }),

  setSortBy: (sort) =>
    set({ sortBy: sort }),

  setSearch: (value) =>
    set({ search: value }),

  setCurrentPage: (page) =>
    set({ currentPage: page }),
}));