import { db } from "@/database/db";
import { userSchema, userStatsSchema } from "@/database/schemas";
import { Injectable, NotFoundException } from "@nestjs/common";
import { eq } from "drizzle-orm";

@Injectable()
export class UserService {
  async getUser(id: string) {
    const [user] = await db
      .select()
      .from(userSchema)
      .where(eq(userSchema.id, id))
      .limit(1);

    if (!user) {
      throw new NotFoundException("User not found");
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async getUserStats(id: string) {
    const [userStats] = await db
      .select()
      .from(userStatsSchema)
      .where(eq(userStatsSchema.userId, id))
      .limit(1);

    return userStats;
  }
}
