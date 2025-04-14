import { apiGet } from "@/services/api";
import { apiRoutes } from "@/constants/routes";
import { WithId } from "@shared/interfaces/withId";
import { Problem } from "@shared/interfaces/problem";

export const getProblems = async () => {
  return await apiGet<WithId<Problem[]>>(apiRoutes.problems);
};
