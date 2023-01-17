import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { CategoryEntity } from "./entities/category.entity";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), HttpModule],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
