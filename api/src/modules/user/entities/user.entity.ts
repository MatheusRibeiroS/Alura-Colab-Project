import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 500 })
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
