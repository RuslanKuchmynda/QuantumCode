import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
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
