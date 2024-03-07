import { Body, Controller, Get, Post } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { Story } from './stories.entity';

@Controller('stories')
export class StoriesController {
    constructor(private readonly storiesService: StoriesService) {

    }
    @Post()
    public async createStory(@Body() body: any): Promise<any> {
        return this.storiesService.createStory(body);
    }
    @Get()
    public async getAllUsers(@Body() body: any): Promise<Story[]> {
        return this.storiesService.getAllstories();
    }
}
