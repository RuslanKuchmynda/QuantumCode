import { apiGet } from "@/services/api";
import { apiRoutes } from "@/constants/routes";
import { Problem } from "@shared/interfaces/problem";

export const getProblemById = async (id: string) => {
  return await apiGet<{ problem: Problem }>(`${apiRoutes.problems}/${id}`);
};

export const getProblems = async () => {
  return await apiGet<{ problems: Problem[] }>(apiRoutes.problems);
};
