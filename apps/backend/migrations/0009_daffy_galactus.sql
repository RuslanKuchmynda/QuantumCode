CREATE TYPE "public"."activity_type" AS ENUM('problem_solved', 'achievement_unlocked', 'streak_updated');--> statement-breakpoint
CREATE TYPE "public"."theme" AS ENUM('dark', 'light');--> statement-breakpoint
CREATE TYPE "public"."problem_category" AS ENUM('algorithms', 'data-structures', 'system-design', 'database', 'concurrency', 'networking', 'security', 'frontend', 'backend', 'mobile', 'devops', 'testing');--> statement-breakpoint
CREATE TYPE "public"."problem_difficulty" AS ENUM('easy', 'medium', 'hard');--> statement-breakpoint
CREATE TYPE "public"."problem_status" AS ENUM('draft', 'published', 'archived', 'review');--> statement-breakpoint
CREATE TYPE "public"."programming_language" AS ENUM('javascript', 'typescript', 'python', 'java', 'cpp', 'csharp', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin');--> statement-breakpoint
CREATE TABLE "achievements" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"icon" text,
	"points" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "activityHistory" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"type" "activity_type" NOT NULL,
	"details" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "problemStats" (
	"id" text PRIMARY KEY NOT NULL,
	"problem_id" text NOT NULL,
	"total_submissions" integer DEFAULT 0 NOT NULL,
	"accepted_submissions" integer DEFAULT 0 NOT NULL,
	"success_rate" integer DEFAULT 0 NOT NULL,
	"average_runtime" integer DEFAULT 0 NOT NULL,
	"average_memory" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "userAchievements" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"achievement_id" text NOT NULL,
	"unlocked_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "submissions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"problem_id" text NOT NULL,
	"status" text NOT NULL,
	"code" text NOT NULL,
	"language" text NOT NULL,
	"runtime" integer,
	"memory" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "problemTests" (
	"id" text PRIMARY KEY NOT NULL,
	"problem_id" text NOT NULL,
	"input" jsonb NOT NULL,
	"expected_output" jsonb NOT NULL,
	"is_hidden" boolean DEFAULT false NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "problemDetails" RENAME COLUMN "example" TO "examples";--> statement-breakpoint
ALTER TABLE "problemDetails" RENAME COLUMN "starterCode" TO "starter_code";--> statement-breakpoint
ALTER TABLE "userStats" RENAME COLUMN "solved_problem" TO "problems_solved";--> statement-breakpoint
ALTER TABLE "userStats" RENAME COLUMN "streak" TO "current_streak";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "problemDetails" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "problem" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "problem" ALTER COLUMN "status" SET DATA TYPE problem_status;--> statement-breakpoint
ALTER TABLE "problem" ALTER COLUMN "difficulty" SET DATA TYPE problem_difficulty;--> statement-breakpoint
ALTER TABLE "userStats" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "userStats" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "image" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "theme" "theme" DEFAULT 'light';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "notifications" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD COLUMN "problem_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD COLUMN "hints" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD COLUMN "solution" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD COLUMN "explanation" text;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD COLUMN "available_languages" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "category" "problem_category" NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "tags" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "points" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "time_limit" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "memory_limit" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "is_premium" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "userStats" ADD COLUMN "success_rate" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "userStats" ADD COLUMN "best_streak" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "userStats" ADD COLUMN "global_ranking" integer;--> statement-breakpoint
ALTER TABLE "userStats" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "activityHistory" ADD CONSTRAINT "activityHistory_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problemStats" ADD CONSTRAINT "problemStats_problem_id_problem_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problem"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userAchievements" ADD CONSTRAINT "userAchievements_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userAchievements" ADD CONSTRAINT "userAchievements_achievement_id_achievements_id_fk" FOREIGN KEY ("achievement_id") REFERENCES "public"."achievements"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_problem_id_problem_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problem"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problemTests" ADD CONSTRAINT "problemTests_problem_id_problem_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problem"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problemDetails" ADD CONSTRAINT "problemDetails_problem_id_problem_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problem"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "submission";--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "successRate";--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "type";--> statement-breakpoint
ALTER TABLE "userStats" DROP COLUMN "accuracy";--> statement-breakpoint
ALTER TABLE "userStats" DROP COLUMN "difficulty_distribution";--> statement-breakpoint
ALTER TABLE "problem" ADD CONSTRAINT "problem_slug_unique" UNIQUE("slug");