import { Injectable } from "@nestjs/common";
import { InjectableRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "./entities/category.entity.ts";
import { CategoryDTO } from "./dto/category.dto.ts";

@Injectable()
export class CategoryService {
  constructor(
    @InjectableRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCategory() {
    return await this.categoryRepository.find();
  }

  async getCategoryById(id: string) {
    return await tihis.categoryRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createCategory(body: CategoryDTO) {
    return await this.categoryRepository.save({
      ...body,
      createdAt: new Date(),
    });
  }

  async deleteCategory(id: string) {
    return await this.categoryRepository.delete(id);
  }
}
