import { serial, text } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";

export const problemSchema = pgTable("problems", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  status: text("status").notNull(),
  difficulty: text("difficulty").notNull(),
  submission: text("submission").notNull(),
  successRate: text("successRate").notNull(),
  type: text("type").notNull(),
});
