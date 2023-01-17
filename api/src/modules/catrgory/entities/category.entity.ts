import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
