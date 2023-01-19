import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GameEntity } from "./entities/game.entity";
import { GameDTO } from "./dto/game.dto";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private readonly gameRepository: Repository<GameEntity>,
  ) {}

  async getAllGames() {
    return await this.gameRepository.find({
      relations: ["user"],
    });
  }

  async getGameById(id: string) {
    return await this.gameRepository.findOne({
      relations: ["user"],
      where: {
        id,
      },
    });
  }

  async createGame(game: GameDTO) {
    return await this.gameRepository.save({
      ...game,
      createdAt: new Date(),
    });
  }

  async updateGame(id: string, body: Partial<GameDTO>) {
    return await this.gameRepository.update(id, {
      ...body,
      updatedAt: new Date(),
    });
  }

  async deleteGame(id: string) {
    return await this.gameRepository.delete(id);
  }
}
