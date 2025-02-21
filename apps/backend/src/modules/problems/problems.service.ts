import { Injectable } from "@nestjs/common";
import { db } from "@/database/db";
import { problemSchema } from "@/database/schemas";

@Injectable()
export class ProblemsService {
  async getAllProblems() {
    return db.select().from(problemSchema);
  }
}
