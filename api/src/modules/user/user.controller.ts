import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Headers,
  Param,
  Body,
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() body: any) {
    return this.userService.createUser(body);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() body: any) {
    return this.userService.updateUser(id, body);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}
