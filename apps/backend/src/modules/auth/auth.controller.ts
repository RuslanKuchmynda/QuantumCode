import { Controller, Post, Body } from "@nestjs/common";
import { AuthService, User } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-in")
  async signIn(@Body() body: { email: string; password: string }) {
    console.log(body);

    return this.authService.signIn(body.email, body.password);
  }
  @Post("sign-up")
  async signUp(
    @Body() body: { email: string; password: string },
  ): Promise<{ message: string; user: User }> {
    console.log(body);
    return this.authService.signUp(body.email, body.password);
  }
}
