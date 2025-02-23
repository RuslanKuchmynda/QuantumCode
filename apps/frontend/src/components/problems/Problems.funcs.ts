import { apiGet } from "@/services/api";
export interface Problem {
  id: number;
  title: string;
  status: string;
  difficulty: string;
  submission: string;
  successRate: string;
  type: string;
}
export const getProblems = async () => {
  const response: Problem[] = await apiGet("/problems");
  return response;
};
