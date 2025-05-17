import { Injectable } from "@nestjs/common";
import { db } from "@/database/db";
import {
  problemsSchema,
  problemDetailsSchema,
  problemStatsSchema,
} from "@/database/schemas";
import { eq } from "drizzle-orm";

@Injectable()
export class ProblemsService {
  async getAllProblems() {
    const problems = await db.select().from(problemsSchema);

    const stats = await db.select().from(problemStatsSchema);

    return {
      problems: problems.map((problem) => ({
        ...problem,
        stats: stats.find((stat) => stat.problemId === problem.id) || {
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          successRate: 0,
          averageRuntime: 0,
          averageMemory: 0,
          updatedAt: new Date(),
        },
      })),
    };
  }

  async getProblemById(id: string) {
    const [problem] = await db
      .select()
      .from(problemsSchema)
      .where(eq(problemsSchema.id, id));

    const [details] = await db
      .select()
      .from(problemDetailsSchema)
      .where(eq(problemDetailsSchema.problemId, id));

    return {
      problem: {
        ...problem,
        details: {
          ...details,
        },
      },
    };
  }
}
