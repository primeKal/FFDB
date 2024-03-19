import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { StoriesModule } from './stories/stories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, UsersModule, TestimoniesModule, StoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
