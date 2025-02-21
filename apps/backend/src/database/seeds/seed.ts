import { seedUsers } from "@/database/seeds/users-seed";

async function seedData() {
  await seedUsers();
}

void seedData();
