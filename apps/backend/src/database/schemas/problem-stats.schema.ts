import { integer, text, timestamp } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";
import { problemsSchema } from "@/database/schemas/problems.schema";

export const problemStatsSchema = pgTable(schemas.problemStats, {
  id: text("id").primaryKey(),
  problemId: text("problem_id")
    .notNull()
    .references(() => problemsSchema.id),
  totalSubmissions: integer("total_submissions").notNull().default(0),
  acceptedSubmissions: integer("accepted_submissions").notNull().default(0),
  successRate: integer("success_rate").notNull().default(0),
  averageRuntime: integer("average_runtime").notNull().default(0),
  averageMemory: integer("average_memory").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
