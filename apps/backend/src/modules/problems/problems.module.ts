import { Module } from "@nestjs/common";

import { ProblemsController } from "@/modules/problems/problems.controller";
import { ProblemsService } from "@/modules/problems/problems.service";

@Module({
  providers: [ProblemsService],
  controllers: [ProblemsController],
  exports: [ProblemsService],
})
export class ProblemsModule {}
