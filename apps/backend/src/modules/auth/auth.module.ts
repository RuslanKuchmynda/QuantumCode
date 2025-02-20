import { Module } from "@nestjs/common";
import { AuthController } from "@/modules/auth/auth.controller";
import { AuthService } from "@/modules/auth/auth.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
