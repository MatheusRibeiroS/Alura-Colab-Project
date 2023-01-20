import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CategoryEntity } from "../../category/entities/category.entity";

@Entity("question")
export class QuestionEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  level: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn()
  category: CategoryEntity;

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
