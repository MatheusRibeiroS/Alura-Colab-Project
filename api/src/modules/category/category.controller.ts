import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDTO } from "./dto/category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(":id")
  async getCategoryById(@Param("id") id: string) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() body: CategoryDTO) {
    return this.categoryService.createCategory(body);
  }

  @Put(":id")
  async updateCategory(
    @Param("id") id: string,
    @Body() body: Partial<CategoryDTO>,
  ) {
    return this.categoryService.updateCategory(id, body);
  }

  @Delete(":id")
  async deleteCategory(@Param("id") id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
