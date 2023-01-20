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
import { HttpModule } from "@nestjs/axios";
import * as https from "https";

@Module({
  imports: [
    UserModule,
    QuestionModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      url: process.env.DATABASE_URL,
      entities: [UserEntity, QuestionEntity],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
