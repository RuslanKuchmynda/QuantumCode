import { Module } from "@nestjs/common";

import { UserService } from "@/modules/user/user.service";
import { UserController } from "@/modules/user/user.controller";
import { AuthModule } from "@/modules/auth/auth.module";

@Module({
  imports: [AuthModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
