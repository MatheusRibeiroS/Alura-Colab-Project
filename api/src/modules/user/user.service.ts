import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserDTO } from "./dto/user.dto";
import * as CryptoJS from "crypto-js";

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

  async createUser(user: UserDTO) {
    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      `${process.env.CRYPTO_SECRET}`,
    ).toString(CryptoJS.enc.Utf8);

    user.password = decryptedPassword;

    return await this.userRepository.save({
      ...user,
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
