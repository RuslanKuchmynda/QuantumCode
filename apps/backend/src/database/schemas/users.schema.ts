import { pgEnum, serial, text, timestamp } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";

export const rolesEnum = pgEnum("roles", ["dev", "admin"]);

export const userSchema = pgTable(schemas.user, {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  password: text("password").notNull(),
  role: rolesEnum("role").default("dev").notNull(),
  lastActive: timestamp("last_active"),
  createdAt: timestamp("created_at").defaultNow(),
});
