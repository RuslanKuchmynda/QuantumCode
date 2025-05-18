import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { UserService } from "@/modules/user/user.service";
import { JwtAuthGuard } from "@/modules/auth/jwt-auth.guard";
import { Request } from "express";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getUser(@Req() req: Request & { user: { id: string } }) {
    return this.userService.getUser(req.user.id);
  }
  @UseGuards(JwtAuthGuard)
  @Get("/stats")
  getUserStats(@Req() req: Request & { user: { id: string } }) {
    return this.userService.getUserStats(req.user.id);
  }
}
