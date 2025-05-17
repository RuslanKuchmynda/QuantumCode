import { db } from "@/database/db";
import { hashPassword } from "@/common/bcrypt.fucns";
import { userSchema } from "@/database/schemas";
import { usersIds } from "@/constants/users-ids";

const seedUsersData = [
  {
    id: usersIds.admin,
    email: "admin@example.com",
    firstName: "Admin",
    lastName: "Admin",
    password: "Admin1!",
    role: "admin" as const,
    theme: "dark" as const,
    language: "en" as const,
  },
  {
    id: usersIds.dev,
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "John1!",
    role: "dev" as const,
    theme: "light" as const,
    language: "en" as const,
  },
];

export async function seedUsers() {
  const userData = await Promise.all(
    seedUsersData.map(async (user) => ({
      ...user,
      password: await hashPassword(user.password),
    }))
  );

  await db.insert(userSchema).values(userData);

  console.log("Users seeded!");
}
