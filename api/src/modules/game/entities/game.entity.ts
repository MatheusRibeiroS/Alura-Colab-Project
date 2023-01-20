import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserEntity } from "src/modules/user/entities/user.entity";

@Entity("games")
export class GameEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  finished: Date;

  @Column()
  level: number;

  @Column({
    default: 0,
  })
  wrong: number;

  @Column({
    default: 0,
  })
  skiped: number;

  @Column()
  cards_help: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column()
  createdAt: Date;

  @Column({
    nullable: true,
  })
  updatedAt: Date;
}
