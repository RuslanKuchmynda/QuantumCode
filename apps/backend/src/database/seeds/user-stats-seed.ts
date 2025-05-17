import { usersIds } from "@/constants/users-ids";
import { userStatsIds } from "@/constants/users-ids";
import { db } from "@/database/db";
import { userStatsSchema } from "@schemas/user-stats.schema";

const seedUserStatsData = [
  {
    id: userStatsIds.admin,
    userId: usersIds.admin,
    problemsSolved: 76,
    ranking: 1,
    successRate: 96,
    currentStreak: 14,
    bestStreak: 78,
    globalRanking: 1,
    updatedAt: new Date(),
  },
  {
    id: userStatsIds.dev,
    userId: usersIds.dev,
    problemsSolved: 43,
    ranking: 2,
    successRate: 75,
    currentStreak: 4,
    bestStreak: 12,
    globalRanking: 2,
    updatedAt: new Date(),
  },
];

export async function seedUserStats() {
  await db.insert(userStatsSchema).values(seedUserStatsData);

  console.log("User Stats seeded!");
}
