import { pgEnum, text, timestamp, boolean } from "drizzle-orm/pg-core/columns";
import { pgTable } from "drizzle-orm/pg-core/table";
import { schemas } from "@/database/schema-constants";

export const rolesEnum = pgEnum("roles", ["dev", "admin"]);
export const themeEnum = pgEnum("theme", ["dark", "light"]);

export const userSchema = pgTable(schemas.user, {
  id: text("id").primaryKey(),
  email: text("email").unique().notNull(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  image: text("image"),
  password: text("password").notNull(),
  role: rolesEnum("role").default("dev").notNull(),
  lastActive: timestamp("last_active"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  theme: themeEnum("theme").default("light"),
  notifications: boolean("notifications").default(true),
});
