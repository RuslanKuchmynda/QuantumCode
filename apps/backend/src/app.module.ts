import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "@/modules/auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { ProblemsModule } from "@/modules/problems/problems.module";

@Module({
  imports: [AuthModule, PassportModule, ProblemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
