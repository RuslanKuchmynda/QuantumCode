ALTER TABLE "problem" ALTER COLUMN "example" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "constraints" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "problem" ADD COLUMN "starterCode" jsonb NOT NULL;