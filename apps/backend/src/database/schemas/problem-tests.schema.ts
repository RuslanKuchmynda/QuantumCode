import { jsonb, text, boolean, integer } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "../schema-constants";
import { problemsSchema } from "./problems.schema";

export const problemTestsSchema = pgTable(schemas.problemTests, {
  id: text("id").primaryKey(),
  problemId: text("problem_id")
    .notNull()
    .references(() => problemsSchema.id),
  input: jsonb("input").notNull(),
  expectedOutput: jsonb("expected_output").notNull(),
  isHidden: boolean("is_hidden").notNull().default(false),
  order: integer("order").notNull(),
});
