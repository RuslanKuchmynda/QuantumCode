import { db } from "@/database/db";
import { userStatsSchema } from "@schemas/user-stats.schema";

const seedUsersData: Array<{
  userId: number;
  accuracy: number;
  ranking: number;
  difficultyDistribution: { easy: number; medium: number; hard: number };
  streak: number;
  solvedProblem: number;
}> = [
  {
    userId: 1,
    accuracy: 85,
    ranking: 1,
    difficultyDistribution: { easy: 25, medium: 10, hard: 4 },
    streak: 7,
    solvedProblem: 39,
  },
  {
    userId: 2,
    accuracy: 60,
    ranking: 2,
    difficultyDistribution: { easy: 17, medium: 3, hard: 1 },
    streak: 3,
    solvedProblem: 21,
  },
];

export async function seedUserStats() {
  await db.insert(userStatsSchema).values(seedUsersData);

  console.log("User Stats seeded!");
}
