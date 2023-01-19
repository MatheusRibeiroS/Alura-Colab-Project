import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class CategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  updatedAt: Date;
}
