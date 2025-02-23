import { create } from "zustand";
import { Problem } from "@/components/problems/Problems.funcs";

interface ProblemsState {
  problems: Problem[] | null;
  setProblems: (data: Problem[]) => void;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
  problems: null,
  setProblems: (data) => {
    set({ problems: data });
  },
}));
