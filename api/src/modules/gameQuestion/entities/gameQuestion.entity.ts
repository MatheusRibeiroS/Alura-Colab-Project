import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { GameEntity } from "../../game/entities/game.entity";
import { QuestionEntity } from "../../question/entities/question.entity";

@Entity("game_question")
export class GameQuestionEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(() => GameEntity)
  @JoinColumn()
  game: GameEntity;

  @ManyToMany(() => QuestionEntity)
  @JoinColumn()
  question: QuestionEntity;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
