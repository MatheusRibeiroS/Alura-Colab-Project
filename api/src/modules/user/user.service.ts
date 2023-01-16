import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }

  async getUserById(id: string) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(body: any) {
    return await this.userRepository.save(body);
  }

  async updateUser(id: string, body: any) {
    return await this.userRepository.update(id, body);
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id);
  }
}
