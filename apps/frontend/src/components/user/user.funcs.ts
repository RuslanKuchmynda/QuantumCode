import { apiRoutes } from "@/constants/routes";
import { apiGet } from "@/services/api";
import { UserInfo, UserStats } from "@shared/interfaces/user";

export const getUser = async (): Promise<UserInfo> => {
  return await apiGet<UserInfo>(apiRoutes.user);
};

export const getUserStats = async (): Promise<UserStats> => {
  return await apiGet<UserStats>(apiRoutes.userStats);
};
