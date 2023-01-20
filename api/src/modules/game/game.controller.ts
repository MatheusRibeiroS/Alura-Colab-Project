import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { GameDTO } from "./dto/game.dto";
import { GameService } from "./game.service";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async getAllGames() {
    return this.gameService.getAllGames();
  }

  @Get(":id")
  async getGameById(@Param("id") id: string) {
    return this.gameService.getGameById(id);
  }

  @Post()
  async createGame(@Body() body: GameDTO) {
    return this.gameService.createGame(body);
  }

  @Put(":id")
  async updateGame(@Param("id") id: string, @Body() body: Partial<GameDTO>) {
    return this.gameService.updateGame(id, body);
  }

  @Delete(":id")
  async deleteGame(@Param("id") id: string) {
    return this.gameService.deleteGame(id);
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
    return this.gameService.getActiveGameByUserId(id);
  }
}
