import { pgTable } from "drizzle-orm/pg-core/table";

import { jsonb, pgEnum, text } from "drizzle-orm/pg-core/columns";
import { schemas } from "../schema-constants";
import { problemsSchema } from "./problems.schema";

export interface TestCase {
  input: string;
  output: string;
  explanation?: string;
}

export const programmingLanguageEnum = pgEnum("programming_language", [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
]);

export const problemDetailsSchema = pgTable(schemas.problemDetails, {
  id: text("id").primaryKey(),
  problemId: text("problem_id")
    .notNull()
    .references(() => problemsSchema.id),
  description: text("description").notNull(),
  examples: jsonb("examples").notNull(),
  constraints: jsonb("constraints").notNull(),
  starterCode: jsonb("starter_code").notNull().$type<{
    [key in (typeof programmingLanguageEnum.enumValues)[number]]?: {
      code: string;
      template?: string;
      testCases?: TestCase[];
    };
  }>(),
  hints: jsonb("hints").notNull().default([]),
  solution: jsonb("solution").notNull().$type<{
    [key in (typeof programmingLanguageEnum.enumValues)[number]]?: {
      code: string;
      explanation: string;
      timeComplexity: string;
      spaceComplexity: string;
    };
  }>(),
  explanation: text("explanation"),
  availableLanguages: jsonb("available_languages")
    .notNull()
    .$type<(typeof programmingLanguageEnum.enumValues)[number][]>()
    .default([]),
});
