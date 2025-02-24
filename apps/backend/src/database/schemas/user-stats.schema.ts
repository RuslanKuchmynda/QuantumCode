import { integer, jsonb, serial } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";
import { userSchema } from "@schemas/users.schema";

export const userStatsSchema = pgTable(schemas.userStats, {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userSchema.id, { onDelete: "cascade" }),
  accuracy: integer("accuracy").default(0),
  ranking: integer("ranking").default(0),
  difficultyDistribution: jsonb("difficulty_distribution")
    .$type<{ easy: number; medium: number; hard: number }>()
    .default({ easy: 0, medium: 0, hard: 0 }),
  streak: integer("streak").default(0),
  solvedProblem: integer("solved_problem").default(0),
});
