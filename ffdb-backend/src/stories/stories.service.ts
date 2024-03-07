import { Inject, Injectable } from '@nestjs/common';
import { STORY_REPOSITORY } from 'src/utils/constants';
import { Story } from './stories.entity';

@Injectable()
export class StoriesService {
    constructor(@Inject(STORY_REPOSITORY) private readonly storyRepository: typeof Story) {
    }

    async getAllstories(): Promise<Story[]> {
        return await this.storyRepository.findAll()
    }

    async createStory(createStoryDto): Promise<any> {
        let createdStory = await this.storyRepository.create<Story>(createStoryDto);
        return createdStory;
    }
}
