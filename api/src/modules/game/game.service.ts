import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { GameEntity } from "./entities/game.entity";
import { GameDTO } from "./dto/game.dto";
import { BadRequestException } from "@nestjs/common";

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
    console.log(game);
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

  async wrongAnswer(id: string) {
    const game = await this.gameRepository.findOne({
      where: {
        id,
      },
    });

    if (game) {
      game.wrong += 1;
      game.updatedAt = new Date();
      return await this.gameRepository.update(id, {
        ...game,
      });
    }
  }

  async helpAnswer(id: string) {
    const game = await this.gameRepository.findOne({
      where: {
        id,
      },
    });

    if (game.cards_help < 3) {
      game.cards_help += 1;
      game.updatedAt = new Date();
      return await this.gameRepository.update(id, {
        ...game,
      });
    } else if (game.cards_help === 3) {
      throw new BadRequestException(
        "Você já usou todos os seus cartões de ajuda",
      );
    }
  }

  async skipAnswer(id: string) {
    const game = await this.gameRepository.findOne({
      where: {
        id,
      },
    });

    if (game) {
      game.skipped += 1;
      game.updatedAt = new Date();
      return await this.gameRepository.update(id, {
        ...game,
      });
    }
  }

  async finishGame(id: string) {
    const game = await this.gameRepository.findOne({
      where: {
        id,
      },
    });

    if (game) {
      game.finished = new Date();
      game.updatedAt = new Date();
      return await this.gameRepository.update(id, {
        ...game,
      });
    }
  }

  async getActiveGameByUserId(userID: string) {
    const gameSession = await this.gameRepository.find({
      where: {
        user: { id: userID },
        finished: IsNull(),
      },
    });
    return gameSession;
  }
}
