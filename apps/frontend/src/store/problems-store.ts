import { create } from "zustand";
import { Problem } from "@shared/interfaces/problem";

interface ProblemsState {
  problems: Problem[] | null;
  problemDetails: Record<string, Problem>;
  setProblems: (data: Problem[]) => void;
  setProblemDetails: (id: string, details: Problem) => void;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
  problems: null,
  problemDetails: {},
  setProblems: (data) => set({ problems: data }),
  setProblemDetails: (id, details) =>
    set((state) => ({
      problemDetails: { ...state.problemDetails, [id]: details },
    })),
}));
