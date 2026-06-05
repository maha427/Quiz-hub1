import { create } from "zustand";

export const useDashboardStore =
  create((set) => ({
    selectedCard: null,

    setSelectedCard: (card) =>
      set({
        selectedCard: card,
      }),
  }));