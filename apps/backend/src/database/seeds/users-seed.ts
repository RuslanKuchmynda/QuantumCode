import { db } from "@/database/db";
import { hashPassword } from "@/common/bcrypt.fucns";
import { userSchema } from "@/database/schemas";

const seedUsersData: Array<{
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: "admin" | "dev";
}> = [
  {
    email: "john.d@example.com",
    firstName: "John",
    lastName: "Doe",
    password: "Admin!",
    role: "admin",
  },
  {
    email: "jane.d@example.com",
    firstName: "Jane",
    lastName: "Doe",
    password: "User!",
    role: "dev",
  },
];

export async function seedUsers() {
  const userData = await Promise.all(
    seedUsersData.map(async (user) => ({
      ...user,
      password: await hashPassword(user.password),
    })),
  );

  await db.insert(userSchema).values(userData);

  console.log("Users seeded!");
}
