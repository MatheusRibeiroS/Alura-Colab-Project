import { IsString, IsNotEmpty } from "class-validator";

export class CategoryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
