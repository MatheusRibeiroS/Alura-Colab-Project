import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsArray,
  Min,
  Max,
} from "class-validator";

export class QuestionDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(10)
  level: number;

  @IsNotEmpty()
  @IsString()
  category: string;

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
