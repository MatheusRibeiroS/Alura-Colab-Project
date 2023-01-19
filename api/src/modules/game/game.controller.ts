import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
}
