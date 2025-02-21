CREATE TABLE "problems" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"status" "status" NOT NULL,
	"difficulty" "difficulty" NOT NULL,
	"submission" text NOT NULL,
	"successRate" text NOT NULL,
	"type" text NOT NULL
);
