import { db } from "@/database/db"; // імпорт бази даних
import { userSchema } from "@/database/schemas";
import { problemSchema } from "@/database/schemas";
import { seedUsers } from "@/database/seeds/users-seed";
import { seedProblems } from "@/database/seeds/problems-seed";

async function clearTables() {
  console.log("Clearing existing data...");

  await db.delete(userSchema);
  await db.delete(problemSchema);

  console.log("Tables cleared!");
}

async function seedData() {
  await clearTables();

  await seedUsers();
  await seedProblems();

  console.log("Data seeded successfully!");
}

void seedData();
