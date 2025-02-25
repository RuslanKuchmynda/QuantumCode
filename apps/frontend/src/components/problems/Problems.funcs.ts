import { apiGet } from "@/services/api";
import { apiRoutes } from "@/constants/routes";

export interface Problem {
  id: number;
  title: string;
  description: string;
  example: string;
  status: string;
  difficulty: "Easy" | "Medium" | "Hard";
  submission: string;
  successRate: string;
  type: string;
}
export const getProblems = async () => {
  return await apiGet<Problem[]>(apiRoutes.problems);
};
