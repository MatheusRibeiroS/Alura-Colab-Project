import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDTO } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: Omit<UserDTO, "name">) {
    const userRes = await this.userService.getUserByEmail(user.email);
    const payload = { username: userRes.name, email: userRes.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validate(token: string) {
    try {
      this.jwtService.verify(token);
      return true;
    } catch {
      return false;
    }
  }
}
