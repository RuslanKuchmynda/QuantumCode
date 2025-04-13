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
  const response = await apiGet<Problem[]>(apiRoutes.problems);
  return response.data;
};
