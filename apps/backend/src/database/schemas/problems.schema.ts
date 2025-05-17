import {
  text,
  jsonb,
  timestamp,
  integer,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";

export const problemCategoryEnum = pgEnum("problem_category", [
  "algorithms",
  "data-structures",
  "system-design",
  "database",
  "concurrency",
  "networking",
  "security",
  "frontend",
  "backend",
  "mobile",
  "devops",
  "testing",
]);

export const problemDifficultyEnum = pgEnum("problem_difficulty", [
  "Easy",
  "Medium",
  "Hard",
]);

export const problemStatusEnum = pgEnum("problem_status", [
  "draft",
  "published",
  "archived",
  "review",
]);

export const problemsSchema = pgTable(schemas.problem, {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  difficulty: problemDifficultyEnum("difficulty").notNull(),
  status: problemStatusEnum("status").notNull(),
  category: problemCategoryEnum("category").notNull(),
  tags: jsonb("tags").notNull().default([]),
  points: integer("points").notNull().default(0),
  timeLimit: integer("time_limit").notNull(),
  memoryLimit: integer("memory_limit").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  isPremium: boolean("is_premium").notNull().default(false),
});
