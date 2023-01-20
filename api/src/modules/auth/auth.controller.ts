import { Post, Request, Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Request() req) {
    return await this.authService.login(req.body);
  }

  @Post("token/validate")
  async validate(@Request() req) {
    return await this.authService.validate(req.body.access_token);
  }
}
