import { Module } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionController } from "./question.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionEntity } from "./entities/question.entity";
import { CategoryEntity } from "../category/entities/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity, CategoryEntity])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
