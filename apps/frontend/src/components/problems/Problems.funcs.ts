import { apiGet } from "@/services/api";
import { apiRoutes } from "@/constants/routes";
import { Problem, ProblemList } from "@shared/interfaces/problem";

export const getProblemById = async (id: number) => {
  return await apiGet<Problem>(`${apiRoutes.problems}/${id}`);
};

export const getProblems = async () => {
  return await apiGet<ProblemList[]>(apiRoutes.problems);
};
