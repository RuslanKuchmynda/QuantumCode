import { Controller, Get } from "@nestjs/common";
import { ProblemsService } from "@/modules/problems/problems.service";

@Controller("problems")
export class ProblemsController {
  constructor(private problemsService: ProblemsService) {}

  @Get()
  getAllProblems() {
    return this.problemsService.getAllProblems();
  }
}
