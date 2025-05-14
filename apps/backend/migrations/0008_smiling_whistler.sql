CREATE TABLE "problemDetails" (
	"id" serial PRIMARY KEY NOT NULL,
	"example" jsonb NOT NULL,
	"description" text NOT NULL,
	"constraints" jsonb NOT NULL,
	"starterCode" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "example";--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "constraints";--> statement-breakpoint
ALTER TABLE "problem" DROP COLUMN "starterCode";