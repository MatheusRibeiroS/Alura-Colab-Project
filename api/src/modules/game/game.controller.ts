import {
  Controller,
  Get,
  NotFoundException,
  ConflictException,
  Param,
  Post,
  Put,
} from "@nestjs/common";

import { GameService } from "./game.service";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(":id")
  async getGameById(@Param("id") id: string) {
    return this.gameService.getGameById(id);
  }

  @Post("new-game/:userId")
  async createGame(@Param("userId") userId: string) {
    const createdGame = await this.gameService.createGame(userId);
    if (!createdGame) throw new ConflictException("Já existe um jogo ativo");
    return createdGame;
  }

  @Put("wrong/:gameid")
  async wrongAnswer(@Param("gameid") id: string) {
    return this.gameService.wrongAnswer(id);
  }

  @Put("help/:gameid")
  async helpAnswer(@Param("gameid") id: string) {
    return this.gameService.helpAnswer(id);
  }

  @Put("skip/:gameid")
  async skipAnswer(@Param("gameid") id: string) {
    return this.gameService.skipAnswer(id);
  }

  @Put("finish/:gameid")
  async finishGame(@Param("gameid") id: string) {
    return this.gameService.finishGame(id);
  }

  @Get("active/:userid")
  async getActiveGame(@Param("userid") id: string) {
    const activeGame = await this.gameService.getActiveGameByUserId(id);
    if (!activeGame) throw new NotFoundException("Active game not found");
    return activeGame;
  }
}
