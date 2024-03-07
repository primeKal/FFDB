import { Module } from '@nestjs/common';
import { TestimoniesController } from './testimonies.controller';
import { TestimoniesService } from './testimonies.service';
import { testimonyProvider } from './tetimonies.provider';

@Module({
  controllers: [TestimoniesController],
  providers: [TestimoniesService, ...testimonyProvider]
})
export class TestimoniesModule {}
