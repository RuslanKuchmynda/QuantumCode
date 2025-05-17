import { jsonb, pgEnum, text, timestamp } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { userSchema } from "./users.schema";
import { schemas } from "../schema-constants";

export const activityTypeEnum = pgEnum("activity_type", ["problem_solved", "achievement_unlocked", "streak_updated"]);

export const activityHistorySchema = pgTable(schemas.activityHistory, {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => userSchema.id),
    type: activityTypeEnum('type').notNull(),
    details: jsonb('details'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  });