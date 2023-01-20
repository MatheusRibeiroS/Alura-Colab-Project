import { Module } from "@nestjs/common";
import { GameQuestionService } from "./gameQuestion.service";
import { GameQuestionController } from "./gameQuestion.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameQuestionEntity } from "./entities/gameQuestion.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GameQuestionEntity])],
  providers: [GameQuestionService],
  controllers: [GameQuestionController],
  exports: [GameQuestionService],
})
export class GameQuestionModule {}
