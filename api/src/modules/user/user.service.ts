import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserDTO } from "./dto/user.dto";

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

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async createUser(body: UserDTO) {
    return await this.userRepository.save({
      ...body,
      createdAt: new Date(),
    });
  }

  async updateUser(id: string, body: Partial<UserDTO>) {
    return await this.userRepository.update(id, {
      ...body,
      updatedAt: new Date(),
    });
  }

  async deleteUser(id: string) {
    return await this.userRepository.delete(id);
  }
}
