import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GameQuestionEntity } from "./entities/gameQuestion.entity";
import { GameQuestionDTO } from "./dto/gameQuestion.dto";

@Injectable()
export class GameQuestionService {
  constructor(
    @InjectRepository(GameQuestionEntity)
    private readonly gameQuestionRepository: Repository<GameQuestionEntity>,
  ) {}

  async getAllGameQuestions() {
    return await this.gameQuestionRepository.find();
  }

  async getGameQuestionById(id: string) {
    return await this.gameQuestionRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createGameQuestion(body: GameQuestionDTO) {
    return await this.gameQuestionRepository.save({
      ...body,
      createdAt: new Date(),
    });
  }

  async updateGameQuestion(id: string, body: Partial<GameQuestionDTO>) {
    return await this.gameQuestionRepository.update(id, {
      ...body,
      updatedAt: new Date(),
    });
  }

  async deleteGameQuestion(id: string) {
    return await this.gameQuestionRepository.delete(id);
  }
}
