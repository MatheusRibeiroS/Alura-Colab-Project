import "dotenv/config";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { QuestionModule } from "./modules/question/question.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./modules/user/entities/user.entity";
import { QuestionEntity } from "./modules/question/entities/question.entity";

@Module({
  imports: [
    UserModule,
    QuestionModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      synchronize: true,
      url: process.env.DATABASE_URL,
      entities: [UserEntity, QuestionEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
