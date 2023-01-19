import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from "@nestjs/common";
import { QuestionService } from "./question.service";
import { QuestionDTO } from "./dto/question.dto";

@Controller("questions")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions() {
    return this.questionService.getAllQuestions();
  }

  @Get(":id")
  async getQuestionById(@Param("id") id: string) {
    return this.questionService.getQuestionById(id);
  }

  @Get()
  async getRandomQuestion(@Param("level") level: string) {
    return this.getRandomQuestion(level);
  }

  @Post()
  async createQuestion(@Body() body: QuestionDTO) {
    return this.questionService.createQuestion(body);
  }

  @Put(":id")
  async updateQuestion(
    @Param("id") id: string,
    @Body() body: Partial<QuestionDTO>,
  ) {
    return this.questionService.updateQuestion(id, body);
  }

  @Delete(":id")
  async deleteQuestion(@Param("id") id: string) {
    return this.questionService.deleteQuestion(id);
  }
}
