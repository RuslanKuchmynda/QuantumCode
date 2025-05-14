import { Controller, Get, Param } from "@nestjs/common";
import { ProblemsService } from "@/modules/problems/problems.service";

@Controller("problems")
export class ProblemsController {
  constructor(private problemsService: ProblemsService) {}

  @Get()
  getAllProblems() {
    return this.problemsService.getAllProblems();
  }

  @Get(":id")
  getProblemById(@Param("id") id: number) {
    return this.problemsService.getProblemById(id);
  }
}
