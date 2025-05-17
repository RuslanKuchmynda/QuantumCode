import { pgTable } from "drizzle-orm/pg-core/table";
import { text, timestamp } from "drizzle-orm/pg-core/columns";
import { achievementsSchema } from "./achievements.schema";
import { userSchema } from "./users.schema";
import { schemas } from "../schema-constants";

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
