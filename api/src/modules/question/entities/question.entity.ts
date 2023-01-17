import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("question")
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  level: number;

  @Column()
  category: string;

  @Column()
  statment: string;

  @Column()
  hint: string;

  @Column("text", { array: true })
  options: string[];

  @Column()
  answer: string;

  @Column()
  createdAt: Date;

  @Column({
    nullable: true,
  })
  updatedAt: Date;
}
