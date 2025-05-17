import { integer } from "drizzle-orm/pg-core/columns";

import { pgTable } from "drizzle-orm/pg-core/table";
import { text, timestamp } from "drizzle-orm/pg-core/columns";
import { userSchema } from "./users.schema";
import { schemas } from "../schema-constants";
import { problemsSchema } from "./problems.schema";

export const submissionsSchema = pgTable(schemas.submissions, {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userSchema.id),
  problemId: text("problem_id")
    .notNull()
    .references(() => problemsSchema.id),
  status: text("status").notNull(),
  code: text("code").notNull(),
  language: text("language").notNull(),
  runtime: integer("runtime"),
  memory: integer("memory"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
