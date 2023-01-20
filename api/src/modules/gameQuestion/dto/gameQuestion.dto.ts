import { IsString, IsNotEmpty } from "class-validator";
import { GameEntity } from "../../game/entities/game.entity";
import { QuestionEntity } from "../../question/entities/question.entity";

export class GameQuestionDTO {
  @IsNotEmpty()
  @IsString()
  gameId: GameEntity;

  @IsNotEmpty()
  @IsString()
  questionId: QuestionEntity;
}
