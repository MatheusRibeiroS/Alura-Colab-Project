import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDTO } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";
import { UnauthorizedException } from "@nestjs/common";
import * as CryptoJS from "crypto-js";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: Omit<UserDTO, "name">) {
    const userRes = await this.userService.getUserByEmail(user.email);

    const providedPassword = CryptoJS.AES.decrypt(
      user.password,
      `${process.env.CRYPTO_SECRET}`,
    ).toString(CryptoJS.enc.Utf8);

    const userPassword = CryptoJS.AES.decrypt(
      userRes.password,
      `${process.env.CRYPTO_SECRET}`,
    ).toString(CryptoJS.enc.Utf8);

    if (userPassword == providedPassword) {
      const payload = { username: userRes.name, email: userRes.email };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException("Invalid user credentials");
    }
  }

  async validate(token: string) {
    try {
      this.jwtService.verify(token);
      return true;
    } catch {
      return new UnauthorizedException("AccessToken not valid");
    }
  }
}
