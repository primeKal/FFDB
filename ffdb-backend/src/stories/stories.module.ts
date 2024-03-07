import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { storiesProvider } from './stories.provider';

@Module({
  controllers: [StoriesController],
  providers: [StoriesService, ...storiesProvider]
})
export class StoriesModule {}
