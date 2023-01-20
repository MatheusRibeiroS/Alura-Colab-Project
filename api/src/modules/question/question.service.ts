import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestionEntity } from "./entities/question.entity";
import { CategoryEntity } from "../category/entities/category.entity";
import { QuestionDTO } from "./dto/question.dto";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllQuestions() {
    return await this.questionRepository.find();
  }

  async getQuestionById(id: string) {
    return await this.questionRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getRandomQuestion(level: string) {
    return await this.questionRepository
      .createQueryBuilder("question")
      .select()
      .orderBy("RANDOM()")
      .where({
        level,
      })
      .getOne();
  }

  async createQuestion(body: QuestionDTO) {
    return await this.questionRepository.save({
      ...body,
      createdAt: new Date(),
    });
  }

  async updateQuestion(id: string, body: Partial<QuestionDTO>) {
    return await this.questionRepository.update(id, {
      ...body,
      updatedAt: new Date(),
    });
  }

  async deleteQuestion(id: string) {
    return await this.questionRepository.delete(id);
  }

  async getAnswer(id, body) {
    const isAnswer = await this.questionRepository.findOne({
      where: {
        id: body.id,
      },
    });
    if (isAnswer.answer === body.answer) return true;
    else return false;
  }
}
