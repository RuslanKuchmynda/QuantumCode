import { pgTable } from "drizzle-orm/pg-core/table";
import { text, timestamp } from "drizzle-orm/pg-core/columns";
import { achievementsSchema } from "@/database/schemas/achievements.schema";
import { userSchema } from "@/database/schemas/users.schema";
import { schemas } from "@/database/schema-constants";

export const userAchievementsSchema = pgTable(schemas.userAchievements, {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userSchema.id),
  achievementId: text("achievement_id")
    .notNull()
    .references(() => achievementsSchema.id),
  unlockedAt: timestamp("unlocked_at").notNull().defaultNow(),
});
