import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { CategoryDTO } from "./dto/category.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCategories() {
    return await this.categoryRepository.find();
  }

  async getCategoryById(id: string) {
    return await this.categoryRepository.findOne({
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

  async updateCategory(id: string, body: Partial<CategoryDTO>) {
    return await this.categoryRepository.update(id, {
      ...body,
      updatedAt: new Date(),
    });
  }

  async deleteCategory(id: string) {
    return await this.categoryRepository.delete(id);
  }
}
