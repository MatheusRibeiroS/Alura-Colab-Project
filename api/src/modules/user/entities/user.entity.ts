import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 200 })
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
