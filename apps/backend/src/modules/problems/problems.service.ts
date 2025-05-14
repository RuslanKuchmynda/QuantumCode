import { Injectable } from "@nestjs/common";
import { db } from "@/database/db";
import { problemListSchema, problemDetailsSchema } from "@/database/schemas";
import { eq } from "drizzle-orm";

@Injectable()
export class ProblemsService {
  async getAllProblems() {
    return db.select().from(problemListSchema);
  }

  async getProblemById(id: number) {
    const [problem] = await db
      .select()
      .from(problemListSchema)
      .where(eq(problemListSchema.id, id));
    
    const [details] = await db
      .select()
      .from(problemDetailsSchema)
      .where(eq(problemDetailsSchema.id, id));

    return { ...problem, ...details };
  }
}
