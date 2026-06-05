




import { create } from "zustand";

export const useCreateQuestionBankStore = create((set) => ({

  // ===== FIELDS =====
  title: "",
  subject: "",
  description: "",
  visibility: "WORKSPACE",

  // ===== ACTIONS =====
  setTitle: (title) => set({ title }),

  setSubject: (subject) => set({ subject }),

  setDescription: (description) => set({ description }),

  // 🔥 مهم: بدون تحويلات
  setPrivacy: (visibility) => set({ visibility }),

  // ===== RESET =====
  reset: () =>
    set({
      title: "",
      subject: "",
      description: "",
      visibility: "WORKSPACE",
    }),
}));




