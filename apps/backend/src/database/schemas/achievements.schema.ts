import { integer, text } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "../schema-constants";

export const achievementsSchema = pgTable(schemas.achievements, {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon"),
  points: integer("points").notNull().default(0),
});
