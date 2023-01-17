import { Module } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionEntity } from "./entities/question.entity";

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
