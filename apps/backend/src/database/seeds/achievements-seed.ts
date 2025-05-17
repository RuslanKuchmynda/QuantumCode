import { db } from "@/database/db";
import { achievementsSchema } from "@/database/schemas/achievements.schema";
import { achievementsIds } from "@/constants/achievements-ids";
import { v4 as uuidv4 } from "uuid";

const seedAchievementsData = [
  {
    id: achievementsIds.firstProblem,
    name: "First Problem Solved",
    description: "Complete your first coding problem",
    icon: "🎯",
    points: 10,
  },
  {
    id: achievementsIds.perfectScore,
    name: "Perfect Score",
    description: "Solve a problem with optimal solution",
    icon: "⭐",
    points: 50,
  },
  {
    id: achievementsIds.speedDemon,
    name: "Speed Demon",
    description: "Solve a problem in under 5 minutes",
    icon: "⚡",
    points: 30,
  },
  {
    id: achievementsIds.consistentCoder,
    name: "Consistent Coder",
    description: "Solve problems for 7 days straight",
    icon: "��",
    points: 40,
  },
  {
    id: achievementsIds.algorithmMaster,
    name: "Algorithm Master",
    description: "Solve 10 algorithm problems",
    icon: "🧮",
    points: 100,
  },
  {
    id: uuidv4(),
    name: "Data Structure Expert",
    description: "Solve 10 data structure problems",
    icon: "📊",
    points: 100,
  },
  {
    id: achievementsIds.communityHelper,
    name: "Community Helper",
    description: "Help 5 other users with their solutions",
    icon: "🤝",
    points: 75,
  },
  {
    id: achievementsIds.nightOwl,
    name: "Night Owl",
    description: "Solve a problem after midnight",
    icon: "🦉",
    points: 25,
  },
  {
    id: achievementsIds.earlyBird,
    name: "Early Bird",
    description: "Solve a problem before 6 AM",
    icon: "��",
    points: 25,
  },
  {
    id: achievementsIds.problemSolverPro,
    name: "Problem Solver Pro",
    description: "Solve 50 problems in total",
    icon: "🏆",
    points: 200,
  },
];

export async function seedAchievements() {
  try {
    await db.insert(achievementsSchema).values(seedAchievementsData);
    console.log("Achievements seeded successfully!");
  } catch (error) {
    console.error("Error seeding achievements:", error);
    throw error;
  }
}
