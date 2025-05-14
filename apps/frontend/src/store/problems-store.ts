import { create } from "zustand";
import { ProblemList, Problem } from "@shared/interfaces/problem";

interface ProblemsState {
  problems: ProblemList[] | null;
  problemDetails: Record<number, Problem>;
  setProblems: (data: ProblemList[]) => void;
  setProblemDetails: (id: number, details: Problem) => void;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
  problems: null,
  problemDetails: {},
  setProblems: (data) => set({ problems: data }),
  setProblemDetails: (id, details) => 
    set((state) => ({
      problemDetails: { ...state.problemDetails, [id]: details }
    })),
}));
