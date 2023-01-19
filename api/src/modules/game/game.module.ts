import { Module } from "@nestjs/common";
import { GameService } from "./game.service";
import { GameController } from "./game.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameEntity } from "./entities/game.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GameEntity])],
  providers: [GameService],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {}
