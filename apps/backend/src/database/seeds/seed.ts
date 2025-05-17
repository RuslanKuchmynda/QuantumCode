import { db } from "@/database/db";
import { achievementsSchema, activityHistorySchema, problemStatsSchema, submissionsSchema, userAchievementsSchema, userSchema } from "@/database/schemas";
import { problemsSchema, problemDetailsSchema } from "@/database/schemas";
import { seedUsers } from "@/database/seeds/users-seed";
import { seedProblems } from "@/database/seeds/problems-seed";
import { userStatsSchema } from "@schemas/user-stats.schema";
import { seedUserStats } from "@/database/seeds/user-stats-seed";
import { sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";
import { seedAchievements } from "@/database/seeds/achievements-seed";

async function seedData() {
  await clearDatabase();

  await seedUsers();
  await seedUserStats();
  await seedProblems();
  await seedAchievements();

  console.log("Data seeded successfully!");
}
void seedData();

async function clearDatabase() {
  console.log("Clearing existing data...");

  await clearTable(userSchema);
  await clearTable(userStatsSchema);
  await clearTable(problemsSchema);
  await clearTable(problemDetailsSchema);
  await clearTable(problemStatsSchema);
  await clearTable(userAchievementsSchema);
  await clearTable(activityHistorySchema);
  await clearTable(achievementsSchema);
  await clearTable(submissionsSchema);

  console.log("Tables cleared and IDs reset!");
}

async function clearTable(schema: PgTable) {
  await db.execute(sql`TRUNCATE TABLE ${schema} RESTART IDENTITY CASCADE;`);
}
