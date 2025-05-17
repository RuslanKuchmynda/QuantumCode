ALTER TABLE "public"."problem" ALTER COLUMN "difficulty" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."problem_difficulty";--> statement-breakpoint
CREATE TYPE "public"."problem_difficulty" AS ENUM('Easy', 'Medium', 'Hard');--> statement-breakpoint
ALTER TABLE "public"."problem" ALTER COLUMN "difficulty" SET DATA TYPE "public"."problem_difficulty" USING "difficulty"::"public"."problem_difficulty";