import { db } from "@/database/db";
import { users } from "@/database/schemas";
import { hashPassword } from "@/common/bcrypt.fucns";

const seedUsersData = [
  {
    email: "john.d@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "Admin!",
  },
  {
    email: "jane.d@example.com",
    firstName: "Jane",
    lastName: "Doe",
    password: "User!",
  },
];

export async function seedUsers() {
  const userData = await Promise.all(
    seedUsersData.map(async (user) => ({
      ...user,
      password: await hashPassword(user.password),
    })),
  );

  await db.insert(users).values(userData);

  console.log("Users seeded!");
}
