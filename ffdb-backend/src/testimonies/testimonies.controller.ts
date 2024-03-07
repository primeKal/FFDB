import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { Testimony } from './testimonyies.entity';

@Controller('testimonies')
export class TestimoniesController {
    constructor(private readonly testimoniesService: TestimoniesService) {

    }
    @Post()
    public async createTestimony(@Body() body: any): Promise<any> {
        return this.testimoniesService.createTestimony(body);
    }
    @Get()
    public async getAllUsers(): Promise<Testimony[]> {
        return this.testimoniesService.getAllTestimonies();
    }
}
