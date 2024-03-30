import { Inject, Injectable } from '@nestjs/common';
import { STORY_REPOSITORY } from 'src/utils/constants';
import { Story } from './stories.entity';
import { Hero } from 'src/heros/heros.entity';

@Injectable()
export class StoriesService {
    constructor(@Inject(STORY_REPOSITORY) private readonly storyRepository: typeof Story) {
    }

    async getAllstories(): Promise<Story[]> {
        return await this.storyRepository.findAll( {  include: [{ model: Hero, as: 'hero' }] })
    }

    async createStory(createStoryDto): Promise<any> {
        let createdStory = await this.storyRepository.create<Story>(createStoryDto);
        return createdStory;
    }
}
