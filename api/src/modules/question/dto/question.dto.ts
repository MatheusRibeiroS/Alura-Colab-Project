import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsArray,
  Min,
  Max,
} from "class-validator";
import { CategoryEntity } from "../../category/entities/category.entity";

export class QuestionDTO {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(10)
  level: number;

  @IsNotEmpty()
  @IsString()
  category: CategoryEntity;

  @IsNotEmpty()
  @IsString()
  statment: string;

  @IsNotEmpty()
  @IsString()
  hint: string;

  @IsNotEmpty()
  @IsArray()
  options: string[];

  @IsNotEmpty()
  @IsArray()
  answer: string;
}
