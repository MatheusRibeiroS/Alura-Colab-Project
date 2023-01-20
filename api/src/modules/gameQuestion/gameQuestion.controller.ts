import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from "@nestjs/common";
import { GameQuestionService } from "./gameQuestion.service";
import { GameQuestionDTO } from "./dto/gameQuestion.dto";

@Controller("gameQuestion")
export class GameQuestionController {
  constructor(private readonly gameQuestionService: GameQuestionService) {}

  @Get()
  async getAllGameQuestions() {
    return this.gameQuestionService.getAllGameQuestions();
  }

  @Get(":id")
  async getGameQuestionById(@Param("id") id: string) {
    return this.gameQuestionService.getGameQuestionById(id);
  }

  @Post()
  async createGameQuestion(@Body() body: GameQuestionDTO) {
    return this.gameQuestionService.createGameQuestion(body);
  }

  @Put(":id")
  async updateGameQuestion(
    @Param("id") id: string,
    @Body() body: Partial<GameQuestionDTO>,
  ) {
    return this.gameQuestionService.updateGameQuestion(id, body);
  }

  @Delete(":id")
  async deleteGameQuestion(@Param("id") id: string) {
    return this.gameQuestionService.deleteGameQuestion(id);
  }
}
