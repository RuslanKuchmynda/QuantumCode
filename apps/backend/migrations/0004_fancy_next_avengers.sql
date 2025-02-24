CREATE TYPE "public"."roles" AS ENUM('dev', 'admin');--> statement-breakpoint
CREATE TABLE "userStats" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"accuracy" integer DEFAULT 0,
	"ranking" integer DEFAULT 0,
	"difficulty_distribution" jsonb DEFAULT '{"easy":0,"medium":0,"hard":0}'::jsonb,
	"streak" integer DEFAULT 0,
	"solved_problem" integer DEFAULT 0
);
--> statement-breakpoint
ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "problems" RENAME TO "problem";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "roles" DEFAULT 'dev';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "last_active" timestamp;--> statement-breakpoint
ALTER TABLE "userStats" ADD CONSTRAINT "userStats_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");