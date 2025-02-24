import { serial, text } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";

export const problemSchema = pgTable(schemas.problem, {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  status: text("status").notNull(),
  difficulty: text("difficulty").notNull(),
  submission: text("submission").notNull(),
  successRate: text("successRate").notNull(),
  type: text("type").notNull(),
  example: text("example").notNull(),
  description: text("description").notNull(),
});
