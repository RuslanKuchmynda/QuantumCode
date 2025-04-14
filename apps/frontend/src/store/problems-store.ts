import { create } from "zustand";
import { WithId } from "@shared/interfaces/withId";
import { Problem } from "@shared/interfaces/problem";

interface ProblemsState {
  problems: WithId<Problem[]> | null;
  setProblems: (data: WithId<Problem[]>) => void;
}

export const useProblemsStore = create<ProblemsState>((set) => ({
  problems: null,
  setProblems: (data) => {
    set({ problems: data });
  },
}));
