import "dotenv/config";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./modules/user/entities/user.entity";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      synchronize: true,
      url: process.env.DATABASE_URL,
      entities: [UserEntity],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
