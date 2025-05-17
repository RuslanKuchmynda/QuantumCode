import { integer, text, timestamp } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";
import { userSchema } from "@schemas/users.schema";

export const userStatsSchema = pgTable(schemas.userStats, {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userSchema.id, { onDelete: "cascade" }),
  problemsSolved: integer("problems_solved").notNull().default(0),
  ranking: integer("ranking").default(0),
  successRate: integer("success_rate").notNull().default(0),
  currentStreak: integer("current_streak").notNull().default(0),
  bestStreak: integer("best_streak").notNull().default(0),
  globalRanking: integer("global_ranking"),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
