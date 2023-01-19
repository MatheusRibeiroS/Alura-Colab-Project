import "dotenv/config";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { QuestionModule } from "./modules/question/question.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./modules/user/entities/user.entity";
import { AuthModule } from "./modules/auth/auth.module";
import { QuestionEntity } from "./modules/question/entities/question.entity";
import { CategoryModule } from "./modules/category/category.module";
import { CategoryEntity } from "./modules/category/entities/category.entity";
import { GameModule } from "./modules/game/game.module";
import { GameEntity } from "./modules/game/entities/game.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      synchronize: true,
      url: process.env.DATABASE_URL,
      entities: [UserEntity, QuestionEntity, CategoryEntity, GameEntity],
    }),
    UserModule,
    QuestionModule,
    AuthModule,
    GameModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
