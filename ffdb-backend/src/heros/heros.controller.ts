import { Body, Controller, Get, Post } from '@nestjs/common';
import { HerosService } from './heros.service';
import { Hero } from './heros.entity';

@Controller('heros')
export class HerosController {
    constructor(private readonly heroService: HerosService) {

    }
    @Post()
    public async createStory(@Body() body: any): Promise<any> {
        return this.heroService.createHero(body);
    }
    @Get()
    public async getAllUsers(@Body() body: any): Promise<Hero[]> {
        return this.heroService.getAllHeros();
    }

}
