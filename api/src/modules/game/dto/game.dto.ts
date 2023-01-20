import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GameDTO {
  @IsString()
  finished: Date;

  @IsNotEmpty()
  @IsNumber()
  level: number;

  @IsNotEmpty()
  @IsNumber()
  wrong: number;

  @IsNotEmpty()
  @IsNumber()
  skipped: number;

  @IsNotEmpty()
  @IsNumber()
  cards_help: number;

  @IsNotEmpty()
  @IsString()
  UserID: string;
}
