import { Module } from "@nestjs/common";
import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { AuthModule } from "@/modules/auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { ProblemsModule } from "@/modules/problems/problems.module";
import { UserModule } from "@/modules/user/user.module";

@Module({
  imports: [AuthModule, PassportModule, ProblemsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
